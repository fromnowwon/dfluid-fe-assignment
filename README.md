# DFLUID FE ASSIGNMENT

이 프로젝트는 Next.js App Router를 기반으로 한 프로젝트입니다.
FSD(Folder Sliced Design) 아키텍처와 Atomic Design 컴포넌트 구조를 적용해 유지보수성과 확장성을 고려하여 구성했습니다.

또한, **반응형 웹**을 고려해 모바일 환경에서도 최적의 UI/UX를 제공하며, 일부 섹션은 **상세 페이지**도 추가적으로 임의 구현되었습니다.

> 👉 [배포 페이지 바로가기](https://dfluid-fe-assignment-hx57o4i9m-fromnowwons-projects.vercel.app/)

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15, App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management & Fetching**: TanStack Query (React Query)
- **Form Handling**: react-hook-form
- **Fonts**: Google Fonts - Montserrat, Exo 2
- **External API**: [Unsplash Random Photo API](https://unsplash.com/documentation#get-a-random-photo)
- **CI/CD**: [Vercel](https://vercel.com)

## 🧱 Project Structure

`app/` 디렉토리에서는 **App Router** 기반의 라우팅을 담당하며,  
`src/` 하위에는 FSD(Folder Sliced Design) 패턴과 함께 Atomic Design 원칙을 적용해 UI 컴포넌트를 계층적으로 구성했습니다.

```bash
dfluid-fe-assignment/
├── app/                        # Next.js App Router 구성 (layout, 페이지 진입점)
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── heritages/
│   └── profiles/
│
├── src/                         # 기능별로 나뉜 FSD(Folder Sliced Design) 구조
│   ├── app/                     # 앱 설정 관련 모듈
│   │   └── providers/           # 클라이언트 Provider (React Query 등)
│   ├── pages/                   # 각 페이지별 UI/로직 구성
│   │   └── home/                # Home 페이지 구성
│   │       └── ui/              # Atomic Design 적용
│   │           ├── atoms/       # 기본 단위 UI (버튼, 텍스트 등)
│   │           ├── molecules/   # 소규모 UI 그룹
│   │           └── organisms/   # 주요 섹션 단위 컴포넌트
│   └── shared/                  # 전역 공통 모듈 (UI 컴포넌트, 유틸, 훅 등)
│
├── public/
└── ...
```

## 📦 Getting Started

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn run dev
```

### 🛠️ .env 관련 안내

Unsplash API 관련 에러가 발생한다면, .env 파일이 누락되었을 수 있습니다.
루트 경로에 .env 파일을 생성하신 후, 아래 값을 입력해주세요.

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM
NEXT_PUBLIC_UNSPLASH_SECRET_KEY=oBOMkDmHrJicTHkT1RUBrpa4ZbL7f8MzrcOU2HTPRZ0
```

## 🚀 Deployment

본 프로젝트는 Vercel을 통해 자동 배포되었습니다.
GitHub 저장소와 연동된 CI/CD 환경으로, 커밋 시 자동으로 빌드 및 배포가 진행됩니다.

👉 [배포 페이지 바로가기](https://dfluid-fe-assignment-hx57o4i9m-fromnowwons-projects.vercel.app/)
