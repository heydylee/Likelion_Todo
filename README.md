# Todo App 만들기

## 1. Todo 기능

노션에 언급된 다양한 기능들을 구현하였습니다.

## 2. 스타일 구현

CSS의 경우 styled-components가 아닌 더 효율적인 Tailwind를 사용했습니다.
Tailwind의 경우 러닝커브가 높다는 단점이 있지만, 필수로 알고있어야할 스킬 중 하나라고 생각합니다

## 3. 실행 컨텍스트 실험

const Main = () => {
const navigate = useNavigate();
/_ eslint-disable no-var _/
console.log(a);
var a = 10;
console.log(a);

return (...
);
};

Main.tsx에 실행 컨텍스트 실험에 사용된
console.log(a); // ?
var a = 10;
과 더불어 a가 선언된 이후도 로그로 한번 더 출력해줬습니다.

그결과
Main.tsx:7 -> undefined
Main.tsx:9 -> 10
이라는 로그를 확인할 수 있습니다.

코드가 실행되기 전 실행 컨텍스트를 생성하는 단계에서
a : undefined라고 식별자만 등록을합니다(자동으로 udnfined 처리)
이후 첫 코드인 console.log(a)의 실행 시점에선 이미 메모리에 a가 존재는 하지만 값이 undef이므로 그대로 출력됩니다

그다음 var a =10으로 a에 숫자 10이 대입되고
이후 추가로 작성한 console.log(a)의 결과로 10이 출력됩니다.

요약하자면 var의 경우 선언은 먼저 되지만 undefined라는 초기값으로 선언되며, 실제할당은 나중에 일어납니다.
그래서 참조는 가능하지만 undefined로 출력이 되는 것입니다.

## 4. this 실험

undefined Main.tsx:29
undefined Main.tsx:34

예상과는 달리 두 버튼 모두 undefined로 출력이되었습니다.
그 이유를 찾아본 결과 React 17+부터 모든 함수 컴포넌트 코드는 strict mode 로 실행되며
strict mode 에서 일반 함수는 call / apply 로 바인딩하지 않는 한 this === undefined 으로 취급받습니다.
위와 같은 이유로 두 버튼에 대한 로그가 모두 undefined로 출력된 것으로 결론을 내렸습니다

## 5. DOM 직접 조작

const titleRef = useRef<HTMLInputElement>(null);
useEffect(() => {
titleRef.current?.focus();
}, []);

useRef로 DOM 노드 잡고, useEffect 안에서 focus() 직접 호출하는 방식을 사용했습니다
위 코드로 페이지가 열리자 마자 제목 <input>에 자동으로 포커스를 할 수 있습니다
