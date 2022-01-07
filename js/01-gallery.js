import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

const markupRender = (items) => {
    return items.map(item => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>
    `).join('');
     
};

const markup = markupRender(galleryItems);

divRef.innerHTML = markup;

const instance = basicLightbox.create(`<img src="" alt="" width="800" height="600"/>`, { onShow: (instance) => { window.addEventListener('keydown', onEscClose) }, onClose: (instance) => { window.removeEventListener('keydown', onEscClose) } })


const onEscClose = e => {
    
    if (e.code === "Escape") {
        instance.close();
    }
}


const setModalSrc = url => instance.element().querySelector('img').src = url;
 

const onModalOpen = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
    const targetImg = e.target.dataset.source;
    setModalSrc(targetImg);
    instance.show();
    
}

divRef.addEventListener('click', onModalOpen);


