import './index.css';
import { Button } from '@myApp/button';
import { Todo } from '@myApp/todo';
import { Quote } from '@myApp/quote';

export function LandingPage() {
  return (
    <section className="page">
        <h1>LandingPage</h1>
        <Todo />
        <Quote text="bla bla bla" />
        <Button />
    </section>
  )
}

