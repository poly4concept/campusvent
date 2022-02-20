import './App.css';
import React, { useEffect, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getEvents } from './actions/events';
import Loading from './Components/loading'


//pages
const HomePage = React.lazy(() => import('./pages/HomePage'))
const CreatePage = React.lazy(() => import('./pages/createEvent'))
const AuthPage = React.lazy(() => import('./pages/Auth'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="App">
      <Suspense  fallback={<Loading/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="create" element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
