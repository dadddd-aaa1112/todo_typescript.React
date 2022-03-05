import React, { FC, useRef, useState } from 'react'
import TodoList from './components/TodoList'
import { ITodo } from '../src/types/data'
import { useEffect } from 'react'
import TodoItem from './components/TodoItem'

const App: FC = () => {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') addTodo()
	}

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
				},
			])
			setValue('')
		}
	}

	const removeTodo = (id: number): void => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) return todo

				return {
					...todo,
					complete: !todo.complete,
				}
			})
		)
	}

	useEffect(() => {
		if (inputRed.current) {
			inputRed.current.focus()
		}
	}, [])

	const inputRed = useRef<HTMLInputElement>(null)

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}
	return (
		<div>
			<div>
				<input
					ref={inputRed}
					value={value}
					onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>
				<button onClick={addTodo}>add</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App
