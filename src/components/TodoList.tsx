import { FC } from 'react'
import { ITodo } from '../types/data'
import TodoItem from './TodoItem'

interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	removeTodo: (id: number) => void
}
const TodoList: FC<ITodoListProps> = (props) => {
	const { items, toggleTodo, removeTodo } = props
	return (
		<>
			{items.map((todo) => (
				<TodoItem
					key={todo.id}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
					{...todo}
				/>
			))}
		</>
	)
}

export default TodoList
