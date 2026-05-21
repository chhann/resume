import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '풀스택 개발자로 기획 참여부터 배포·운영까지 전 과정을 담당하며, Frontend(Next.js + React + TypeScript) 중심으로 Backend, Desktop App을 함께 경험하고 있습니다. 기획자와 요구사항을 조율하고 Figma 화면 설계부터 반응형 UI 구현까지 협업해 왔으며, Next.js 기반 PWA를 직접 구축하며 Service Worker 등록과 캐시 전략, Push 구독·알림 흐름, 런타임 호환성 이슈(Deno → Node.js 전환) 트러블슈팅까지 경험했습니다. 단순 화면 구현이 아니라 사용자 경험 단위에서 시스템을 설계하는 개발자가 되고자 노력하고 있습니다.',
    '"어떻게 만들 것인가"보다 "왜 이 기술을 선택했는가"를 먼저 검증하는 습관을 갖추고 있으며, 기술적 의사결정 과정을 Notion과 블로그에 문서화합니다. 디자이너·기획자와의 적극적 소통을 통해 화면 단위가 아닌 사용자 경험 단위로 협업하는 개발자가 되고자 합니다.',
  ],
  sign: 'Chan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
