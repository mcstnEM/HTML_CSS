function makeResizable() {
    const resizableElements = document.querySelectorAll('.resizable');

    resizableElements.forEach(el => {

        el.style.border = 'red solid 2px';

        let isResizing = false;

        const handleMouseDown = (e) => {
            // Commence le redimensionnement
            isResizing = true
            e.currentTarget.style.cursor = 'grabbing';
        }

        const handleMouseMove = (e) => {
            if (isResizing) {
                // Calcule la nouvelle taille
                const width = e.clientX - el.getBoundingClientRect().left;
                const height = e.clientY - el.getBoundingClientRect().top;
                el.style.width = width + 'px';
                el.style.height = height + 'px';
            }
        };

        el.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);

        document.addEventListener('mouseup', function(e) {
            // Arrête le redimensionnement
            isResizing = false;
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            el.style.cursor = 'grab';
        });
    });
}

// Appeler la fonction pour activer le redimensionnement
makeResizable();
  