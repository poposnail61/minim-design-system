# 텍소노미 이벤트 구현 가이드

FE 개발자가 유저 이벤트를 올바르게 심을 수 있도록 돕는 스킬입니다.
Baserow 텍소노미 데이터를 조회하고, 이벤트 네이밍 및 파라미터를 안내하며, PostHog 구현 코드를 생성합니다.

## 설정

```
BASEROW_TOKEN=nuVCTWAcEyISlvxWjdOWq2ofTnux4mF2
BASEROW_DB_ID=396570
```

---

## 실행 워크플로우

할 일 목록을 만들고 순서대로 진행하세요.

### 1단계: Baserow 테이블 목록 조회

다음 API로 데이터베이스의 모든 테이블을 조회합니다:

```bash
curl -s "https://api.baserow.io/api/database/tables/database/396570/" \
  -H "Authorization: Token nuVCTWAcEyISlvxWjdOWq2ofTnux4mF2"
```

응답에서 아래 세 테이블의 ID를 찾아 변수로 저장합니다:
- `화면 및 요소` 테이블 → SCREENS_TABLE_ID
- `이벤트 파라미터` 테이블 → PARAMS_TABLE_ID
- `텍소노미` 테이블 → TAXONOMY_TABLE_ID

### 2단계: 텍소노미 데이터 조회

세 테이블의 전체 데이터를 가져옵니다:

```bash
# 화면 및 요소
curl -s "https://api.baserow.io/api/database/rows/table/{SCREENS_TABLE_ID}/?user_field_names=true&size=200" \
  -H "Authorization: Token nuVCTWAcEyISlvxWjdOWq2ofTnux4mF2"

# 이벤트 파라미터
curl -s "https://api.baserow.io/api/database/rows/table/{PARAMS_TABLE_ID}/?user_field_names=true&size=200" \
  -H "Authorization: Token nuVCTWAcEyISlvxWjdOWq2ofTnux4mF2"

# 텍소노미 (이벤트 목록)
curl -s "https://api.baserow.io/api/database/rows/table/{TAXONOMY_TABLE_ID}/?user_field_names=true&size=200" \
  -H "Authorization: Token nuVCTWAcEyISlvxWjdOWq2ofTnux4mF2"
```

### 3단계: 현재 작업 파악

사용자에게 다음을 질문합니다:
- 현재 작업 중인 **화면 또는 기능명**이 무엇인가요?
- 심으려는 **유저 행동**이 무엇인가요? (예: 버튼 클릭, 화면 진입, 필터 선택 등)
- 이벤트에 함께 보내야 할 **추가 정보(파라미터)** 가 있나요?

### 4단계: 이벤트 조회 및 결정

조회한 텍소노미 데이터를 바탕으로:

**4-1. 화면 및 요소 확인**
- `화면 및 요소` 테이블에서 해당 화면명이 있는지 확인
- 없으면 사용자에게 알리고 새로 추가가 필요함을 안내

**4-2. 기존 이벤트 확인**
- `텍소노미` 테이블에서 해당 화면/기능에 이미 정의된 이벤트가 있는지 확인
- 있으면 기존 이벤트명과 파라미터를 그대로 사용

**4-3. 새 이벤트 결정 (필요한 경우)**
이벤트 네이밍 규칙:

| 이벤트 종류 | 규칙 | 예시 |
|---|---|---|
| 스크린 이벤트 | 화면명 그대로 | `place_map` |
| 클릭 이벤트 | `click_` + 화면/기능명 | `click_place_map` |
| 조회/노출 이벤트 | `view_` + 요소명 | `view_place_card` |
| 검색 이벤트 | `search_` + 대상명 | `search_place` |
| 선택 이벤트 | `select_` + 옵션명 | `select_category` |
| 제출 이벤트 | `submit_` + 폼명 | `submit_review` |
| 완료 이벤트 | `complete_` + 행동명 | `complete_onboarding` |

**네이밍 원칙:**
- 소문자 + 언더스코어(`_`) 사용
- 간결하게, 행동이 명확하게 드러나도록
- 화면/기능명은 `화면 및 요소` 테이블의 값을 그대로 사용

### 5단계: 파라미터 결정

`이벤트 파라미터` 테이블에서 적합한 파라미터를 선택합니다.

**파라미터 선택 기준:**
- 이벤트의 맥락을 설명하는 데 필요한 값만 포함
- 이미 정의된 파라미터 우선 사용
- 새 파라미터가 필요하면 사용자에게 추가 정의가 필요함을 안내

### 6단계: 구현 코드 생성

결정된 이벤트명과 파라미터로 PostHog 캡처 코드를 생성합니다.

**스크린 이벤트 예시:**
```typescript
posthog.capture('place_map')
```

**커스텀 이벤트 예시:**
```typescript
posthog.capture('click_place_map', {
  place_id: placeId,
  source: 'list', // 어디서 진입했는지
})
```

**React 컴포넌트에서 사용 예시:**
```typescript
import { usePostHog } from 'posthog-js/react'

function PlaceCard({ place }) {
  const posthog = usePostHog()

  const handleClick = () => {
    posthog.capture('click_place_map', {
      place_id: place.id,
    })
    // ... 실제 동작
  }
}
```

**화면 진입(스크린) 이벤트는 useEffect로:**
```typescript
useEffect(() => {
  posthog.capture('place_map')
}, [])
```

### 7단계: 결과 요약

다음 형식으로 결과를 정리해 줍니다:

```
✅ 이벤트 구현 가이드

📍 화면/기능: {화면명}

📋 이벤트 목록:
1. {이벤트명}
   - 종류: 스크린 이벤트 / 커스텀 이벤트
   - 파라미터: {파라미터명}: {설명}
   - 상태: 기존 이벤트 사용 / 신규 이벤트 (Baserow 등록 필요)

💻 구현 코드:
{생성된 코드}

⚠️ Baserow 등록 필요 항목:
- 신규 이벤트: {이벤트명} → 텍소노미 테이블에 추가 요청
- 신규 파라미터: {파라미터명} → 이벤트 파라미터 테이블에 추가 요청
```

---

## 주의사항

- 기존 이벤트명은 **절대 변경하지 않습니다** (데이터 연속성 깨짐)
- 신규 이벤트/파라미터는 코드 구현 전 Baserow에 먼저 등록합니다
- 스크린 이벤트는 화면당 하나만 존재합니다
- 파라미터 값은 string, number, boolean 타입만 사용합니다
