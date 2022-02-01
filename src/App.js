import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components';

import { Home, Contacts, Events, EventPage, PersonalData } from './pages';

const App = () => {
	return (
		<>
			<Header />

			<Suspense fallback={() => <></>}>
				<Switch>
					<Route path="/" render={() => <Home />} exact />

					<Route path="/contacts" render={() => <Contacts />} exact />
					<Route path="/events" render={() => <Events />} exact />

					<Route path="/event/:url" render={(props) => <EventPage {...props} />} exact />

					<Route path="/personal-data" render={() => <PersonalData />} exact />

					<Route render={() => window.location.href = "/"} exact />
				</Switch>
			</Suspense>

			<Footer />
		</>
	)
}

// REACT_APP_API_DOMEN = https://gdm.msk.ru:5000/api
// REACT_APP_IMAGE_DOMEN = https://gdm.msk.ru:5000

// REACT_APP_API_DOMEN = http://localhost:5000/api
// REACT_APP_IMAGE_DOMEN = https://gdm.msk.ru:5000

export default App
