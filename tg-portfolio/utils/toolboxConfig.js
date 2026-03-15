import {
  FaAngular,
  FaChartBar,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaHtml5,
  FaJs,
  FaMap,
  FaMicrosoft,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
} from 'react-icons/fa';
import {
  SiCloudflare,
  SiDotnet,
  SiHuggingface,
  SiIbm,
  SiIbmcloud,
  SiLeaflet,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPowershell,
  SiSanity,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';
import {
  TbApi,
  TbArrowsExchange,
  TbBinaryTree2,
  TbBolt,
  TbBrain,
  TbChartDots3,
  TbFileAnalytics,
  TbPlugConnected,
  TbTableColumn,
  TbWebhook,
} from 'react-icons/tb';

export const TOOLBOX_CATEGORY_ORDER = [
  'Languages',
  'Frameworks',
  'Cloud & Infrastructure',
  'Data & Integration',
  'AI & Automation',
  'Visualization',
  'Tools',
];

export const TOOLBOX_CATEGORY_COPY = {
  Languages: 'Core languages used across application, automation, and reporting work.',
  Frameworks: 'Frontend and application frameworks used to ship polished production software.',
  'Cloud & Infrastructure': 'Deployment, hosting, and operational platforms used to keep systems online.',
  'Data & Integration': 'Databases, APIs, and ETL tooling used to move and structure business data.',
  'AI & Automation': 'Practical AI and automation tooling used for enrichment, summarization, and workflow support.',
  Visualization: 'Mapping and charting libraries used for dashboards, reporting, and spatial interfaces.',
  Tools: 'Supporting delivery tools used across documentation, collaboration, and implementation.',
};

export const TOOLBOX_FALLBACK = [
  { name: 'C#', category: 'Languages', proficiency: 'Production' },
  { name: 'Python', category: 'Languages', proficiency: 'Production' },
  { name: 'JavaScript', category: 'Languages', proficiency: 'Production' },
  { name: 'SQL', category: 'Languages', proficiency: 'Production' },
  { name: 'PowerShell', category: 'Languages', proficiency: 'Production' },
  { name: 'HTML', category: 'Languages', proficiency: 'Production' },
  { name: 'CSS', category: 'Languages', proficiency: 'Production' },
  { name: '.NET', category: 'Frameworks', proficiency: 'Production' },
  { name: 'React', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Next.js', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Angular', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Tailwind CSS', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Sanity', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Supabase', category: 'Frameworks', proficiency: 'Production' },
  { name: 'Azure', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'IBM Cloud', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'Cloudflare', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'Docker', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'CI/CD', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'Vercel', category: 'Cloud & Infrastructure', proficiency: 'Production' },
  { name: 'SQL Server', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'PostgreSQL', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'SQLite', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'REST APIs', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'Graph API', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'Webhooks', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'SSIS', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'ETL', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'SDKs', category: 'Data & Integration', proficiency: 'Production' },
  { name: 'Ollama', category: 'AI & Automation', proficiency: 'Production' },
  { name: 'IBM Watsonx', category: 'AI & Automation', proficiency: 'Production' },
  { name: 'Hugging Face', category: 'AI & Automation', proficiency: 'Production' },
  { name: 'Workflow Automation', category: 'AI & Automation', proficiency: 'Production' },
  { name: 'Leaflet', category: 'Visualization', proficiency: 'Production' },
  { name: 'Google Charts', category: 'Visualization', proficiency: 'Production' },
  { name: 'Chart.js', category: 'Visualization', proficiency: 'Production' },
  { name: 'datatables.net', category: 'Visualization', proficiency: 'Production' },
];

const CATEGORY_ICON = {
  Languages: FaCode,
  Frameworks: FaReact,
  'Cloud & Infrastructure': FaCloud,
  'Data & Integration': FaDatabase,
  'AI & Automation': FaRobot,
  Visualization: FaChartBar,
  Tools: FaServer,
};

const TOOL_ICON = {
  'C#': FaCode,
  Python: FaPython,
  JavaScript: FaJs,
  SQL: FaDatabase,
  PowerShell: SiPowershell,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  '.NET': SiDotnet,
  React: FaReact,
  'Next.js': SiNextdotjs,
  Angular: FaAngular,
  'Tailwind CSS': SiTailwindcss,
  Sanity: SiSanity,
  Supabase: SiSupabase,
  Azure: SiMicrosoftazure,
  'IBM Cloud': SiIbmcloud,
  Cloudflare: SiCloudflare,
  Docker: FaDocker,
  'CI/CD': TbBinaryTree2,
  Vercel: SiVercel,
  'SQL Server': SiMicrosoftsqlserver,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  'REST APIs': TbApi,
  'Graph API': TbPlugConnected,
  Webhooks: TbWebhook,
  SSIS: TbArrowsExchange,
  ETL: TbArrowsExchange,
  Ollama: TbBrain,
  'IBM Watsonx': SiIbm,
  'Hugging Face': SiHuggingface,
  'Workflow Automation': TbBolt,
  SDKs: TbPlugConnected,
  Leaflet: SiLeaflet,
  'Google Charts': TbChartDots3,
  'Chart.js': FaChartBar,
  'datatables.net': TbTableColumn,
  Notion: SiNotion,
  M365: FaMicrosoft,
  SharePoint: FaMicrosoft,
  Teams: FaMicrosoft,
  OneDrive: FaMicrosoft,
  'Sales Analytics': TbFileAnalytics,
};

export const getToolCategory = (tech = {}) => {
  if (tech.category) {
    if (tech.category === 'Data & Cloud') {
      const legacyName = tech?.name?.toLowerCase() || '';
      if (legacyName.match(/sql server|postgresql|sqlite|rest api|graph api|webhook|ssis|etl|sdk/)) {
        return 'Data & Integration';
      }
      return 'Cloud & Infrastructure';
    }
    return tech.category;
  }
  const name = tech?.name?.toLowerCase() || '';

  if (name.match(/c#|python|javascript|sql|powershell|html|css/)) return 'Languages';
  if (name.match(/react|next|angular|tailwind|sanity|supabase|\.net/)) return 'Frameworks';
  if (name.match(/azure|ibm cloud|cloudflare|docker|ci\/cd|vercel|dns|ssl/)) return 'Cloud & Infrastructure';
  if (name.match(/sql server|postgresql|sqlite|rest api|graph api|webhook|ssis|etl|sdk/)) return 'Data & Integration';
  if (name.match(/ollama|watsonx|hugging face|automation|rag|llm/)) return 'AI & Automation';
  if (name.match(/leaflet|chart|datatable|analytics/)) return 'Visualization';
  return 'Tools';
};

export const getToolIcon = (name, category) => TOOL_ICON[name] || CATEGORY_ICON[category] || FaCode;
