// sanity.cli.js
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0v3qhuan',   // <-- paste your real id
    dataset: 'production'           // or your dataset name
  }
})
