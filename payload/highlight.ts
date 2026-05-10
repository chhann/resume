import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: 'Trade-off Driven Decision',
      description: '복수 옵션을 비교·분석하고 판단 근거를 문서화하는 기술 의사결정 습관',
      keywords: ['Architecture', 'Documentation', 'Decision Log'],
    },
    {
      title: 'Domain-First Engineering',
      description: '건축 인허가 프로세스와 공공 API를 직접 학습하며 도메인을 먼저 이해하는 개발자',
      keywords: ['ConTech', 'Public API', 'Domain Research'],
    },
    {
      title: 'Web Performance Engineering',
      description: 'JS 번들 64% 감소, LCP 개선 등 측정 기반 프론트엔드 성능 최적화 경험',
      keywords: ['LCP', 'Bundle Optimization', 'Lighthouse'],
    },
  ],
};

export default highlight;
