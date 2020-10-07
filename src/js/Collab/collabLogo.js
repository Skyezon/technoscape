import data from "./collab.config";
class CollabLogo {
    constructor() {
        this.initCollabLogo()
    }
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    initCollabLogo(){
        const mediaPartnerContainer = document.getElementById(`sponsor-list-collab`)
        const images = this.importAll(require.context('../../assets/logo/collaborators', false, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
        const keys = Object.keys(images)

        keys.forEach((key,i) => {
            mediaPartnerContainer.innerHTML += `
            <a href="${data[i].link}" rel="noopener noreferrer" target="_blank"><img src="${images[key]['default']}" alt="${key}" /></a>
           
        `
        })
    }
}

export default CollabLogo