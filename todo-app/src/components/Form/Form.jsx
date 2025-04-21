import './form.css';
import { useRef } from 'react';

function Form() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" className="form__input" />
        <button className="form__button">Add Todo</button>
    </form>
  )
}

export default Form
