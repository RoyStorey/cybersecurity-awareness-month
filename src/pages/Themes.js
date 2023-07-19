import Header from "../components/Header";
import themePhoto from "../media/theme.png";
import Banner from "../components/Banner";

function Themes() {
  return (
    <body>
      <div class="page-container">
        <div class="content-container">
          <div class="hero">
            <h1>Theme Rules: Phishy Business</h1>
          </div>
          <Header />
          <div class="body-container">
            <p class="description">
              For demonstrations, there needs to be set rules of engagement.
              Elsewise, we could go all malicious and stuff, and that's pretty
              not cool. Located below are the rules of engagement for this years
              cybersecurity awareness month challenge.
            </p>
            <Banner />
            <ul>
              <li>Rules of engagemnet go here.</li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Themes;
