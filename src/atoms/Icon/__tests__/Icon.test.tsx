// __tests__/Icon.test.js
import React from 'react'
import Icon from '../Icon'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('<Icon /> expect return haha', async () => {
  render(<Icon />)

  screen.getByText('haha');
})
