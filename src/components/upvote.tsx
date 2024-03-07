import React from "react";
import arrorUp from "./../assets/arrow-up.svg";

interface UpvoteProps {
  state: boolean;
  handleToggleChange: () => void;
}

function Upvote({ state, handleToggleChange }: UpvoteProps) {
  return (
    <div
      className={"upvote " + (state ? "" : "vote-down")}
      onClick={handleToggleChange}
    >
      <img src={arrorUp} className="vote cursor-pointer" alt="" />
    </div>
  );
}

export default Upvote;
