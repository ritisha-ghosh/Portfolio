import React, { useState } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { AiOutlineDown } from "react-icons/ai";

function Techstack() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <center>
      <div className={`folder ${isOpen ? "open" : ""}`} id="js_folder">
        <div
          className="folder-summary"
          id="js_toggle-folder"
          onClick={toggleFolder}
        >
          <div
            className="folder-summary__start"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <button
              className="folder-collapse-button"
              id="js_folder-collapse-button"
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <AiOutlineDown
                id="js_folder-collapse-button-icon"
                className={`feather feather-chevron-${isOpen ? "up" : "down"}`}
                size={24}
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className="folder-summary__details">
            <div
              className="folder-summary__details__name"
              style={{ color: "white", fontSize: "30px" }}
            >
              My Skills
            </div>
          </div>
          <div
            className="folder-summary__end"
            style={{ fontSize: "30px", paddingRight: "30px" }}
          >
            ↴
          </div>
        </div>

        <ul
          className={`folder-content ${isOpen ? "show" : ""}`}
          id="js_folder-content"
          style={{ fontFamily: "cursive" }}
        >
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiJavascript1 size={35} /> JavaScript
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiReact size={35} /> React
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiNodejs size={35} /> Node.js
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiMongodb size={35} /> MongoDB
              </div>
            </div>
          </li>

          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "60px" }}
              >
                <span className="icon-text" style={{ fontSize: "35px", paddingLeft:"5px" }}>C</span>C
              </div>
            </div>
          </li>

          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiJava size={35} /> Java
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiHtml5 size={35} /> HTML
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <DiCss3 size={35} /> CSS
              </div>
            </div>
          </li>
          <li className="folder-item js_folder-item">
            <div className="folder-item__details">
              <div
                className="folder-item__details__name"
                style={{ display: "flex", alignItems: "center", gap: "50px" }}
              >
                <SiExpress size={35} /> Express.js
              </div>
            </div>
          </li>
        </ul>
      </div>
    </center>
  );
}

export default Techstack;
