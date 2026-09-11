import React from "react";
import "./desktopfolder.scss";

const folders = [
  { id: "documents", label: "Documents", icon: "/doc-icons/folder.svg" },
  { id: "projects", label: "Projects", icon: "/doc-icons/folder.svg" },
  { id: "media", label: "Media", icon: "/doc-icons/folder.svg" },
];

function DesktopFolder({ onOpen }) {
  return (
    <div className="desktop-folders">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="desktop-folder"
          onDoubleClick={() => onOpen(folder.id)}
        >
          <div className="folder-icon-wrapper">
            <img src={folder.icon} alt={folder.label} draggable={false} />
          </div>
          <span className="folder-label">{folder.label}</span>
        </div>
      ))}
    </div>
  );
}

export default DesktopFolder;
