document.addEventListener('DOMContentLoaded', () => {
    fetch('work/config.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('portfolio');
            data.sections.sort((a, b) => a.order - b.order);

            const loadSection = (section, images) => {
                const sectionElement = document.createElement('section');

                const titleElement = document.createElement('h2');
                titleElement.textContent = section.title;
                sectionElement.appendChild(titleElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = section.description;
                sectionElement.appendChild(descriptionElement);

                images.sort((a, b) => a.order - b.order);
                images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.url;
                    imgElement.alt = image.name;
                    imgElement.title = image.name;
                    sectionElement.appendChild(imgElement);
                });

                container.appendChild(sectionElement);
            };

            data.sections.forEach(section => {
                fetch(`work/${section.file}`)
                    .then(response => response.json())
                    .then(images => loadSection(section, images))
                    .catch(error => console.error('Error loading section:', error));
            });
        })
        .catch(error => console.error('Error loading config:', error));
});
