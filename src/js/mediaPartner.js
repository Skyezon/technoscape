
class  MediaPartner {
    constructor() {
        this.initMediaPartner()
    }
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    initMediaPartner(){
        const mediaPartnerContainer = document.getElementById(`sponsor-list-media-partner`)
        const images = this.importAll(require.context('../assets/logo/media_partners', false, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
        const keys = Object.keys(images)

        keys.forEach((key,i) => {
            mediaPartnerContainer.innerHTML += `
            <img src="${images[key]['default']}" alt="${key}" />
        `
        })
    }
}

export default MediaPartner;

