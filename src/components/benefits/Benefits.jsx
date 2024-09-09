import "./benefits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faFileLines, faMusic } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <>
      <div className="benefits">
        <h2 className="h2-benefits">How it works</h2>

        <div className="container-cards">
          <div className="card">
            <FontAwesomeIcon icon={faPen} className="icon" />
            <p>
              Step 1:
              <br /> Enter the prompt you wish to use
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faFileLines} className="icon" />
            <p>
              Step 2: <br /> The AI processes it and provides lyrics
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faMusic} className="icon" />
            <p>
              Step 3: <br />
              Transform those lyrics into music
            </p>
          </div>
        </div>
        <div className="container-image">
          <img src="/src/assets/app.png" className="image-app" />
        </div>
        <h3>
          Transform your sound with AI
          <br /> create the perfect playlist <br />
          for every moment!
        </h3>
      </div>
    </>
  );
};

export default Benefits;
