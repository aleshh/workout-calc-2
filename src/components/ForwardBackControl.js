import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import PaddedContainer from './PaddedContainer'
import Button from './Button'

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
  },
})

const ForwardBackControl = ({ onForward, onBack, forwardLabel, backLabel }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <PaddedContainer>
        {onBack && <Button label={backLabel} onClick={onBack} />}
      </PaddedContainer>

      <PaddedContainer>
        <Button label={forwardLabel} onClick={onForward} />
      </PaddedContainer>
    </div>
  )
}

ForwardBackControl.propTypes = {
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func,
  forwardLabel: PropTypes.string,
  backLabel: PropTypes.string,
}

ForwardBackControl.defaultProps = {
  onBack: undefined,
  forwardLabel: 'Go>',
  backLabel: '<Back',
}

export default ForwardBackControl
