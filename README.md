# 4장 이벤트 핸들링

- 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 <이벤트>라고 한다.

## 💻이 프로젝트의 이벤트 핸들링 순서

1. 컴포넌트 생성 및 불러오기
2. onChange 이벤트 핸들링하기
3. 임의 메서드 만들기
4. input 여러 개 만들기
5. onKeyPress 이벤트 핸들링하기

#### 이벤트 핸들링의 예제

- 마우스 커서를 올렸을 때는 onmouseover 이벤트 실행
- 클릭 했을 때는 onclick
- Form 요소는 값이 바뀔 때 onchange

### 이벤트 사용시 주의 사항

1. 이벤트 이름은 카멜 표기법으로 사용합니다.

EX) onClick / onKeyUp 이런 식으로 사용한다.

2. 이벤트에 실행 할 자바스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달합니다.

3. DOM 요소에만 이벤트를 설정할 수 있습니다.

EX) div, button, input, form, span 등 같은 DOM 요소에만 가능하다.

```
<div onClick = {this.props.onClick}>
  <!-- { (...) } -->
</div>
```

### 이벤트 종류

1. Clipboard
2. Composition
3. Keyboard
4. Focus
5. Form
6. Mouse
7. Selection
8. Touch
9. UI
10. Wheel
11. Media
12. Image
13. Animation
14. Transition

나머지 이벤트는 리액트 메뉴얼인
(https://facebook.github.io/react/docs/evets.html) 참고
