import React, {  useEffect } from 'react';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Cookies from 'js-cookie';


function App() {
  useEffect(() => {
    // Set cookie
    Cookies.set('cookieName', 'cookieValue', { 
      sameSite: 'None', 
      secure: true 
    });
  }, []);
 
  return (
    <div className="App">
     <Cats />
     <Dogs />
    </div>
  );
}

export default App;
