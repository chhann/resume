import { ProjectPayload } from '../types/project';

const operationsAutomationTool = {
  title: '(주)씨이오포털 운영팀 업무 자동화 도구',
  startedAt: '2025-11',
  endedAt: '2026-02',
  where: 'Operations Automation Tool / 풀스택 개발자',
  descriptions: [
    {
      content:
        '운영자가 수동 처리하던 다채널 계정 데이터 통합 업무를 Electron Desktop App으로 자동화: 처리 대상 8만 건에서 20만 건으로 확장, 수동 작업 1인 분량 대체',
    },
    {
      content:
        'PostgreSQL Indexing Strategy(인덱싱 전략) 수립: 사용자별/카테고리별 활성 계정 필터링과 최신순 정렬 쿼리에 맞춘 Composite Index(username, category_id, is_active, created_at) 설계',
    },
    {
      content:
        'Data Collection Pipeline(데이터 수집 파이프라인)을 Step-based Structure(단계 기반 구조)로 리팩터링하고 Checkpoint Resume(체크포인트 재개), File Streaming(파일 스트리밍), Cron Scheduler(스케줄러), Deduplication(중복 제거), Category Auto-classification(카테고리 자동 분류) 적용',
    },
  ],
};

const aiReportAutomationTool = {
  title: '(주)씨이오포털 마케팅 리포트 자동 생성 도구',
  startedAt: '2026-04',
  endedAt: '2026-04',
  where: 'AI Report Automation Tool / 풀스택 개발자',
  descriptions: [
    {
      content:
        '마케팅팀이 수기 작성하던 병원 대상 마케팅 리포트를 Anthropic Claude 기반 AI 자동 생성 구조로 전환: 일 100장 리포트 생성 가능한 파이프라인 구축',
    },
    {
      content:
        '공공데이터포털 API 기반 이메일 추출 도구를 Python으로 별도 구축, 전국 약 2,000건 병원 이메일 데이터셋 확보 → 마케팅팀 outbound 캠페인에 약 50:1 회신율 기여',
    },
    {
      content: 'Next.js 16 App Router Route Handler에 PDF 생성 파이프라인 직접 구현',
    },
  ],
};

const todayTalkTalk = {
  title: '(주)씨이오포털 오늘톡톡 UI 리팩터링',
  startedAt: '2026-04',
  where: '오늘톡톡 / 프론트엔드 개발자',
  descriptions: [
    {
      content:
        'Responsive Sidebar Flickering Issue(반응형 사이드바 깜빡임 현상)를 CSS/JS viewport 측정 차이로 진단하고, media query 감지 로직을 window.matchMedia 기반 custom hook으로 전환',
    },
  ],
};

const project: ProjectPayload = {
  disable: false,
  showMoreCount: 3,
  list: [todayTalkTalk, aiReportAutomationTool, operationsAutomationTool],
};

export default project;
