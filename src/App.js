import React, { useEffect } from 'react';
import './App.css';
import EmloyeeTable from './components/dataTable';
import { Home } from './pages/Home';



// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentUser } from './components/Auth/actions';

function App() {
  // const dispatch = useDispatch();
  // const { currentUser, authToken } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!!localStorage.getItem('authToken')) {
  //     const token = localStorage.getItem('authToken');
  //     dispatch(setCurrentUser(token));
  //   }
  // }, []);
  return (
    <div className='app p-5'>
      
      <Home/>
    </div>
  );
}

export default App;
