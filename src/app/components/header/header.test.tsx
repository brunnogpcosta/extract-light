import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Header from '.'
 
test('Header title is ok', () => {
    render(<Header setSearchInput={() => {}} />);

    // Verify if title is rendering correctly
    expect(screen.getByText('Extract')).toBeDefined();
    expect(screen.getByText('Light')).toBeDefined();
})

test('Css logo title is ok', () => {
    render(<Header setSearchInput={() => {}} />);
  
    // verify if logo style is applied
    const element = document.querySelector('#extract-title')
    expect(element?.className).toContain('text-[#15D47B]');
    ;
  });