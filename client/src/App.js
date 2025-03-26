import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "./actions/events";
// import Loading from './Components/loading'
import Layout from "./pages/Layout";
import RequireAuth from "./pages/RequireAuth";

//pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CreatePage = React.lazy(() => import("./pages/createEvent/index"));
const AuthPage = React.lazy(() => import("./pages/Auth"));
const BookmarkPage = React.lazy(() => import("./pages/bookmark"));
const ComingSoonPage = React.lazy(() => import("./pages/ComingSoon"));

function App() {
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const dispatch = useDispatch();

  const errorToast = () => {
    toast.error(errorMessage, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    dispatch(getEvents());
    errorToast();
  }, [dispatch, errorMessage]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AuthPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/notification" element={<ComingSoonPage />} />
          <Route path="/seemore" element={<ComingSoonPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
