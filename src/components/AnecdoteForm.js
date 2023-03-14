import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch({
      type: 'NEW',
      payload: {
        content
      }
    })
  }

  return (
    <div>
      <h1>Add new anecdote</h1>
      <form onSubmit={addNewAnecdote}>
        <input name="anecdote"/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm