document.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('portfolio');
            data.sections.sort((a, b) => a.order - b.order);
            
            data.sections.forEach(section => {
                const sectionElement = document.createElement('section');
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = section.title;
                sectionElement.appendChild(titleElement);
                
                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = section.description;
                sectionElement.appendChild(descriptionElement);
                
                fetch(`${section.folder}/config.json`)
                    .then(response => response.json())
                    .then(imagesData => {
                        imagesData.images.forEach(image => {
                            const imgElement = document.createElement('img');
                            imgElement.src = `${section.folder}/${image.file}`;
                            imgElement.alt = image.name;
                            sectionElement.appendChild(imgElement);
                        });
                    });

                container.appendChild(sectionElement);
            });
        })
        .catch(error => console.error('Error loading config:', error));
});
