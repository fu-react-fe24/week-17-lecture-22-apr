import { create } from 'zustand';

const useTodoStore = create((set) => ({
    todos : [],
    setTodos : (newTodos) => {
        set({todos : newTodos});
    },
    addNewTodo : (todo) => {
        set((state) => ({
            todos : [...state.todos, {
                id : Date.now(),
                title : todo,
                completed : false
            }]
        }));
    },
    updateTodo : (id) => {
        set((state) => {
            const updatedTodos = state.todos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed : !todo.completed}
                } else {
                    return todo;
                }
            });
            return { todos : updatedTodos }
        });
    }
}));

export default useTodoStore;

/*
set((state) => {
            const newTodo = {
                id : Date.now(),
                title : todo,
                completed : false
            }
            return { todos : [...state.todos, newTodo] };
        });
*/