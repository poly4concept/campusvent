import React, { useState } from "react";
import ProfileDrawer from "../../Components/Drawers/ProfileDrawer";
import { Avatar, Box } from "@mui/material";
import Sidebar from "../../Components/sidebar";
import "../createEvent/create.css";

const ComingSoon = () => {
  const [openProfileInfo, setOpenProfileInfo] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleOpenProfileInfo = () => {
    setOpenProfileInfo(true);
  };
  const handleCloseProfileInfo = () => {
    setOpenProfileInfo(false);
  };

  return (
    <div>
      <ProfileDrawer
        openState={openProfileInfo}
        openDrawer={handleOpenProfileInfo}
        closeDrawer={handleCloseProfileInfo}
      />
      <Box className="mobile-header">
        <Avatar
          onClick={handleOpenProfileInfo}
          className="avatar"
          src={user?.result?.imageUrl}
          alt={user?.result?.familyName}
        >
          {user?.result?.givenName.charAt(0)}
        </Avatar>
        <h4>Create Event</h4>
      </Box>
      <div className="create-page">
        <Sidebar />
        <div className="create-container">
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
