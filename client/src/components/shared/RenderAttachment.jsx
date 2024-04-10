import React from "react";
import { transformImage } from "../../lib/features";

const RenderAttachment = ({ file, url }) => {
  switch (file) {
    case "video":
      <video src={url} width={"200px"} preload="none" height="" controls />;
      break;
    case "image":
      <img src={transformImage(url,200)} alt="Attachment"  width={"200px"}
      height={"150px"} style={{objectFit:"contain"}}
      />;
      break;
    case "audio":
      <audio src={url} controls />;
      break;
    default:
        <FileOpen />
  }
};

export default RenderAttachment;
