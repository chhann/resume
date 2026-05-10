import { SkillPayload, SkillItem } from '../types/skill';

const backendLanguage: SkillItem = {
  category: 'Languages',
  items: [
    {
      title: 'TypeScript',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const frameworkLib: SkillItem = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Next.js',
    },
    {
      title: 'React',
    },
    {
      title: 'NestJS',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Electron',
    },
    {
      title: 'Tailwind CSS',
    },
  ],
};

const infraDb: SkillItem = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'Vercel',
    },
    {
      title: 'Supabase',
    },
    {
      title: 'Docker',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'MySQL',
    },
  ],
};

const toolIde: SkillItem = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'IntelliJ IDEA',
    },
    {
      title: 'Git',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

// const misc: SkillItem = {
//   category: 'Misc',
//   items: [
//     {
//       title: 'DevOps',
//     },
//     {
//       title: 'Agile',
//     },
//     {
//       title: 'HHKB',
//     },
//     {
//       title: 'Drum',
//     },
//     {
//       title: 'Electric Guitar',
//     },
//   ],
// };

const skill: SkillPayload = {
  disable: false,
  skills: [backendLanguage, frameworkLib, infraDb, toolIde],
};

export default skill;
