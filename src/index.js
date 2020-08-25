import "./scss/main.scss"
import eventData from "./js/EventInside/EventConfig";
import EventGenerator from "./js/EventInside/EventGenerator";
import MediaPartner from "./js/mediaPartner";

const dir = './assets/logo/media_partners'


const eventGenerator = new EventGenerator(eventData);
const mediaPartner = new MediaPartner();