import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import RoomProvider from './context'

function App() {
  return (
    <>
    <Navbar />
    <RoomProvider>
    <Switch>
      <Route exact path='/resort' component={Home} />
      <Route exact path='/resort/rooms' component={Rooms} />
      <Route exact path='/resort/rooms/:slug' component={SingleRoom} />
      <Route component={Error} />
    </Switch>
    </RoomProvider>
    </>
  );
}

export default App;
