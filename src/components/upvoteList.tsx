import React, { useEffect, useState } from "react";
import plus from "./../assets/plus.svg";
import Upvote from "./upvote";

interface UpvoteListProps {
  list: Array<boolean>;
  handleListChange: (newList: Array<boolean>) => void;
}

function UpvoteList({ list, handleListChange }: UpvoteListProps) {
  const [votes, setVotes] = useState<Array<boolean>>();

  useEffect(() => {
    setVotes(list);
  }, [list]);

  const handleToggleChange = (index: number) => {
    if (votes) {
      const newVotes = [...votes];
      newVotes[index] = !newVotes[index];
      setVotes(newVotes);
      handleListChange(newVotes);
    }
  };

  const addUpvotes = () => {
    if (votes) {
      const newVotes = [...votes, true];
      setVotes(newVotes);
      handleListChange(newVotes);
    }
  };

  return (
    <div className="upvote-list">
      <img
        src={plus}
        className="cursor-pointer add-button"
        onClick={addUpvotes}
        alt=""
      />
      <div className="list">
        {votes?.map((vote, index) => (
          <Upvote
            key={index}
            handleToggleChange={() => handleToggleChange(index)}
            state={vote}
          />
        ))}
      </div>
    </div>
  );
}

export default UpvoteList;
