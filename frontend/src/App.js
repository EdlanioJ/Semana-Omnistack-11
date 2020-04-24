import React from 'react';
import { ThemeProvider } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import { ThemeContext } from './context/globalContext';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

function App() {
	const[theme, setTheme] = usePersistedState('theme', light);

	function toggleTheme() {
		setTheme(theme.title === 'light' ? dark : light);
	}

	return(
		<ThemeContext.Provider value={toggleTheme}>
			<ThemeProvider theme={theme}> 
				<GlobalStyle/>
				<Routes />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
