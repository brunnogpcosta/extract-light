import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import EmptyState from '.'


test('Empty state is working', () => {
  render(<EmptyState/>)
  expect(screen.getByRole('heading', { level: 2, name: 'Nenhuma fatura encontrada!' })).toBeDefined()
})
