import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/AnecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
	const dispatch = useDispatch()
	const addNewAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		const anecdote = await anecdoteService.create(content)
		dispatch(createNew(anecdote))
		event.target.anecdote.value = ''
	}

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addNewAnecdote}>
				<input name="anecdote"/>
				<button type="submit">add</button>
			</form>
		</div>
	)
}

export default AnecdoteForm