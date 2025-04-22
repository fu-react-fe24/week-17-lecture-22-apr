import { create } from 'zustand';

const todos = ['Köpa kaffe', 'Mata katten', 'Leka doktor', 'Spela fotboll'];

export const useTodoStore = create((set) => ({
    todo : 'Ingen todo just nu',
    setTodo : () => {
        set({todo : todos[Math.floor(Math.random() * todos.length)]});
    }
}));