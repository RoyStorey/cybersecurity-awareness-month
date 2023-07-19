import Header from "../components/Header";
import "../css/styles.css";
import themePhoto from "../media/theme.png";
import Banner from "../components/Banner";

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
              participate, it is not limited to any particular shop. This
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
              in the "<a href="/themes">Theme Rules</a>" page.
            </p>
            <p class="description">
              The submitted demos will be posted in the Demos tab. You will also
              find the 'Submit Demo' button over there. The deadline for video
              submissions is 10/01/2023.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
