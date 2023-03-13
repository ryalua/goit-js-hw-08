import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME_PLAIED_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeSeved, 1000));

function timeSeved(event) {
    let secondsPlaied = event.seconds;
    localStorage.setItem(TIME_PLAIED_KEY, secondsPlaied);
}   
const plaiedCurrentTime = localStorage.getItem(TIME_PLAIED_KEY);

if (plaiedCurrentTime) {
    player.setCurrentTime(plaiedCurrentTime);
}
 