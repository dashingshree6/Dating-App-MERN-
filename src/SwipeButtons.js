import React from "react";
import "./SwipeButtons.css";
import IconButton from "@mui/material/IconButton";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import CancelIcon from "@mui/icons-material/Cancel";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="button_replay">
        <ReplayCircleFilledIcon fontSize="large" />
      </IconButton>
      <IconButton className="button_cancel">
        <CancelIcon fontSize="large" />
      </IconButton>
      <IconButton className="button_star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="button_favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="button_flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
