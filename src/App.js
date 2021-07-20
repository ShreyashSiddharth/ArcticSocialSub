import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch,useSelector } from 'react-redux';
import { login, logOut, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged(userAuth =>{
     if(userAuth){
      //logged in
      dispatch(login({
        email :userAuth.email,
        uid: userAuth.id,
        displayName : userAuth.displayName,
        photoUrl: userAuth.photoURL,
      }))
     } else {
        //logged out 
        dispatch(logOut());
     }
   })
    
  }, [])

  return (
    <div className="app">
       < Header />
     
      
      {!user ? <Login /> : (
        <div className="app-body">
      
        <Sidebar/>
        <Feed />
         <Widgets/>
       </div>

      )}
    
      
       
    </div>
  );
}

export default App;
