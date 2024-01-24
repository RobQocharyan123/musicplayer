import React, { useRef, useState } from "react";
import "./Header.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { AddAll } from "../addall/AddAll";
import { PlayAll } from "./../playall/PlayAll";
import MusicUpload from "./../musicuploadform/MusicUploadForm";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSearchClick = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: value });
    setValue("");
  };
  let messageField = useRef();

  const onChnageClick = (e) => {
    setValue(e.target.value);
    setTimeout(function () {
      messageField.current.addEventListener("keydown", function (keyPress) {
        if (keyPress.keyCode == 13) {
          onSearchClick();
        }
      });
    }, 1000);
  };

  return (
    <div className="header">
      <div className="first">
        <PlayAll />
        <AddAll />
      </div>
      <div className="second">
        <div className="track">
          <button>
            <HiMiniArrowsUpDown />
            <span>Track Nu...</span>

            <TiArrowSortedDown />
          </button>
        </div>
        <div className="input">
          <IoSearch onClick={onSearchClick} />

          <input
            type="text"
            placeholder="Filter"
            onChange={(e) => onChnageClick(e)}
            value={value}
            ref={messageField}
          />
        </div>
      </div>
      <MusicUpload />
    </div>
  );
};
