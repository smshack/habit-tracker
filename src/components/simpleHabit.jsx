import React,{useState,useRef,useCallback,useEffect} from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0)
    const spanRef =useRef();
    const handleIncrement = useCallback(() =>{
        setCount(count+1);
        // console.log(spanRef)

    });
    useEffect(() => {
      console.log(`mount & update !:${count}`)
    }, [count])
    return(
        <li className='habit'>
            <span ref ={spanRef} className="habit-name">Reading</span>
            <span className="habit-cout">{count}</span>
            <button 
                className="habit-button habit-increase"
                onClick={handleIncrement}    
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    )
};

export default SimpleHabit;