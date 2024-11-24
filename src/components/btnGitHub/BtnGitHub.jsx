import gitHubIcon from "../../img/icons/gitHub-black.svg";

const BtnGitHub = ({ link, appLink }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "15px" }}>
        <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
          <img src={gitHubIcon} alt="" />
          GitHub repo
        </a>
      </div>

      <div style={{ margin: "15px" }}>
        <a
          href={appLink}
          className="btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubIcon} alt="" />
          View Page
        </a>
      </div>
    </div>
  );
};

export default BtnGitHub;
