// sanity.config.js (v3)
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'personal-portfolio',
  title: 'Portfolio',
  projectId: '0v3qhuan',   // <-- paste from old sanity.json
  dataset: 'production',          // <-- or your dataset name
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
