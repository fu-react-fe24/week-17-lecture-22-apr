import './form.css';
import { useRef } from 'react';
import useTodoStore from '../../stores/useTodoStore';

function Form() {
    const inputRef = useRef(null);
    const {addNewTodo} = useTodoStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputRef.current.value !== '') {
          addNewTodo(inputRef.current.value);
        }
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" className="form__input" />
        <button className="form__button">Add Todo</button>
    </form>
  )
}

export default Form
