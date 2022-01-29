import Button from "./Button";
function Project({ title, text, demoURL, sourceURL, video, english }) {
  return (
    <div className="projects">
      <div className="left">
        <h3>{title}</h3>

        <p>{text}</p>
        <div className="buttons">
          <Button url={demoURL} text={english ? "SEE LIVE" : "DEMO"} color={"white"} />
          <a href={sourceURL} target="_blank" className="no-border-button">
            {english ? "Source code" : "Code source"}
          </a>
        </div>
      </div>
      <div className="right">
        <div className="backgroundvideocontainer">
          <video autoPlay muted loop playsinline className="video">
            <source src={video} type="video/mp4" />
            {english ? "Your browser doesn't support video" : "votre browser ne supporte pas la video"}
          </video>
        </div>
      </div>
    </div>
  );
}

export default Project;
