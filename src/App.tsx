import React, { useEffect } from "react";
import UpvoteList from "./components/upvoteList";
import { useDispatch, useSelector } from "react-redux";
import { addList, setList, updateList } from "./redux/upvotesSlice";

function App() {
  const lists = useSelector((state: any) => state.upvotes.upvotesList);
  const dispatch = useDispatch();

  useEffect(() => {
    let localLists = localStorage.getItem("upvotes-list");
    if (localLists) {
      dispatch(setList(JSON.parse(localLists)));
    }
  }, []);

  const updateStore = (newList: Array<boolean>, index: number) => {
    dispatch(
      updateList({
        newList: newList,
        index: index,
      })
    );
    updateLocalBrowserStorage();
  };

  const updateLocalBrowserStorage = () => {
    localStorage.setItem("upvotes-list", JSON.stringify(lists));
  };

  const addNewList = () => {
    dispatch(addList());
    updateLocalBrowserStorage();
  };

  return (
    <div className="app">
      <h1 className="text-center">Tech Assessment</h1>
      <div className="button-container">
        <button onClick={addNewList}>Create new list</button>
      </div>
      {lists?.map((list: Array<boolean>, index: number) => (
        <UpvoteList
          key={index}
          list={list}
          handleListChange={(newList: Array<boolean>) =>
            updateStore(newList, index)
          }
        />
      ))}
    </div>
  );
}

export default App;
