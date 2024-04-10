import React, { memo } from "react";
import { Typography } from "@mui/material";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachements = [], createdAt } = message;
   
  const sameSender = sender?._id === user?._id;
  const timeAgo=moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {
        attachements.length> 0 && attachements.map((attachment,index)=>{
           const url=attachment.url;
           const file=fileFormat(url);
           return <Box key={index}>
                 <a href="" target="_blank" dowload style={{color:"black"}}>
                  {RenderAttachment(file,url)}
                 </a>
           </Box>
        })
      }
      <Typography
      variant="caption"
      color={"text.secondary"}
      >{timeAgo}</Typography>
    </div>
  );
};

export default memo(MessageComponent);
