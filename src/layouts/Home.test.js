import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import reducer from '../reducers'

import Home from './Home'

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

it('renders without error', () => {
  const { getAllByTestId } = renderWithRedux(<Home />)
  const firstButton = getAllByTestId('button')[0]
  fireEvent.click(firstButton)
})
