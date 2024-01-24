import React from "react";
import "./AddAll.css";
import { tracks } from "./../../data/tracks";
import { FaPlus } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { actions } from "./../../actions";
import { useDispatch, useSelector } from "react-redux";

export const AddAll = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const onAllClick = () => {
    dispatch({ type: actions.ALL, payload: state.all });
  };

  const addSongsClick = () => {
    dispatch({ type: actions.DISABLE, payload: state.disable });
    dispatch({ type: actions.ALL, payload: state.all });
  };
  return (
    <div className="addall">
      <div className="add">
        <button onClick={addSongsClick}>
          <FaPlus /> <span>Add All</span>
        </button>
        <button onClick={onAllClick} disabled={state.disable}>
          <TiArrowSortedDown />
        </button>
      </div>
      {state.all && (
        <div className="songs">
          <ul className="artisname">
            <li>Song Name</li>
            <li>Artist Name</li>
          </ul>
          {state.all &&
            tracks.map((i) => {
              return (
                <ul>
                  <li>{i.songName}</li>
                  <li>{i.artistName}</li>
                </ul>
              );
            })}
        </div>
      )}
    </div>
  );
};
