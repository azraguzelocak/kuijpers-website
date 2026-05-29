import type { APIRoute } from "astro";
import { Resend } from "resend";

// This is an on-demand (server) endpoint, not a static file.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: Record<string, unknown>, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export const POST: APIRoute = async ({ request }) => {
	// Read API config from environment.
	const apiKey = import.meta.env.RESEND_API_KEY;
	const contactEmail = import.meta.env.CONTACT_EMAIL;

	if (!apiKey || !contactEmail) {
		console.error(
			"Contact form misconfigured: RESEND_API_KEY or CONTACT_EMAIL is missing.",
		);
		return json(
			{ success: false, error: "The contact form is not configured yet." },
			500,
		);
	}

	// Parse the JSON payload.
	let payload: Record<string, unknown>;
	try {
		payload = await request.json();
	} catch {
		return json({ success: false, error: "Invalid request body." }, 400);
	}

	const name = String(payload.name ?? "").trim();
	const email = String(payload.email ?? "").trim();
	const company = String(payload.company ?? "").trim();
	const subject = String(payload.subject ?? "").trim();
	const message = String(payload.message ?? "").trim();

	// Server-side validation (never trust the client).
	const missing = [];
	if (!name) missing.push("name");
	if (!email) missing.push("email");
	if (!subject) missing.push("subject");
	if (!message) missing.push("message");

	if (missing.length > 0) {
		return json(
			{
				success: false,
				error: `Missing required field(s): ${missing.join(", ")}.`,
			},
			400,
		);
	}

	if (!EMAIL_RE.test(email)) {
		return json(
			{ success: false, error: "Please provide a valid email address." },
			400,
		);
	}

	const resend = new Resend(apiKey);

	const html = `
		<div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #1c1917; line-height: 1.6;">
			<h2 style="margin: 0 0 16px;">New website contact message</h2>
			<table style="border-collapse: collapse;">
				<tr><td style="padding: 4px 16px 4px 0; font-weight: 600;">Name</td><td>${escapeHtml(name)}</td></tr>
				<tr><td style="padding: 4px 16px 4px 0; font-weight: 600;">Email</td><td>${escapeHtml(email)}</td></tr>
				<tr><td style="padding: 4px 16px 4px 0; font-weight: 600;">Company</td><td>${escapeHtml(company || "—")}</td></tr>
				<tr><td style="padding: 4px 16px 4px 0; font-weight: 600;">Subject</td><td>${escapeHtml(subject)}</td></tr>
			</table>
			<h3 style="margin: 20px 0 8px;">Message</h3>
			<p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
		</div>
	`;

	const text = [
		`Name: ${name}`,
		`Email: ${email}`,
		`Company: ${company || "—"}`,
		`Subject: ${subject}`,
		"",
		"Message:",
		message,
	].join("\n");

	try {
		const { error } = await resend.emails.send({
			// Resend's shared sender works without domain verification for testing.
			// Swap this for a verified domain address in production.
			from: "Website Contact <onboarding@resend.dev>",
			to: [contactEmail],
			replyTo: email,
			subject: `[Website Contact] ${subject}`,
			html,
			text,
		});

		if (error) {
			console.error("Resend error:", error);
			return json(
				{ success: false, error: "Failed to send your message." },
				502,
			);
		}

		return json({ success: true });
	} catch (err) {
		console.error("Unexpected error sending contact email:", err);
		return json(
			{ success: false, error: "Failed to send your message." },
			500,
		);
	}
};
