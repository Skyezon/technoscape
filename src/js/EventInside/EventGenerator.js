import DateIcon from "../../assets/icon/date.svg";
import ExternalLink from "../../assets/icon/external_link.svg"
import Mesh from "../../assets/rec_pattern.svg"
import $ from "jquery"

class EventGenerator {

    constructor(eventData) {
        this.initEvent(eventData);
    }

     paragraphGenerator(data) {
        return `<p class="font-caption">${data}</p>`
    }

     initEvent (eventData)  {
        const eventInside = document.getElementById("event-inside");

        eventData.forEach((data,index) => {
            const {normalHeader,wierdHeader,time,paragraph,link,image} = data;
            eventInside.innerHTML +=`
            <div class="row position-relative event-row py-5 px-lg-5 d-flex" id="event-inside-${index}">
                <div class="col-lg-6 pl-lg-5 ">
                    <div class="font-headline-1 position-relative d-flex flex-column wow" id="event-heading-${index}">
                        <span> ${normalHeader} </span>
                        <span class="font-shadowline" id="shadowline-${index}"><span class="font-shadowline-before"></span>${wierdHeader}<span class="font-shadowline-after"></span></span>
                    </div>
                    <div class="font-caption my-3 d-flex align-items-center wow" id="timing-${index}"><img src="${DateIcon}" alt="date-icon" class="mr-3">${time}</div>
                    <div id="event-paragraph-${index}" class="wow text-justify"></div>
                    <div class="position-relative d-flex wow" id="external-link-${index}">
                        <a class="my-5 d-flex align-items-center event-link font-button" href="${link}">Visit the web <img src="${ExternalLink}" class="ml-3" alt="external-link-icon" /> </div></a>
                    </div>
                    <div class="col-lg-6 position-relative  d-flex justify-content-center wow" id="event-image-container-${index}">
                    <img src="${image}" alt="image-even" class="img-event" />
                </div>
                <img id="mesh-${index}" src="${Mesh}" class="img-mesh" alt="img-mesh" />
                </div>
            </div>
        `
            const fontWierd = $(`#shadowline-${index}`)
            $(`#shadowline-${index} span`).text(fontWierd.text())
           const eventHeading = document.getElementById(`event-heading-${index}`)
            const eventImage = document.getElementById(`event-image-container-${index}`)
            const eventParagraph = document.getElementById(`event-paragraph-${index}`)
            const eventTime = document.getElementById(`timing-${index}`)
            const eventLink = document.getElementById(`external-link-${index}`)

            if (index % 2 != 0){
                document.getElementById(`event-inside-${index}`).classList.add('flex-row-reverse')
                document.getElementById(`mesh-${index}`).style.right = '22rem'
                eventHeading.classList.add('animate__fadeInRight')
                eventImage.classList.add('animate__fadeInLeft')
                eventParagraph.classList.add('animate__fadeInRight')
                eventTime.classList.add('animate__fadeInRight')
                eventLink.classList.add('animate__fadeInRight')
            }else{
                eventHeading.classList.add('animate__fadeInLeft')
                eventImage.classList.add('animate__fadeInRight')
                eventParagraph.classList.add('animate__fadeInLeft')
                eventTime.classList.add('animate__fadeInLeft')
                eventLink.classList.add('animate__fadeInLeft')

            }
            paragraph.forEach((data) => {
                const text = this.paragraphGenerator(data);
                document.getElementById(`event-paragraph-${index}`).innerHTML += text;
            })

        })
    }
}

export default EventGenerator;