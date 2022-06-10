const DELAY_IN_MS = 3000;
const VIDEO_LENGTH_IN_MS = 20000;

const VIDEO_HTML_STRING =
  "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://github.com/SebasKote/BroRoll/blob/main/Broroll.webm' type='video/webm'><source src='https://github.com/SebasKote/BroRoll/blob/main/Broroll.mp4' type='video/mp4'></video>";

function broroll() {
  setTimeout(() => {
    const body = document.body;
    body.innerHTML = VIDEO_HTML_STRING;
    body.style.backgroundColor = "black";
    setTimeout(() => {
      // Wait 20 seconds for cena to finish
      window.location.replace(document.URL);
    }, VIDEO_LENGTH_IN_MS);
  }, DELAY_IN_MS);
}

const chance = Math.floor(Math.random() * 100);
if (chance === 69) {
  broroll();
}