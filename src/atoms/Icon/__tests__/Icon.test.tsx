// __tests__/Icon.test.js
import React from 'react'
import Icon from '../Icon'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('loads and displays greeting', async () => {
  render(<Icon />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))
  
})

test('handles server error', async () => {
 
  render(<Icon />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

})