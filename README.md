# 온결시니어케어센터 홈페이지

Next.js 기반의 반응형 공식 홈페이지 시안입니다. 버건디와 화이트를 중심으로 센터 소개, 방문간호·요양·목욕, 상담문의 메뉴와 대표 전화, SNS QR 임시 영역을 제공합니다.

## 실행

Node.js 18.17 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 배포

Vercel에서 이 저장소를 Import한 뒤 기본 빌드 명령(`npm run build`)과 기본 출력 설정을 그대로 사용하면 됩니다. 환경 변수는 필요하지 않습니다.

## 확인

```bash
npm run build
```

`public/caregivers.png`은 시안용 의료진 이미지입니다. 로고와 인스타그램·유튜브 QR은 실제 자산을 받기 전까지 화면에서 식별 가능한 임시 요소로 표시됩니다.
