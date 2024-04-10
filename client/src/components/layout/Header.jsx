import React, { Suspense, lazy, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Backdrop
} from "@mui/material";
import { orange } from "../../constant/color";
import {
  Add,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Notifications as NotificationIcon,
  Logout as LogoutIcon
  
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialouge=lazy(()=>import("../specific/Search"))
const NotificationDialouge=lazy(()=>import("../specific/Notification"))
const NewGroupDialouge=lazy(()=>import("../specific/NewGroup"))

const Header = () => {
  const navigate = useNavigate();
  const [ismobile,setIsMobile]=useState(false);
  const [isSearch,setIsSearch]=useState(false);
  const [isNewGroup,setIsNewGroup]=useState(false);
  const [isNotification,setIsNotification]=useState(false);
  const handleMobile = () => {
    setIsMobile(!ismobile)
  };
  const openSearchDialoge = () => {
    setIsSearch(!isSearch)
  };
  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup)
  };
  const openNotification=()=>{
    setIsNotification(!isNotification)
  }
  const navigateGroup = () => navigate("/groups");
  const handleLogout=()=>{}
  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Bate
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton color="inherit" size="large" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              title="Search"
              icon={<SearchIcon />}
              onClick={openSearchDialoge}
            />
            <IconBtn title="New Group" icon={<Add />} onClick={openNewGroup} />
            <IconBtn
              title="Notification"
              icon={<NotificationIcon />}
              onClick={openNotification}
            />
            <IconBtn
              title="Manage Group"
              icon={<GroupIcon />}
              onClick={navigateGroup}
            />
              <IconBtn
              title="Logout"
              icon={<LogoutIcon />}
              onClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {   isSearch &&  <Suspense fallback={<Backdrop  open/>} >
      <SearchDialouge />
    </Suspense>   }
    {   isNotification && <Suspense fallback={<Backdrop  open/>} >
      <NotificationDialouge />
    </Suspense>   }
    {   isNewGroup && <Suspense fallback={<Backdrop  open/>} >
      <NewGroupDialouge />
    </Suspense>   }
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
