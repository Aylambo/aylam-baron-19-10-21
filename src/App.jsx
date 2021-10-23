import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/styles/styles.scss'
import WeatherPage from './pages/WeatherPage'
import Header from './cmps/Header/Header'
import {FavoritesPage} from './pages/FavoritesPage.jsx'

import  useForecast  from './services/useForecast'
import {useMainContext} from './services/Context'



function App() {
  const { isDarkMode} = useMainContext()

  const {submitRequest } = useForecast()

  return (
    <div className={(isDarkMode) ? "dark" : "light"}>
      <Router>
        <Header />
        <Switch>
          <Route path='/favorites' component={FavoritesPage} props={submitRequest} />
          <Route exact path='/' component={WeatherPage}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
