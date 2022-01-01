# 1. 깃 연결 주소
https://github.com/smshack/habit-tracker

2. 템플릿 프로젝트
https://reactjs.org/docs/hello-world.html

3. create-react-app

4. 클래스형 컴포넌트(rcc)
https://reactjs.org/docs/introducing-jsx.html
5. state, props
https://reactjs.org/docs/rendering-elements.html
https://reactjs.org/docs/components-and-props.html
6. map 사용
https://reactjs.org/docs/lists-and-keys.html
7. state, props
https://reactjs.org/docs/state-and-lifecycle.html
8. 이벤트 처리 하기
https://reactjs.org/docs/handling-events.html
https://reactjs.org/docs/forms.html
9. Component PureComponent

10. 라이프사이클
https://reactjs.org/docs/state-and-lifecycle.html
```
 componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {
  }
  ```

  11. 함수형컴포넌트(rsi)

  12. react hook
  https://reactjs.org/docs/hooks-intro.html
  ```
    function 컴포넌트는 state와 props가 변경이 되면 다시 전체가 다시 렌더링 됨
    훅에서 자동으로 이전 돔과 비교해서 업데이트 될것만 업데이트 함
    reactHook => useState ,useRef, useCallCack, useEffect
  ```
  리액트 컴포넌트
리액트에서 컴포넌트란 웹어플리케이션, 웹페이지에서 독립적이고 재사용이 가능한 단위로(박스 단위로) 나뉘어진 블럭을 말합니다. 어떻게 나눌껀지는 여러분들에게 달렸겠죠? 최대한 독립적이고 재사용이 가능한 작은 단위로 만들어 나가면 좋아요.

리액트 라이브러리를 이용해서 컴포넌트를 만들 수 있는 방법은 클래스형, 함수형 두가지가 있어요.



* 클래스 컴포넌트

```
이렇게 리액트에서 제공하는 React.Component 클래스를 상속하는 클래스를 만들면 되고, UI가 어떻게 표기 될 것인지 정의하는 render() 함수를 구현해 주어야 합니다. 컴포넌트 자체에 계속 기억이 되어져야 하는, UI를 표기 하기 위한 데이터가 있다면 this.state 멤버 변수에 오브젝트 형태로 데이터를 저장할 수 있어요. 

클래스 특성상, 클래스의 인스턴스(오브젝트)가 생성이 되면 클래스의 메소드(함수)를 아무리 많이 호출해도 클래스의 멤버 변수를 직접 적으로 수정하지 않는한 멤버 변수는 한번 만들어 지면 계속 그 값이 유지가 되어져요. 

그래서 render 함수가 아무리 많이 호출이 되어져도(부모 컴포넌트로 부터 전달받은 props이 변경되는 경우 컴포넌트 자체적인 데이터, this.state가 변경되지 않아도 render 함수가 계속 호출될수 있어요) , this.state 에 들어 있는 데이터는 변하지 않기 때문에, 컴포넌트에서 가지고 있던 데이터를 잃어 버리지 않고 일정하게 데이터를 사용자에게 보여줄 수 있죠.



컴포넌트에서 데이터를 변경해서 UI를 업데이트 해주고 싶다면, 간단하게 this.state 만 업데이트 해주면 리액트가 알아서 render 함수를 다시 호출해 주고 브라우저에 업데이트를 해주게 됩니다.



자, 한마디로 얘기 하면 리액트에서 컴포넌트를 만들려면 React.Component 클래스를 상속하고, 데이터는 꼭 this.state에 담아 두고, render() 함수에 HTML과 같은 JSX 문법을 이용해서 데이터를 어떻게 UI로 표기 할건지 정의를 해놓도록 만들기! 이것이 리액트 라이브러리에서 정해진 규칙이예요.



그리고 정말 중요한 포인트는! 리액트는 변경사항이 한가지의 방향으로만 흘러갑니다.

데이터가 변경이 되면 → UI가 업데이트 된다
위 문장을 조금만 더 풀어서 작성해 보면:

데이터(State)가 변경이 되면 → 리액트가  render() 함수를 호출해서 UI가 업데이트 된다

```

* 함수형 컴포넌트
```
리액트에서 컴포넌트를 만들 수 있는 또 다른 방법으로는 아래와 같이 JSX를 리턴하는 함수를 정의하면 됩니다.





컴포넌트 자체에 데이터(State)가 없는 경우, 외부에서 전달받은 데이터(Props)만 보여주면 되거나, 아니면 State, Props 둘다 없는 아주 정적인 컴포넌트인 경우 굳이 클래스를 정의 하지 않고 이렇게 함수 만으로 리액트 컴포넌트를 만들 수 있어요.



앞에서 설명해드린 클래스와는 반대로 함수의 특성상, 함수를 호출할때마다 함수의 코드 블럭이 다시 실행이 되고, 그안에 선언한 모든 로컬 변수들은 함수의 실행 컨텍스 안에서 재 정의, 값이 할당되어집니다.

그래서 함수 안에서 State를 보관해서 일관적으로 사용자에게 보여줄 수 있는 방법이 없기 때문에 (함수가 호출될때 모든 로컬 변수들의 값이 초기화 되어서 기존의 데이터 들이 다 초기화 되겠죠?) 일반 함수형 컴포넌트에서는 컴포넌트만의 자체적인 데이터 (State)를 가질 수가 없어요.



그래서 함수형 컴포넌트는 따로 State가 필요 없고, 리액트에서 제공하는 라이프 싸이클 메소드들을 사용하지 않아도 될때, 그럴때 간편하게 함수만 정의해서 사용할 수 있어요 :)

```

* 리액트 훅 (React Hooks)



```
훅(갈고리) 이라고 이름 지어진 이 리액트 훅은 함수형 컴포넌트에서 클래스 컴포넌트에서만 이용이 가능했던 State와 라이프 싸이클 메소드들을 이용할 수 있도록 도와주는, 함수형 컴포넌트에 리액트의 다른 기능들을 갈고리처럼 연결해주는 아이들을 말해요.

리액트에서 기본적으로 제공되는 훅들은 use로 시작하는 함수들이예요. 그리고 여러 컴포넌트에서 재사용 될 수 있는 로직들 이라면 우리가 스스로 정의해서도 만들 수 있어요. (Custom Hooks)


State Hook
함수형 컴포넌트에서도 State를 쓸 수 있도록, 함수형 컴포넌트가 여러번 호출이 되어도, 계속 일정한 데이터를 기억하고 있는 useState()가 있죠? :)



Effect Hook
리액트의 라이프 싸이클 메소들처럼 활용할 수 있는, 원하는 데이터만 타켓으로 삼아서 그것이 변경될때마다 호출 될 수 있도록 쓸 수 있는 useEffect()도 있습니다.



이것외에도 useCallback, useContext, useMemo, useReducer, useRef... 다양한 함수가 있음
```