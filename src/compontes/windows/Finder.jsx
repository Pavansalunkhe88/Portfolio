import React, { useState, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./finder.scss";

const DOCUMENTS_ITEMS = [
  {
    id: "resume",
    type: "file",
    label: "Resume.pdf",
    icon: "/doc-icons/pdf.svg",
    iconBg: "icon-bg-pdf",
    action: { type: "window", window: "resume" },
  },
  {
    id: "about",
    type: "file",
    label: "About Me.txt",
    icon: "/doc-icons/note.svg",
    iconBg: "icon-bg-note",
    action: { type: "window", window: "note" },
  },
  {
    id: "links",
    type: "folder",
    label: "Links",
    icon: "/doc-icons/folder.svg",
    iconBg: "",
    action: { type: "navigate", folder: "links" },
  },
];

const PROJECTS_ITEMS = [
  {
    id: "github",
    type: "file",
    label: "Projects",
    icon: "/doc-icons/github.svg",
    iconBg: "icon-bg-github",
    action: { type: "window", window: "github" },
  },
  {
    id: "terminal",
    type: "file",
    label: "Terminal",
    icon: "/doc-icons/cli.svg",
    iconBg: "icon-bg-cli",
    action: { type: "window", window: "cli" },
  },
];

const MEDIA_ITEMS = [
  {
    id: "playlist",
    type: "file",
    label: "Playlist",
    icon: "/doc-icons/spotify.svg",
    iconBg: "icon-bg-spotify",
    action: { type: "window", window: "spotify" },
  },
];

const LINKS_ITEMS = [
  {
    id: "linkedin",
    type: "file",
    label: "LinkedIn",
    icon: "/doc-icons/link.svg",
    iconBg: "icon-bg-link",
    action: {
      type: "external",
      url: "https://www.linkedin.com/in/pavansalunkhe17/",
    },
  },
  {
    id: "email",
    type: "file",
    label: "Email",
    icon: "/doc-icons/mail.svg",
    iconBg: "icon-bg-mail",
    action: { type: "external", url: "mailto:pavansalunkhe17@gmail.com" },
  },
  {
    id: "calendar",
    type: "file",
    label: "Calendar",
    icon: "/doc-icons/calender.svg",
    iconBg: "icon-bg-calendar",
    action: { type: "external", url: "https://calendar.google.com" },
  },
];

const FOLDER_MAP = {
  documents: { label: "Documents", items: DOCUMENTS_ITEMS },
  projects: { label: "Projects", items: PROJECTS_ITEMS },
  media: { label: "Media", items: MEDIA_ITEMS },
  links: { label: "Links", items: LINKS_ITEMS },
};

const SIDEBAR_ITEMS = [
  { id: "documents", label: "Documents", icon: "/doc-icons/folder.svg" },
  { id: "projects", label: "Projects", icon: "/doc-icons/folder.svg" },
  { id: "media", label: "Media", icon: "/doc-icons/folder.svg" },
];

function Finder({ windowName, setwindowState, startFolder = "documents" }) {
  const [currentFolder, setCurrentFolder] = useState(startFolder);
  const [selectedItem, setSelectedItem] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([startFolder]);

  // Sync when startFolder changes (user double-clicks a different desktop folder)
  useEffect(() => {
    setCurrentFolder(startFolder);
    setBreadcrumb([startFolder]);
    setSelectedItem(null);
  }, [startFolder]);

  const folderData = FOLDER_MAP[currentFolder];

  const handleNavigate = (folderId) => {
    setCurrentFolder(folderId);
    setSelectedItem(null);

    // Top-level folders reset breadcrumb, sub-folders append
    const isTopLevel = SIDEBAR_ITEMS.some((s) => s.id === folderId);
    if (isTopLevel) {
      setBreadcrumb([folderId]);
    } else {
      setBreadcrumb((prev) => [...prev, folderId]);
    }
  };

  const handleItemAction = (item) => {
    const { action } = item;
    switch (action.type) {
      case "window":
        setwindowState((state) => ({ ...state, [action.window]: true }));
        break;
      case "navigate":
        handleNavigate(action.folder);
        break;
      case "external":
        window.open(action.url, "_blank");
        break;
      default:
        break;
    }
  };

  const handleGoBack = () => {
    if (breadcrumb.length > 1) {
      const newBreadcrumb = breadcrumb.slice(0, -1);
      setBreadcrumb(newBreadcrumb);
      setCurrentFolder(newBreadcrumb[newBreadcrumb.length - 1]);
      setSelectedItem(null);
    }
  };

  return (
    <MacWindow
      windowName={windowName}
      setwindowState={setwindowState}
      title={`📁 ${folderData.label}`}
    >
      <div className="finder-window">
        {/* Sidebar */}
        <aside className="finder-sidebar">
          <div className="sidebar-section">
            <p className="sidebar-heading">Favorites</p>
            {SIDEBAR_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`sidebar-item ${
                  currentFolder === item.id ? "active" : ""
                }`}
                onClick={() => handleNavigate(item.id)}
              >
                <img src={item.icon} alt="" className="sidebar-icon" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="finder-main">
          {/* Breadcrumb / Path bar */}
          <div className="finder-pathbar">
            {breadcrumb.length > 1 && (
              <button className="back-btn" onClick={handleGoBack}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12L6 8L10 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <div className="breadcrumb-trail">
              {breadcrumb.map((crumb, index) => (
                <span key={crumb} className="breadcrumb-item">
                  {index > 0 && (
                    <span className="breadcrumb-sep">&nbsp;›&nbsp;</span>
                  )}
                  <span
                    className={`breadcrumb-label ${
                      index === breadcrumb.length - 1 ? "current" : ""
                    }`}
                    onClick={() => {
                      if (index < breadcrumb.length - 1) {
                        const newBreadcrumb = breadcrumb.slice(0, index + 1);
                        setBreadcrumb(newBreadcrumb);
                        setCurrentFolder(crumb);
                        setSelectedItem(null);
                      }
                    }}
                  >
                    {FOLDER_MAP[crumb]?.label || crumb}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div
            className="finder-grid"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedItem(null);
            }}
          >
            {folderData.items.map((item) => (
              <div
                key={item.id}
                className={`finder-item ${
                  selectedItem === item.id ? "selected" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(item.id);
                }}
                onDoubleClick={() => handleItemAction(item)}
              >
                <div className={`finder-item-icon ${item.iconBg}`}>
                  <img src={item.icon} alt={item.label} draggable={false} />
                </div>
                <span className="finder-item-label">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div className="finder-statusbar">
            <span>{folderData.items.length} items</span>
          </div>
        </div>
      </div>
    </MacWindow>
  );
}

export default Finder;
