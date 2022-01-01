import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();
    onSubmit = event => {
        // 페이지가 리로딩 되는것을 막음
        event.preventDefault();
        console.log(this.inputRef.current.value)
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name)
    }
    render() {
        return (
            <form className='add-form' onSubmit={this.onSubmit} >
                <input ref={this.inputRef} type="text" className="add-input" placeholder='Habit' />
                <button className="add-button">add</button>
            </form>
        );
    }
}

export default HabitAddForm;
// PureComponet 는 should component update를 구현함
// 컴포넌트가 업데이트 될지 안될지 비교
// 이전에 state와 props를 비교해서 앞과 일치하면 돔을 업데이트 하지 않음
