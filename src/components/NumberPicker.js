import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import PaddedContainer from './PaddedContainer'
import Button from './Button'

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
  },
  input: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    border: '2px solid black',
  },
})

const NumberPicker = ({ initialValue, increment }) => {
  const classes = useStyles()

  const [value, setValue] = React.useState(initialValue)

  const updateValue = e => {
    setValue(e.target.value)
  }

  const inc = e => {
    setValue(parseInt(value) + increment)
  }

  const dec = e => {
    setValue(value - increment)
  }

  return (
    <div className={classes.root}>
      <PaddedContainer>
        <Button label="-" onClick={dec} />
      </PaddedContainer>
      <PaddedContainer>
        <form>
          <input
            className={classes.input}
            value={value}
            onChange={updateValue}
          />
        </form>
      </PaddedContainer>
      <PaddedContainer>
        <Button label="+" onClick={inc} />
      </PaddedContainer>
    </div>
  )
}

NumberPicker.propTypes = {
  initialValue: PropTypes.number,
  increment: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

NumberPicker.defaultProps = {
  initialValue: 45,
  increment: 5,
}

export default NumberPicker
