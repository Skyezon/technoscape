import VirconImage from "../../assets/images/events_section/vircon_pic.png"
import HackImage from "../../assets/images/events_section/hackathon_pic.png"
import RthImage from "../../assets/images/events_section/rth_pic.png"
import LogoHack from "../../assets/logo/hackathon_logo.png"
const events = [
    {
        normalHeader: "Virtual",
        'wierdHeader' : "Conference",
        "time" : `11 <sup>th &nbsp;</sup> - &nbsp;13 <sup>th &nbsp;</sup>September 2020`,
        "paragraph" : [
            `Virtual Conference is a 3-day Webinar & Workshop series that will educate participants regarding <b>business</b>, <b>design</b>, and <b>technology</b>.`,
            "Participants will gain insights and skills which they can implement to solve problems in real-life and have a chance to interact with experts from the field.",
            "Participants may also be provided with digital merchandise and videos of the conference."
        ],
        'link' : "https://virtualconference.bncc.net", //https://devcamp mungkin
        "image" : VirconImage
    },
    {
        'normalHeader' : "Road to",
        'wierdHeader' : "Hackathon",
        "time" : `18<sup>th &nbsp;</sup>- &nbsp;30<sup>th &nbsp;</sup> September 2020`,
        "paragraph" : [
            `Road to BNCC Hackathon is a <b>weekly webinar series</b> which will talk about topics that are relevant in the IT field from notable speakers.`,
            `Road to Hackathon exists as a forum for people who want to develop their knowledge in technology and to interact with fellow technology enthusiasts.`
        ],
        'link' : "#", //https://devcamp mungkin
        "image" : RthImage
    },
    {
        'normalHeader' : `<img src="${LogoHack}" class="img-logo-hackathon " alt="logo"> Hackathon `,
        'wierdHeader' : "3.0",
        "time" : `10<sup>th &nbsp;</sup>- &nbsp;12<sup>th &nbsp;</sup> October 2020`,
        "paragraph" : [
            `Hackathon is a 48 hour coding competition which challenges its participants to create innovative applications or websites to solve real life problems. `,
            `Participants will have a chance to interact and gain insight from mentors in the business, technology, and design mentoring session.`
        ],
        'link' : "https://hackathon.bncc.net", //https://devcamp mungkin
        "image": HackImage
    }
]

export default events;