import { createSlice } from '@reduxjs/toolkit'

const anecdotes = [
	'If it hurts, do it more often.',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]
const generateId = () =>
	Number((Math.random() * 1000000).toFixed(0))

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: generateId(),
		votes: 0
	}
}
const initialState = anecdotes.map(asObject)

const slice = createSlice({
	name: 'anecdotes',
	initialState: initialState,
	reducers: {
		createNew (state, action) {
			const newAnecdote = asObject(action.payload)
			state.push(newAnecdote)
		},
		vote (state, action) {
			const id = action.payload
			const anecdoteToVote = state.find(a => a.id === id)
			const changedAnecdote = {
				...anecdoteToVote,
				votes: anecdoteToVote.votes + 1
			}
			return state.map(anc => anc.id !== id ? anc : changedAnecdote)
		}
	}
})

export const { createNew, vote } = slice.actions
export default slice.reducer