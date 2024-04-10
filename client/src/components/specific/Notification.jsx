import React,{memo} from "react";
import { Dialog, Stack, DialogTitle, ListItem,Button,Avatar, Typography } from "@mui/material";
import { sampleNotification } from "../../constant/sampleData";
import { Add } from "@mui/icons-material";
const Notification = () => {
  const freindRequesthandler=({_id,accept})=>{}
  return (
    <Dialog open>
      <Stack px={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>

        {sampleNotification.length > 0 ? (
          sampleNotification.map((i)=> <NotificationItem sender={i.sender} _id={i._id} handler={freindRequesthandler} key={i._id}  />)
        ) : (
          <Typography>0 notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem =memo( ({ sender,_id,handler }) => {
  return   <ListItem>
  <Stack direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  width={"100%"}
  >
    <Avatar />
    <Typography
    variant="body1"
    sx={{
      flexGrow:1,
      display:"-webkit-box",
      WebkitLineClampL:1,
      WebkitBoxOrient:"vertical",
      overflow:"hidden",
      textOverflow:"ellipsis",
      width:"100%"
    }}
    >{`${sender && sender.name} sent you a friend request`}</Typography>
   <Stack
   direction={{
    xs:"column",
    sm:"row"
   }}
   >
    <Button onClick={()=>handler(_id,accept=true)}>Accept</Button>
    <Button color="error" onClick={()=>handler(_id,accept=false)}>Reject</Button>
   </Stack>
  </Stack>
</ListItem>;
});

export default Notification;
