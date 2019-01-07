import React from 'react'
import { IndexPage } from '../../src/pages/index'
import { render } from 'react-testing-library'

describe('IndexPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText('See content generated from Markdown files')).toHaveAttribute('href', '/all/')
  })
})
