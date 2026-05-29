// GROQ queries for the FSCL / Kuijpers website Sanity content.
//
// Field projections match the Sanity schema defined in
// `kuijpers-cms/schemaTypes`. Image fields are returned whole (asset ref +
// alt + hotspot) so they can be passed straight to `urlFor()` from image.ts.
// References are dereferenced with `->` to the fields the front-end needs.
// Drafts are excluded so only published content is returned.

export const allResearchProjectsQuery = `
  *[_type == "researchProject" && !(_id in path("drafts.**"))]
    | order(coalesce(orderRank, 9999) asc, coalesce(startDate, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    status,
    category,
    startDate,
    endDate,
    coverImage,
    gallery,
    fundingSource,
    tags,
    featured,
    orderRank,
    lead->{_id, name, role, "slug": slug.current, photo},
    team[]->{_id, name, role, "slug": slug.current, photo},
    relatedPublications[]->{_id, title, "slug": slug.current, publicationDate},
    _createdAt
  }
`;

export const researchProjectBySlugQuery = `
  *[_type == "researchProject" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    status,
    category,
    startDate,
    endDate,
    coverImage,
    gallery,
    fundingSource,
    tags,
    featured,
    orderRank,
    lead->{_id, name, role, "slug": slug.current, photo, bio},
    team[]->{_id, name, role, "slug": slug.current, photo},
    relatedPublications[]->{_id, title, "slug": slug.current, publicationDate, url},
    seo,
    _createdAt
  }
`;

export const allTeamMembersQuery = `
  *[_type == "teamMember" && active != false && !(_id in path("drafts.**"))]
    | order(coalesce(orderRank, 9999) asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    photo,
    bio,
    expertise,
    email,
    phone,
    linkedin,
    orcid,
    orderRank,
    active
  }
`;

export const allPublicationsQuery = `
  *[_type == "publication" && !(_id in path("drafts.**"))]
    | order(coalesce(publicationDate, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    publicationType,
    authors,
    teamAuthors[]->{_id, name, "slug": slug.current},
    venue,
    publicationDate,
    abstract,
    doi,
    url,
    "pdfUrl": pdf.asset->url,
    relatedProject->{_id, title, "slug": slug.current},
    tags,
    featured
  }
`;

export const allNewsQuery = `
  *[_type == "newsPost" && !(_id in path("drafts.**"))]
    | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author->{_id, name, role, "slug": slug.current, photo},
    mainImage,
    body,
    tags,
    relatedProjects[]->{_id, title, "slug": slug.current},
    featured,
    seo
  }
`;

export const allServicesQuery = `
  *[_type == "service" && !(_id in path("drafts.**"))]
    | order(coalesce(orderRank, 9999) asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    icon,
    image,
    body,
    features,
    orderRank,
    featured
  }
`;

export const allAdvantagesQuery = `
  *[_type == "advantage" && !(_id in path("drafts.**"))]
    | order(coalesce(orderRank, 9999) asc, title asc) {
    _id,
    title,
    description,
    icon,
    image,
    orderRank
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    tagline,
    description,
    logo,
    favicon,
    email,
    phone,
    address,
    socialLinks,
    footerText,
    seo
  }
`;
