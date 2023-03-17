import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/AnecdoteReducer'
import Anecdote from './Anecdote'
import { showNotification } from '../reducers/NotificationReducer'

const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(({ anecdotes, filter }) => {
		let list = []

		if (filter !== '')
			list = anecdotes.filter(a => a.content.includes(filter))
		else
			list = anecdotes

		return [...list].sort((a, b) => b.votes - a.votes)
	})

	const voteHandler = (anecdote) => {
		dispatch(vote(anecdote.id))
		dispatch(showNotification(`Voted for '${anecdote.content}'`, 5000))
	}

	return (
		<div>
			<ul>
				{
					anecdotes.map(anc =>
						<Anecdote
							key={anc.id}
							anecdote={anc}
							handleClick={() => voteHandler(anc)}
						/>
					)
				}
			</ul>
		</div>
	)
}

export default AnecdoteList