import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  // componentWillMount() {
      // 공식 사이트에서 이제 쓰지 말래
  // }

  componentDidMount() {
    console.log(`1 componentDidMount-------------------------------------------------------`)
    console.log(`componentDidMount 컴포넌트가 마운트된 직후, 트리에 삽입된 직후 호출`)
    console.log('외부에서 데이터를 불러와야 한다면 네트워크 요청을 보내기 적절한 위치')
    console.log(`didmount ${this.props.habit.name}`)
  }

  componentWillReceiveProps(nextProps) {
    // 마운트된 컴포넌트가 props를 전달 받기 전에 호출
    console.log(`2 componentWillReceiveProps(nextProps)-------------------------------------------------------`)
     console.log(`props 변화에 대응하여 state를 갱신 할경우 this.props와 nextProps를 비교한 후 setState`)
    console.log(`componentWillReceiveProps ${this.props.habit.name}`)
    console.log(`이전 props ${this.props.habit.name} ${this.props.habit.count}`)
    console.log(`업데이트 될 props ${nextProps.habit.name} ${nextProps.habit.count}`)
    
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   // 컴포넌트를 다시 렌더링 해야 할지 말지 정의해 준다
  //   return (JSON.stringify(nextProps)!=JSON.stringify(this.props))
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   return (JSON.stringify(nextProps)!=JSON.stringify(this.props))
  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  componentWillUnmount() {
    console.log(`3 componentWillUnmount-------------------------------------------------------`)
    console.log(`컴포넌트가 돔 상에서 제거 될 때 호출`)
    console.log(`didmount ${this.props.habit.name}`)
  }
  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
