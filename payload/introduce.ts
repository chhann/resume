import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '풀스택 개발자로 기획 참여부터 배포·운영까지 전 과정을 담당하며, Frontend(Next.js + React + TypeScript) 중심으로 Backend, Desktop App을 함께 경험하고 있습니다. 기획자와 요구사항을 조율하고 Figma 화면 설계부터 반응형 UI 구현까지 협업해 왔으며, Next.js 기반 PWA를 직접 구축하며 Service Worker 등록과 캐시 전략, Push 구독·알림 흐름, 런타임 호환성 이슈(Deno → Node.js 전환) 트러블슈팅까지 경험했습니다. 단순 화면 구현이 아니라 사용자 경험 단위에서 시스템을 설계하는 개발자가 되고자 노력하고 있습니다.',
    '기술 외적으로는 도메인을 깊이 파고드는 성향을 갖고 있습니다. 건축사사무소 대표와의 대화에서 출발해, 건축사사무소 ↔ 구조설계사무소 간 DWG 기반 협업 비효율을 해결하는 ConTech SaaS를 기획하며 건축 인허가 프로세스(설계 → 구조검토 → 허가 신청 → 지자체 검토) 분석과 기존 BIM 협업 툴의 중소 사무소 시장 공백을 정리하였고, 현재는 현직 구조설계사·건축사 인터뷰를 통한 가설 검증 단계를 진행하고 있습니다. 추측이 아닌 현장 검증 위에서 설계를 시작하려는 태도가 좋은 결과물의 출발점이라고 믿습니다. 사이드 프로젝트가 풀려는 문제(설계자 간 협업 비효율)와 SpaceCloud가 풀려는 문제(건축 법규 검토 자동화)는 서로 다르지만, 두 문제 모두 한국 건축 인허가 프로세스 이해를 공통 기반으로 합니다. 공고에 명시된 단서(Rule Engine + 세움터·LURIS·V-World 연동)로부터 "대지 주소 입력 → LURIS 법규 조회 → V-World 위치 시각화 → Rule Engine 검토 → 세움터 허가 연동" 형태의 워크플로우를 가설로 세우고 각 공공 API 문서를 미리 학습해 두었습니다. 실제 아키텍처는 합류 후 검증이 필요하겠지만, 도메인 맥락 적응에 필요한 시간을 단축할 수 있다고 생각합니다.',
    '"어떻게 만들 것인가"보다 "왜 이 기술을 선택했는가"를 먼저 검증하는 습관을 갖추고 있으며, 기술적 의사결정 과정을 Notion과 블로그에 문서화합니다. 디자이너·기획자와의 적극적 소통을 통해 화면 단위가 아닌 사용자 경험 단위로 협업하는 개발자가 되고자 합니다.',
  ],
  sign: 'Chan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
