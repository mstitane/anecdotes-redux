import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/AnecdoteReducer'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const list = useSelector(({ anecdotes, filter }) => {
    console.log(filter)
    if (filter !== 'ALL')
      return anecdotes.filter(a=> a.content.includes(filter)).sort((a, b) => b.votes - a.votes)
    else
      return anecdotes.sort((a, b) => b.votes - a.votes)
  })

  return (
    <div>
      <ul>
        {
          list.map(anc =>
            <Anecdote
              key={anc.id}
              anecdote={anc}
              handleClick={() =>
                dispatch(vote(anc.id))
              }
            />
          )
        }
      </ul>
    </div>
  )
}

export default AnecdoteList