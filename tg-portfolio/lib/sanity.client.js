// JS-only, @sanity/client v7+
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-08-01', // use a date string; update as needed
  useCdn: true, // fast, cached, public content
});
