import React from "react";
import "./dock.scss";

function Dock({ windowState, setwindowState }) {
  return (
    <div>
      <footer className="dock">
        <div
          className="icon github"
          onClick={() => {
            setwindowState((state) => ({ ...state, github: true }));
          }}
        >
          <img src="/doc-icons/github.svg" alt="" />
        </div>
        <div
          className="icon note"
          onClick={() => {
            setwindowState((state) => ({ ...state, note: true }));
          }}
        >
          <img src="/doc-icons/note.svg" alt="" />
        </div>
        <div
          className="icon pdf"
          onClick={() => {
            setwindowState((state) => ({ ...state, resume: true }));
          }}
        >
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div className="icon calender"
        onClick={()=>{window.open("https://calendar.google.com","_blank")}}
        >
          <img src="/doc-icons/calender.svg" alt="" />
        </div>
        <div
          className="icon spotify"
          onClick={() => {
            setwindowState((state) => ({ ...state, spotify: true }));
          }}
        >
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div className="icon mail"
         onClick={()=>{window.open("mailto:pavansalunkhe17@gmail.com","_blank")}}
        >
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div className="icon link"
        onClick={()=>{window.open("https://www.linkedin.com/in/pavansalunkhe17/","_blank")}}
        >
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div
          className="icon cli"
          onClick={() => {
            setwindowState((state) => ({ ...state, cli: true }));
          }}
        >
          <img src="/doc-icons/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Dock;
