import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalProvider from './context/globalContext';

import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';

export default function Routes() {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<Switch>
					<Route path='/' exact component={Logon} />
					<Route path='/incidents/new' component={NewIncident} />
					<Route path='/profile' component={Profile} />
					<Route path='/register' component={Register} />
				</Switch>
			</GlobalProvider>
		</BrowserRouter>
	);
}
