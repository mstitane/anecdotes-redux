import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearNotification } from '../reducers/NotificationReducer'

const Notification = () => {
	const dispatch = useDispatch()
	let notification = useSelector(({ anecdotes, filter, notification }) => {
		return notification
	})
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
		backgroundColor: 'rgb(160,238,82)'
	}
	useEffect(() => {
		setTimeout(() => dispatch(clearNotification()), 5000)
	})
	if (!notification) return (<div/>)
	return (
		<div>
			<div style={style}>
				{notification}
			</div>
			<br/>
		</div>

	)
}

export default Notification