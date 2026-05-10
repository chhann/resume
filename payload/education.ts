import { EducationPayload } from '../types/education';

const education: EducationPayload = {
  disable: false,
  showMoreCount: 3,
  list: [
    {
      title: '패스트캠퍼스 강남 Kernel360',
      subTitle: '프론트엔드 심화캠프 4기',
      startedAt: '2025-06',
      endedAt: '2025-08',
      descriptions: [
        { content: 'RSC와 Client Components의 rendering timing(렌더링 타이밍) 차이 학습' },
        {
          content:
            'CSR(Client-Side Rendering) 환경에서 React Query cache mechanism(캐시 메커니즘)을 활용해 API request 최소화 경험',
        },
        {
          content:
            '개인 코드가 아닌 team codebase(팀 코드베이스) 관점에서 기존 component와 logic을 재사용하는 협업 역량 강화',
        },
        {
          content:
            'Turborepo 기반 monorepo(모노레포)의 cache strategy(캐시 전략)와 parallel build(병렬 빌드) 흐름 이해',
        },
        {
          content:
            'Supabase, Vercel 기반 serverless backend(서버리스 백엔드)와 deployment workflow(배포 워크플로우) 경험',
        },
      ],
      skillKeywords: [
        'Next.js',
        'React',
        'TypeScript',
        'React Query',
        'Turborepo',
        'Supabase',
        'Vercel',
      ],
    },
    {
      title: '코리아 IT 아카데미',
      subTitle: 'React + Spring Boot + MySQL 풀스택 과정',
      startedAt: '2023-12',
      endedAt: '2024-05',
      descriptions: [
        {
          content:
            'React Hooks, Context API, Recoil 기반 Functional Component(함수형 컴포넌트) state management(상태 관리) 학습',
        },
        {
          content:
            'Spring Boot 기반 CRUD API, DTO(Data Transfer Object), Entity 설계 및 server-side logic(서버사이드 로직) 구현',
        },
        {
          content:
            'MySQL schema design(스키마 설계), Normalization(정규화), SQL DDL(Data Definition Language)/DML(Data Manipulation Language) 학습',
        },
      ],
      skillKeywords: ['React', 'Spring Boot', 'Java', 'MySQL', 'Recoil', 'AWS EC2', 'Docker'],
    },
    {
      title: '그린컴퓨터아카데미',
      subTitle: 'React 프론트엔드 양성과정',
      startedAt: '2023-02',
      endedAt: '2023-07',
      descriptions: [
        {
          content:
            'HTML/CSS, JavaScript 기본기 및 Git/GitHub collaboration workflow(협업 워크플로우) 학습',
        },
        {
          content: 'React component model(컴포넌트 모델)과 state management(상태 관리) 원리 학습',
        },
      ],
      skillKeywords: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'],
    },
  ],
};

export default education;
