
import Time from "../../../components/Time";
import "./pageOne.scss";
import UrlLogo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const UrlBackground =
  "https://player.vimeo.com/video/661908910?&amp;autoplay=1&amp;background=1&amp;loop=1&amp;byline=0&amp;title=0";

const PageOne = () => {
  const BackgroundVideo = () => (
    <div className="BackgroundVideo">
      <iframe className="Back" src={UrlBackground} title="bg-video" />
    </div>
  );

  return (
    <div className="page-one">
      <div className="page-one-content">
        <div className="inner-content">
          <BackgroundVideo />
          <div className="first_">
            <div className="md-text">
              <div className="logo">
                <img src={UrlLogo} alt="logo" />
              </div>
              <br />
              LOOK
              <br />
              CREATIVELY.
            </div>
            <div className="portfolio">
              <Link to="/works">
                <div className="contents">
                  VIEW WORK<p className="hoverContents"></p>
                </div>
              </Link>
            </div>
            <div className="time-text">
              <div>Time is our only limitation.</div>
              <span className="time-num">
                <Time />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
