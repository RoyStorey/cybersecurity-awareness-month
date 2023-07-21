import Header from "../components/Header";
import "../css/styles.css";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <body>
      <div class="page-container">
        <div class="content-container">
          <div class="hero">
            <h1>October is Cybersecurity Awareness Month</h1>
          </div>
          <Header />
          <div class="body-container">
            <p class="description">
              <b>October is Cybersecurity Awareness Month.</b>
            </p>
            <p className="description">
              The 89th Communications Squadron MDT has an annual tradition of
              creating cybersecurity-related demonstration videos for
              cybersecurity awareness month. Starting in 2023, each year will
              have a different theme based in the <b>cybersecurity</b> realm.
              The purpose for the annual themes are to keep cybersecurity
              awareness month fresh and up-to-date with the latest trends in
              cybersecurity.
            </p>
            <p className="description">
              This event is open for anyone to post demonstrations and
              participate, it is not limited to any particular unit. This
              website is structured to be a board where participants can upload
              their cyber demonstrations with descriptions. At the end of
              October, the member with the most impressive cybersecurity
              demonstration will be granted some sort of <b>reward</b> (comp
              time, civ clothes day, 3d printed thing), tbd by probably Lt
              Leusink. Without further ado, let's reveal the theme!
            </p>
            <p>
              <b>This years theme is:</b>
            </p>
            <br />
            <br />
            <Banner />
            <br />
            <br />
            <p class="description">
              With great power comes great responsibility. In demonstrating your
              cyber capabilities, it's important to remember to practice good
              ethics. The <b>rules of engagement</b> for this theme are located
              in the "<Link to="/themes">Theme Rules</Link>" page.
            </p>
            <p class="description">
              All submitted demos will be posted in the "
              <Link to="/demos">Demos</Link>" tab. The order of videos is newest
              at the top and oldest at the bottom. The purpose of this is to let
              the fresh new videos get some sunlight.
            </p>
            <p class="description">
              To submit a demo, click on the "
              <Link to="/upload-demo">Upload Demo</Link>" button in the header.
              All videos should be original content, all copyrighted content
              will be disqualified from rankings and rewards. The ideal video
              length is between 2-6 minutes, depending on the complexity of the
              demonstration.
            </p>
            <p class="description">
              Demos are to be submitted prior to October 15th, 2023 @ 23:59. The
              reward ceremony will be held the following Friday, October 20th,
              2023. Location TBD. Here's to Cybersecurity!
            </p>
            <br />
            <br />
            <FontAwesomeIcon icon={faGlassCheers} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
