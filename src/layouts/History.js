import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { createUseStyles } from 'react-jss'
import Button from '../components/Button'

const useStyles = createUseStyles({
  history: {
    position: 'absolute',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '80vw',
    maxWidth: 540,
    margin: [[30, 'auto']],
    padding: [[30, 40]],
    borderRadius: 20,
    boxShadow: '0 0 100px rgba(0, 0, 0, .5)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, .5)',
  },
})

const History = ({ show, history, onClose, onDeleteHistory }) => {
  const classes = useStyles()

  const handleDeleteHistory = () => {
    const deleteConfirmed = window.confirm(
      'Are you sure you want to delete all workout history?'
    )
    if (deleteConfirmed) {
      onDeleteHistory()
      onClose()
    }
  }

  return (
    <>
      <div
        style={{ display: show ? 'block' : 'none' }}
        className={classes.overlay}
      />
      <div
        style={{ display: show ? 'block' : 'none' }}
        className={classes.history}
      >
        <h2>Workout history</h2>
        <p>&nbsp;</p>
        {history.map((session) => (
          <>
            <p key={session.date}>{moment(session.date).fromNow()}</p>
            <ul>
              {session.exercises.map((exercise) => (
                <li>
                  <b>{exercise.name}</b>:
                  {` ${exercise.weight} lbs. worked(${exercise.nextWeight} lbs. set for next time)`}
                </li>
              ))}
            </ul>
          </>
        ))}
        <Button
          label="Close"
          onClick={onClose}
          small
          style={{ position: 'absolute', right: 40, bottom: 10 }}
        />
        <Button
          label="Delete history"
          onClick={handleDeleteHistory}
          small
          secondary
          style={{ position: 'absolute', left: 40, bottom: 10 }}
        />
      </div>
    </>
  )
}

History.propTypes = {
  show: PropTypes.bool.isRequired,
  history: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onDeleteHistory: PropTypes.func.isRequired,
}

export default History
