import './App.css';
import React, {useEffect} from 'react'
import Sidebar from './sidebar';
import Feed from './feed';
import Notification from './notification';
import { useDispatch } from 'react-redux';
import { getEvents } from './actions/events';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Notification/>
    </div>
  );
}

export default App;
