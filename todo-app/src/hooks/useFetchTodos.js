import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        axios.get('https://santosnr6.github.io/Data/todos.json')
            .then((response) => setTodos(response.data))
            .catch((error) => setIsError(error))
            .finally(() => setIsLoading(false));
    }, []);
    
    return { todos, isLoading, isError };
}