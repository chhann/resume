import { ExperiencePayload } from '../types/experience';

const ceoPortal = {
  title: '(주)씨이오포털 (CEO Portal)',
  positions: [
    {
      title: '프론트엔드 개발자 (풀스택 경험)',
      startedAt: '2025-10',
      descriptions: [
        {
          content:
            'Operations Automation Tool에서 1인 개발 체제로 기획 참여, 설계, 구현, 배포, 운영 전 과정 담당',
        },
        {
          content: '기획자와 요구사항 정의 및 Figma 화면 설계 협업',
        },
        {
          content: 'Frontend / Backend / Infrastructure / Desktop App 전 영역 개발',
        },
        {
          content: '사내 운영팀/마케팅팀 Admin Tool(어드민 도구) 풀스택 개발',
        },
        {
          content:
            '서비스 안정성 강화를 위한 Refactoring(리팩토링): Responsive UI(반응형 UI), CORS(Cross-Origin Resource Sharing), Data Pipeline(데이터 파이프라인)',
        },
      ],
      skillKeywords: [
        'Next.js',
        'React',
        'NestJS',
        'Electron',
        'TypeScript',
        'TypeORM',
        'PostgreSQL',
      ],
    },
  ],
};

const experience: ExperiencePayload = {
  showMoreCount: 1,
  disable: false,
  disableTotalPeriod: true,
  list: [ceoPortal],
};

export default experience;
