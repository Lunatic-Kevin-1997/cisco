document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DE PESTAÑAS (Tabs)
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const informationSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab) {
        // Al hacer clic en la pestaña "Producto"
        productTab.addEventListener('click', () => {
            // Mostrar información, ocultar galería de imágenes
            informationSection.classList.remove('hidden');
            imagesSection.classList.add('hidden');

            // Estilos botón Activo (Producto)
            productTab.classList.remove('bg-gray-100', 'text-gray-700');
            productTab.classList.add('bg-blue-600', 'text-white');

            // Estilos botón Inactivo (Imágenes)
            imagesTab.classList.remove('bg-blue-600', 'text-white');
            imagesTab.classList.add('bg-gray-100', 'text-gray-700');
        });

        // Al hacer clic en la pestaña "Imágenes"
        imagesTab.addEventListener('click', () => {
            // Ocultar información, mostrar galería de imágenes
            informationSection.classList.add('hidden');
            imagesSection.remove('hidden'); // O de preferencia:
            imagesSection.classList.remove('hidden');

            // Estilos botón Activo (Imágenes)
            imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
            imagesTab.classList.add('bg-blue-600', 'text-white');

            // Estilos botón Inactivo (Producto)
            productTab.classList.remove('bg-blue-600', 'text-white');
            productTab.classList.add('bg-gray-100', 'text-gray-700');
        });
    }
});

// 2. INTERCAMBIO DE IMÁGENES (Miniaturas a Imagen Principal)
function toExchangeImage(element) {
    const mainImg = document.getElementById('img_main');
    if (mainImg && element) {
        mainImg.src = element.src;
        mainImg.alt = element.alt;
    }
}

// 3. CONTROL DEL MODAL (Zoom de imágenes)
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.classList.remove('hidden');
        // Bloquea el scroll de la página de fondo mientras el modal está abierto
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
        // Devuelve el scroll normal a la página
        document.body.style.overflow = 'auto';
    }
}

// Cerrar el modal también si el usuario presiona la tecla 'Escape'
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});