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
      title: 'Cross-Functional Collaboration',
      description:
        '기획자·디자이너와 Figma 화면 설계부터 협업, CS·운영 응대로 비즈니스 컨텍스트까지 이해',
      keywords: ['Communication', 'Figma', 'Product Sense'],
    },
    {
      title: 'Web Performance Engineering',
      description: 'JS 번들 64% 감소, LCP 개선 등 측정 기반 프론트엔드 성능 최적화 경험',
      keywords: ['LCP', 'Bundle Optimization', 'Lighthouse'],
    },
  ],
};

export default highlight;
