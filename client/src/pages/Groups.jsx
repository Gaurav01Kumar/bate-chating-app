import React, { memo, useState } from "react";
import {
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { KeyboardBackspace, Menu } from "@mui/icons-material";
import { matBlack } from "../constant/color";
import { Link, useNavigate } from "react-router-dom";
import AvatarCard from "../components/shared/AvtarCard";
import { sampleChat } from "../constant/sampleData";
const Groups = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const chatId="ashsh";
  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };
  const IconsBtn = (
    <>
      <IconButton
        sx={{
          display: {
            sx: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
        onClick={handleMobile}
      >
        <Menu />
      </IconButton>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rbga(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <GroupsList w={"50vh"} myGroups={sampleChat} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconsBtn}
      </Grid>
      <Drawer
        open={isMobileOpen}
        onClose={handleMobile}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <GroupsList w={"50vh"} myGroups={sampleChat} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link>
      <Stack>
        <AvatarCard  avatar={avatar}/>
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});
export default Groups;
