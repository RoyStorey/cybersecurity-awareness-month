import Header from "../components/Header";
import Banner from "../components/Banner";

function Themes() {
  const themeName = "Mobile Mayhem";
  return (
    <body>
      <div class="page-container">
        <div class="content-container">
          <div class="hero">
            <h1>Theme Rules: {themeName}</h1>
          </div>
          <Header />
          <div class="body-container">
            <p class="description">
              Located below are the rules of engagement for this year's
              cybersecurity awareness month demos. This year's theme, "
              {themeName}", has guidelines that are posted below. Furthermore,
              there will be rules posted below stating explicitly what is
              off-limits. The purpose for these rules are to ensure that all
              demos maintain good ethical practices, and are performed in
              accordance with the law.
            </p>
            <Banner />
            <div>
              <h2>Guidelines</h2>
              <ul>
                <li>Mobile Mayhem can relate to Cell-Phones.</li>
                <li>Mobile Mayhem can relate to Laptops.</li>
                <li>Mobile Mayhem can relate to Wearable Smart-devices.</li>
                <li>Mobile Mayhem can relate to War-Driving.</li>
                <li>Mobile Mayhem can relate to Public Transport.</li>
                <li>
                  Mobile Mayhem can relate to almost anything as long as it's
                  mobile.
                </li>
                <li>
                  Mobile Mayhem <b>cannot</b> relate to attacking servers with
                  your desktop computer.
                </li>
                <li>
                  Mobile Mayhem <b>cannot</b> relate to cloud-based attacks with
                  your desktop computer.
                </li>
                <li>
                  Mobile Mayhem <b>cannot</b> relate to OSINT... maybe
                </li>
              </ul>
              <h2>Rules</h2>
              <ul>
                <li>Maintain good ethical practices.</li>
                <li>Do not break the law.</li>
              </ul>
            </div>
            <p className="description">
              Enable to have your name in the hat for "Best Cyber
              Demonstration", please abide by these guidelines and rules! If
              your cyber demonstration doesn't neatly fall under the theme,{" "}
              {themeName}, or your demonstration is in a gray-zone of the theme,
              then give an explanation of how exactly you believe your
              demonstration follows the guidelines in the description of your
              submission.
            </p>
            <h2>Thank you.</h2>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Themes;
