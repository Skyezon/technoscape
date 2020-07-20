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
        const dateIcon = new Image();
        dateIcon.src = DateIcon;
        dateIcon.alt = "date-icon"
         dateIcon.classList.add("mr-3");

        eventData.forEach((data,index) => {
            const {normalHeader,wierdHeader,time,paragraph,link,image} = data;
            eventInside.innerHTML +=`
            <div class="row position-relative event-row py-5 d-flex" id="event-inside-${index}">
                <div class="col-lg-6 pl-5">
                    <div class="font-headline-1 position-relative d-flex flex-column">
                        <span> ${normalHeader} </span>
                        <span class="font-shadowline" id="shadowline-${index}"><span class="font-shadowline-before"></span>${wierdHeader}<span class="font-shadowline-after"></span></span>
                    </div>
                    <div class="font-caption my-3 d-flex align-items-center" id="timing-${index}"></div>
                    <div class="font-caption my-3 d-flex align-items-center"><img src="${DateIcon}" alt="date-icon" class="mr-3">${time}</div>
                    <div id="event-paragraph-${index}"></div>
                    <div class="position-relative d-flex">
                        <a class="my-5 d-flex align-items-center event-link font-button" href="${link}">Visit the web <img src="${ExternalLink}" class="ml-3" alt="external-link-icon" /> </div></a>
                    </div>
                    <div class="col-lg-6 position-relative  d-flex justify-content-center" id="event-image-container-${index}">
                    <img src="${image}" alt="image-event" class="img-event" />
                </div>
                <img id="mesh-${index}" src="${Mesh}" class="img-mesh" alt="img-mesh" />
                </div>
            </div>
        `
            const fontWierd = document.getElementById(`shadowline-${index}`)
            $(`#shadowline-${index} > span`).text(fontWierd.innerText)
            $(`#shadowline-${index} > p`).text(fontWierd.innerText)
            if (index % 2 != 0){
                document.getElementById(`event-inside-${index}`).classList.add('flex-row-reverse')
                document.getElementById(`mesh-${index}`).style.right = '22rem'
            }
            paragraph.forEach((data) => {
                const text = this.paragraphGenerator(data);
                document.getElementById(`event-paragraph-${index}`).innerHTML += text;
            })

        })
    }
}

export default EventGenerator;