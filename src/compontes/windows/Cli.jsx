import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

function Cli({ windowName, setwindowState }) {
  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
            about: {
              description: "Display information about me.",
              usage: "about",
              fn: () => "Hi, I'm Pavan Salunkhe, a passionate software developer with experience in web development, React, and more.",
            },
            projects: {
              description: "List my projects.",
              usage: "projects",
              fn: () => "1. MacOS Portfolio - A React-based portfolio mimicking macOS interface.\n2. CLI Terminal - Interactive terminal component.\n3. Other projects coming soon...",
            },
            skills: {
              description: "List my technical skills.",
              usage: "skills",
              fn: () => "Languages: JavaScript, Python, Java\nFrameworks: React, Node.js, Express\nTools: Git, VS Code, Docker",
            },
            contact: {
              description: "Display contact information.",
              usage: "contact",
              fn: () => "Email: pavan@example.com\nLinkedIn: linkedin.com/in/pavan\nGitHub: github.com/pavan",
            },
           
          }}
          welcomeMessage={"Welcome to Pavan's Portfolio CLI! Type 'help' to see available commands."}
          promptLabel={"pavansalunkhe:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
}

export default Cli;
