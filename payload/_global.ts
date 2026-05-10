import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';
const previewImage = '/20260507.png';

const title = 'Resume: Jeongchan Lee';
const description = "Frontend Engineer Jeongchan Lee's web resume.";

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Preview Image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jeongchan',
        lastName: 'Lee',
        username: 'chhann',
        gender: 'male',
      },
    },
  },
  sectionOrder: [
    'introduce',
    'highlight',
    'experience',
    'project',
    'skill',
    'openSource',
    'presentation',
    'article',
    'education',
    'etc',
  ],
  jsonLd: {
    name: 'Jeongchan Lee',
    jobTitle: 'Frontend Engineer',
    worksFor: 'CEO Portal',
    url: 'https://resume.jeonchan.dev',
    sameAs: [
      'https://github.com/chhann',
      'https://velog.io/@wjdcks2252/posts',
    ],
    knowsAbout: [
      'TypeScript',
      'JavaScript',
      'Next.js',
      'React',
      'NestJS',
      'Spring Boot',
      'PostgreSQL',
      'MySQL',
      'AWS',
      'Vercel',
      'Supabase',
      'Electron',
    ],
  },
};
