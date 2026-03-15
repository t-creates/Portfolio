const sectionFallbacks = {
  'Security & Privacy': {
    description: 'Build internal tools and business systems with practical access controls, trusted data handling, and the safeguards needed for reliable day-to-day operations.',
  },
  'Full Stack Development': {
    description: 'Design and ship complete applications across frontend, backend, data, and deployment so teams can move from requirements to working software with one engineering partner.',
  },
  'Data Integrations': {
    description: 'Connect systems, automate data movement, and keep reporting dependable with ETL workflows, API integrations, and operational dashboards built around real business processes.',
  },
  'Automation & AI': {
    description: 'Use scripting, workflow automation, and practical AI pipelines to reduce manual work, improve data quality, and speed up internal decision-making.',
  },
  'GIS & Mapping': {
    description: 'Deliver map-based applications and spatial reporting tools that turn complex geochemical, emissions, and operational data into interfaces teams can actually use.',
  },
};

const itemFallbacks = {
  'Account Security & Privacy': {
    headline: 'Protect internal systems with clear permissions and dependable user access.',
    text: [
      'Role-aware access patterns for internal software and reporting tools.',
      'Practical safeguards around customer data, content workflows, and account management.',
    ],
  },
  'Data Validation & Access Controls': {
    headline: 'Keep business-critical records clean, accurate, and controlled.',
    text: [
      'Validation rules that reduce bad inputs and manual correction work.',
      'Controlled edit flows for CRM, PIM, reporting, and integration-heavy systems.',
    ],
  },
  'System Reliability & Monitoring': {
    headline: 'Design workflows that stay observable and easier to support in production.',
    text: [
      'Monitoring-minded builds with documentation, logging, and support handoff in place.',
      'Stable integrations for dashboards, automation, and operations reporting.',
    ],
  },
  'Workflow Automation': {
    headline: 'Automate repetitive steps so teams spend less time on manual system work.',
    text: [
      'Scripting and integration logic for reporting, invoicing, and data synchronization.',
      'Automation patterns that improve consistency across cloud and internal systems.',
    ],
  },
};

const isPlaceholder = (value = '') => value.toLowerCase().includes('replace once cms data is ready');

export const getExpertiseSectionCopy = (title, description) => {
  if (description && !isPlaceholder(description)) {
    return description;
  }

  return sectionFallbacks[title]?.description || 'Applied software engineering across cloud applications, internal systems, and business workflows with an emphasis on reliability, clarity, and long-term maintainability.';
};

export const getExpertiseItemCopy = (subtitle, headline, lines = []) => {
  const fallback = itemFallbacks[subtitle] || {};
  const resolvedHeadline = headline && !headline.toLowerCase().includes('add a short statement')
    ? headline
    : (fallback.headline || 'Practical delivery focused on maintainable systems, good documentation, and business outcomes.');

  const resolvedLines = Array.isArray(lines) && lines.length
    ? lines
    : (fallback.text || []);

  return {
    headline: resolvedHeadline,
    text: resolvedLines,
  };
};
