import './App.css';
import React, { useEffect, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from './actions/events';
import Loading from './Components/loading'


//pages
const HomePage = React.lazy(() => import('./pages/HomePage'))
const CreatePage = React.lazy(() => import('./pages/createEvent'))
const AuthPage = React.lazy(() => import('./pages/Auth'))

function App() {
  const errorMessage = useSelector(state => state.error.errorMessage)
  const userd = useSelector(state => state.auth)
    console.log(errorMessage, userd);
  // if (errorMessage) {   
  // }
  const user = JSON.parse(localStorage.getItem('profile'))
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const errorToast = () => {
      toast.error(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  useEffect(() => {
    dispatch(getEvents())
    errorToast()
  }, [dispatch, errorMessage])

  return (
    <div className="App">
      <Suspense  fallback={<Loading/>}>
        <BrowserRouter>
          <ToastContainer />  
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
