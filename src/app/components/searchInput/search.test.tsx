import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import SearchInput from '.';
 
test('Search is rendered', () => {
    render(<SearchInput getString={()=>{}}/>);

    // Verify if input is render
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;

    expect(inputElement).toBeDefined()

})

