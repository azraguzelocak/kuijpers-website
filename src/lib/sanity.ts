import { createClient } from '@sanity/client';
import {
  allResearchProjectsQuery,
  researchProjectBySlugQuery,
  allTeamMembersQuery,
  allPublicationsQuery,
  allNewsQuery,
  allServicesQuery,
  allAdvantagesQuery,
  siteSettingsQuery,
} from './queries';

export const client = createClient({
  projectId: 'j7mus8gf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getAllResearchProjects() {
  return client.fetch(allResearchProjectsQuery);
}

export async function getResearchProjectBySlug(slug: string) {
  return client.fetch(researchProjectBySlugQuery, { slug });
}

export async function getAllTeamMembers() {
  return client.fetch(allTeamMembersQuery);
}

export async function getAllPublications() {
  return client.fetch(allPublicationsQuery);
}

export async function getAllNews() {
  return client.fetch(allNewsQuery);
}

export async function getAllServices() {
  return client.fetch(allServicesQuery);
}

export async function getAllAdvantages() {
  return client.fetch(allAdvantagesQuery);
}

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}
