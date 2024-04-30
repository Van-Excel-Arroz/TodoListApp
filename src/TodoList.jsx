import { Box, List, Typography, Card, CardContent } from '@mui/material';

import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialLocalStorageData = JSON.parse(localStorage.getItem('todos')) || [];

export default function TodoList(params) {
	const [todos, setTodos] = useState(getInitialLocalStorageData);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleToggle = id => {
		setTodos(prevTodos => {
			return prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
		});
	};

	const removeTodo = id => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id);
		});
	};

	const addTodo = text => {
		setTodos(prevTodos => {
			return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
		});
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Card variant="outlined" sx={{ maxWidth: '100%', width: '500px', m: 2 }}>
				<CardContent>
					<Typography variant="h1" sx={{ textAlign: 'center' }}>
						Todos
					</Typography>
					<TodoForm onAddTodo={addTodo} />
					<List
						sx={{
							width: '100%',
							bgcolor: 'background.paper',
							maxHeight: '49vh',
							overflow: 'auto',
						}}
					>
						{todos &&
							todos.map(todo => {
								return <TodoItem todo={todo} onHandleToggle={handleToggle} onRemoveTodo={removeTodo} />;
							})}
					</List>
				</CardContent>
			</Card>
		</Box>
	);
}
