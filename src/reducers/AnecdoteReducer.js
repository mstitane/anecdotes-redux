import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		createNew (state, action) {
			state.push(action.payload)
		},
		vote (state, action) {
			const id = action.payload
			const anecdoteToVote = state.find(a => a.id === id)
			const changedAnecdote = {
				...anecdoteToVote,
				votes: anecdoteToVote.votes + 1
			}
			return state.map(anc => anc.id !== id ? anc : changedAnecdote)
		},
		setAnecdotes (state, action) {
			return action.payload
		},
	}
})

export const { createNew, vote, setAnecdotes } = slice.actions
export default slice.reducer