import React from "react";
import githunData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss"

function Github({windowName,setwindowState}) {
  const GitCard = ({
    data = {
      id: 1,
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: "",
    },
  }) => {
    return (
      <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="tags">
          {data.tags.map((tag) => (
            <p className="tag">{tag}</p>
          ))}
        </div>
        <div className="urls">
          <a href={data.repoLink}>Respositry</a>
          {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
      </div>
    );
  };

  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState}>
      <div className="cards">
        {githunData.map((projects) => {
          return <GitCard data={projects} />;
        })}
      </div>
    </MacWindow>
  );
}

export default Github;
