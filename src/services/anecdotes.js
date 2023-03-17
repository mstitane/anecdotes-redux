import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}
const create = async (content) => {
	const anecdote = asObject(content)
	const response = await axios.post(baseUrl, anecdote)
	return response.data
}

const generateId = () =>
	Number((Math.random() * 1000000).toFixed(0))

const asObject = (content) => {
	return {
		content: content,
		id: generateId(),
		votes: 0
	}
}

const anecdoteService = { getAll, create }
export default anecdoteService