import "bootstrap";
import WOW from 'wowjs/dist/wow'
import ModalVideo from "modal-video/lib/core";

new ModalVideo('.video-modal',{
    channel : 'youtube'
})

const wow = new WOW.WOW({
    live : false,
    animateClass : 'animate__animated'

});
wow.init()

