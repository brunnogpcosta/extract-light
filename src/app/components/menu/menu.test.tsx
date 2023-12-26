import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import Menu from '.';
 
test('Menu have subitems', () => {
    render(<Menu/>);

    const menuItems = document.querySelectorAll('li');

   // if have 2 menu items
    expect(menuItems.length).toBe(2);
  
    // if is correct names
    expect(menuItems[0]?.innerText === 'dashboard');
    expect(menuItems[1]?.innerText === 'faturas');

})

