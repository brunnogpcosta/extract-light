import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Loading from '.';
 
test('Loading is rendered', () => {
    render(<Loading/>);

    // Verify if is render
    const element = document.querySelector('.lds-ripple')
    expect(element)

})

