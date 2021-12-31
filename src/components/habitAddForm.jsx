import React, { Component } from 'react';

class HabitAddForm extends Component {
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