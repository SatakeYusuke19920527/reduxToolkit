import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {selectUser, login} from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  React.useEffect(() => {
    dispatch(login())
  }, [dispatch])

  const func = () => {
    window.alert('Hello world')
  }

  console.log(user.func())
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
