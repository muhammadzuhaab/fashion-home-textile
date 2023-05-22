const PRODUCT_MODAL = window.document.getElementById('product-modal');
const BUTTONS = window.document.getElementsByTagName('button');

const MODAL_DATA = {
    Sheets: {
        name: 'Sheets',
        image: '../img/Sheets.jpg',
        line1: '100% Cotton',
        line2: 'CVC 60% Cotton/40% Polyester.',
        line3: 'PC 48% Cotton/52% Polyester.',
        line4: '100% Bamboo.'
    },
    Windows: {
        name: 'Windows',
        image: '../img/Window.jpg',
        line1: '100% Cotton Duck fabric curtains.',
        line2: '100% Cotton Full Panama fabric curtains.',
        line3: '150-300GSM 100% Polyester Curtains.',
        line4: '100% Polyester Jacquard curtains.'
    },
    Pillows: {
        name: 'Pillows',
        image: '../img/Pillows.jpg',
        line1: '100% Cotton.',
        line2: 'CVC 60% Cotton/40% Polyester.',
        line3: 'PC 48% Cotton/52% Polyester.',
        line4: '100% Bamboo.'
    },
    Blankets: {
        name: 'Blankets',
        image: '../img/Blanket.jpg',
        line1: '300-450GSM Waffle weave Thermal Blankets.',
        line2: '240-450GSM Coral Fleece Blankets.',
        line3: '240-450GSM flannel fleece Blankets.',
        line4: '240-450GSM Plush Blankets.'
    },
    Throws: {
        name: 'Throws',
        image: '../img/Throws.jpg',
        line1: '400-650 GSM 100% Cotton Bath Towels',
        line2: '300-650 GSM 100% Cotton Gym Towels',
        line3: '400-650 GSM 100% Cotton Hand Towels',
        line4: '350-500 GSM 100% Cotton Face Cloths'
    },
    Bath: {
        name: 'Bath Items',
        image: '../img/BathItem.jpg',
        line1: '400-650 GSM 100% Cotton Bath Towels',
        line2: '300-500 GSM Poly Cotton Bath Towels',
        line3: '400-650 GSM 100% Cotton Hand Towels',
        line4: '350-500 GSM 100% Cotton Face Cloths'
    },
    Kitchen: {
        name: 'Kitchen Accessories',
        image: '../img/KitchenAccesories.jpg',
        line1: 'Dish Drying Mats.',
        line2: 'Oven Mitts.',
        line3: 'Dining Table Covers.',
        line4: 'Kitchen Towel.'
    },
    FashionBedding: {
        name: 'Fashion Bedding',
        image: '../img/FashionBedding.jpg',
        line1: '100% Cotton Plain Comforter sets.',
        line2: 'Microfiber Comforter sets.',
        line3: '100% Cotton Stripe White Comforter sets.',
        line4: 'Poly Cotton White Comforter sets.'
    }
};

const CARD_BUTTONS = Object.values(BUTTONS).filter((element) => {
    if (element.getAttribute('data-product') === 'btn') {
        return element;
    }
});

CARD_BUTTONS.forEach((element) => {
    element.addEventListener('click', () => {
        let key = element.getAttribute('data-product-name');
        document.getElementById('modal-img').setAttribute('src', (MODAL_DATA[key].image));
        document.getElementById('modal-title').innerText = MODAL_DATA[key].name;
        document.getElementById('modal-heading').innerText = MODAL_DATA[key].name;
        document.getElementById('modal-line-1').innerText = MODAL_DATA[key].line1;
        document.getElementById('modal-line-2').innerText = MODAL_DATA[key].line2;
        document.getElementById('modal-line-3').innerText = MODAL_DATA[key].line3;
        document.getElementById('modal-line-4').innerText = MODAL_DATA[key].line4;

        PRODUCT_MODAL.classList.remove('hidden');
        PRODUCT_MODAL.classList.add('flex');
    });
});

const closeModal = () => {
    PRODUCT_MODAL.classList.add('hidden');
    PRODUCT_MODAL.classList.remove('flex');
}
