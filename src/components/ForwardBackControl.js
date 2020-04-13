import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import PaddedContainer from './PaddedContainer'
import Button from './Button'

const useStyles = createUseStyles({})

const ForwardBackControl = ({ onForward, onBack, forwardLabel, backLabel }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <PaddedContainer inline>
        {onBack && (
          <Button
            label={backLabel}
            color="secondary"
            onClick={onBack}
            navigation
            secondary
          />
        )}
      </PaddedContainer>

      <PaddedContainer inline>
        <Button label={forwardLabel} onClick={onForward} navigation />
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
