import React from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { logo } from "./header_logo";
import ForumIcon from "@mui/icons-material/Forum";

export default function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header_icon" />
      </IconButton>
      <Avatar alt="headericon" src={logo} />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}
