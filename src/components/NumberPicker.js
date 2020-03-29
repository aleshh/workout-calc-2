import React from 'react'
import { number } from 'prop-types'

import PaddedContainer from './PaddedContainer'
import Button from './Button'
import { createUseStyles } from 'react-jss'

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

const NumberPicker = ({ initialValue }) => {
  const classes = useStyles()

  const [value, setValue] = React.useState(initialValue)

  const updateValue = e => {
    setValue(e.target.value)
  }

  const inc = e => {}

  const dec = e => {}

  return (
    <div className={classes.root}>
      <PaddedContainer>
        <Button label="-" onClick={inc} />
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
        <Button label="+" onClick={dec} />
      </PaddedContainer>
    </div>
  )
}

NumberPicker.propTypes = {
  initialValue: number,
}

NumberPicker.defaultProps = {
  initialValue: undefined,
}

export default NumberPicker
