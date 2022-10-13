import { createContext } from 'react';

const ThemeContext = createContext([localStorage.getItem('theme'), () => {}]);

export default ThemeContext;
