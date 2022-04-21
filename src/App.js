import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';
import WallScreen from './screens/WallScreen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen />}>
          <Route path='' element={<HomeScreen />} />
          <Route path=':tokenId' element={<WallScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
