/* eslint-env jest */
import React from 'react'
import { renderWithReduxAndIntl } from '../../../../test/helpers/render'
import EnvironmentEditor from '../EnvironmentEditor'

describe('EnvironmentEditor', () => {
  const initialState = {
    street: {
      environment: null
    },
    ui: {
      toolboxVisible: true
    }
  }

  it('renders', () => {
    const wrapper = renderWithReduxAndIntl(<EnvironmentEditor />, {
      initialState
    })
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it.todo('selects an environment')
  it.todo('closes when close button is clicked')
})
