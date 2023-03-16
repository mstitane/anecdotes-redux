import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
	name: 'notification',
	initialState: '',
	reducers: {
		showNotification (state, action) {
			return action.payload
		},
		clearNotification () {
			return null
		}
	},
})

export const { showNotification, clearNotification } = slice.actions
export default slice.reducer