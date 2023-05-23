const IMAGE_SLIDER = window.document.getElementById('image-slider');

const SLIDER_IMAGES = {
    0: '../img/home-bg-1.jpg',
    1: '../img/home-bg-2.jpg',
    2: '../img/home-bg-3.jpg',
}

const changeImg = async () => {

    const changeImage = new Promise((resolve) => {
        let current_img = IMAGE_SLIDER.getAttribute('src');
        if (current_img === "") {
            IMAGE_SLIDER.setAttribute('src', SLIDER_IMAGES[0]);
            resolve();
        }
        else {
            setTimeout(() => {
                if (current_img === SLIDER_IMAGES[0]) {
                    IMAGE_SLIDER.setAttribute('src', SLIDER_IMAGES[1]);
                    resolve();
                }
                else if (current_img === SLIDER_IMAGES[1]) {
                    IMAGE_SLIDER.setAttribute('src', SLIDER_IMAGES[2]);
                    resolve();
                }
                else if (current_img === SLIDER_IMAGES[2]) {
                    IMAGE_SLIDER.setAttribute('src', SLIDER_IMAGES[0]);
                    resolve();
                }
            }, 4000);
        }
    }).then(async () => {
        await changeImg();
    });
}

changeImg();
