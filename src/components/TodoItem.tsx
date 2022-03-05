import React from 'react'
import { ITodo } from '../types/data'
interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void
	toggleTodo: (id: number) => void
}
const TodoItem: React.FC<ITodoItem> = (props) => {
	const { id, title, complete, removeTodo, toggleTodo } = props
	return (
		<div>
			<input
				type="checkbox"
				checked={complete}
				onChange={() => toggleTodo(id)}
			/>
			{title}
			<button
				onClick={() => removeTodo(id)}
				style={{
					margin: '0 15px',
					color: 'red',
					border: 'none',
					background: 'transparent',
				}}
			>
				x
			</button>
		</div>
	)
}

export default TodoItem
