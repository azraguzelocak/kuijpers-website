import { useState } from "react";

interface FormState {
	name: string;
	email: string;
	company: string;
	subject: string;
	message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormState = {
	name: "",
	email: "",
	company: "",
	subject: "",
	message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Web3Forms access key (this key is public by design — safe to ship in the browser).
// Get a free key at https://web3forms.com by entering the recipient address
// (jan@kuijperskip.com). Then paste it below, or set PUBLIC_WEB3FORMS_ACCESS_KEY in a
// `.env` file before building. Submissions are emailed to whatever address the key is
// registered to — no server needed, so the site can be hosted as static files anywhere.
const WEB3FORMS_ACCESS_KEY =
	import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

const inputClass = (hasError: boolean) =>
	`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-stone-900 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-stone-50 ${
		hasError ? "border-red-400" : "border-stone-300"
	}`;

export default function ContactForm() {
	const [values, setValues] = useState<FormState>(EMPTY);
	const [errors, setErrors] = useState<
		Partial<Record<keyof FormState, string>>
	>({});
	const [status, setStatus] = useState<Status>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	function validate(v: FormState) {
		const next: Partial<Record<keyof FormState, string>> = {};
		if (!v.name.trim()) next.name = "Please enter your name.";
		if (!v.email.trim()) next.email = "Please enter your email.";
		else if (!EMAIL_RE.test(v.email.trim()))
			next.email = "Please enter a valid email address.";
		if (!v.subject.trim()) next.subject = "Please enter a subject.";
		if (!v.message.trim()) next.message = "Please enter a message.";
		return next;
	}

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
		// Clear a field's error as soon as the user edits it.
		setErrors((prev) => ({ ...prev, [name]: undefined }));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const validationErrors = validate(values);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setStatus("submitting");
		setErrorMessage("");

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: `Website contact: ${values.subject.trim()}`,
					from_name: "Kuijpers Research Field website",
					replyto: values.email.trim(),
					name: values.name.trim(),
					email: values.email.trim(),
					company: values.company.trim() || "—",
					message: values.message.trim(),
					// simple spam honeypot — real people leave this empty
					botcheck: "",
				}),
			});

			const data = await res.json().catch(() => ({}));

			if (!res.ok || !data.success) {
				throw new Error(
					data.message ?? "Something went wrong. Please try again.",
				);
			}

			setStatus("success");
			setValues(EMPTY);
		} catch (err) {
			setStatus("error");
			setErrorMessage(
				err instanceof Error
					? err.message
					: "Something went wrong. Please try again.",
			);
		}
	}

	if (status === "success") {
		return (
			<div
				role="status"
				className="flex h-full flex-col items-center justify-center rounded-xl border border-brand-100 bg-brand-50 p-10 text-center"
			>
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
					<svg
						className="h-7 w-7"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2.5}
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M20 6 9 17l-5-5" />
					</svg>
				</div>
				<h3 className="mt-5 text-xl font-semibold text-stone-900">
					Thanks for reaching out!
				</h3>
				<p className="mt-2 max-w-sm text-base leading-relaxed text-stone-600">
					Your message has been sent. We'll get back to you as soon as we
					can.
				</p>
				<button
					type="button"
					onClick={() => setStatus("idle")}
					className="mt-6 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
				>
					Send another message
				</button>
			</div>
		);
	}

	const submitting = status === "submitting";

	return (
		<form onSubmit={handleSubmit} noValidate className="space-y-5">
			{status === "error" && (
				<div
					role="alert"
					className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
				>
					{errorMessage}
				</div>
			)}

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
				<Field
					label="Name"
					name="name"
					required
					value={values.name}
					error={errors.name}
					onChange={handleChange}
					disabled={submitting}
				/>
				<Field
					label="Email"
					name="email"
					type="email"
					required
					value={values.email}
					error={errors.email}
					onChange={handleChange}
					disabled={submitting}
				/>
			</div>

			<Field
				label="Company"
				name="company"
				value={values.company}
				error={errors.company}
				onChange={handleChange}
				disabled={submitting}
				optional
			/>

			<Field
				label="Subject"
				name="subject"
				required
				value={values.subject}
				error={errors.subject}
				onChange={handleChange}
				disabled={submitting}
			/>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-medium text-stone-700"
				>
					Message <span className="text-brand-600">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					value={values.message}
					onChange={handleChange}
					disabled={submitting}
					aria-invalid={errors.message ? "true" : undefined}
					className={inputClass(Boolean(errors.message))}
					placeholder="How can we help?"
				/>
				{errors.message && (
					<p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
				)}
			</div>

			<button
				type="submit"
				disabled={submitting}
				className="inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
			>
				{submitting ? (
					<>
						<svg
							className="mr-2 h-5 w-5 animate-spin"
							viewBox="0 0 24 24"
							fill="none"
							aria-hidden="true"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth={4}
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4z"
							/>
						</svg>
						Sending…
					</>
				) : (
					"Send message"
				)}
			</button>
		</form>
	);
}

interface FieldProps {
	label: string;
	name: keyof FormState;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	required?: boolean;
	optional?: boolean;
	disabled?: boolean;
	error?: string;
}

function Field({
	label,
	name,
	value,
	onChange,
	type = "text",
	required = false,
	optional = false,
	disabled = false,
	error,
}: FieldProps) {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium text-stone-700"
			>
				{label} {required && <span className="text-brand-600">*</span>}
				{optional && (
					<span className="font-normal text-stone-400">(optional)</span>
				)}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				disabled={disabled}
				aria-invalid={error ? "true" : undefined}
				className={inputClass(Boolean(error))}
			/>
			{error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
		</div>
	);
}
