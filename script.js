fetch('config.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title;
        document.getElementById('header-title').textContent = data.header;
        document.getElementById('header-subtitle').textContent = data.subheader;
        
        const content = document.getElementById('content');
        data.sections.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('glass');
            
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.title;
            sectionElement.appendChild(sectionTitle);
            
            const sectionContent = document.createElement('p');
            sectionContent.textContent = section.content;
            sectionElement.appendChild(sectionContent);
            
            content.appendChild(sectionElement);
        });

        document.getElementById('footer-text').textContent = data.footer;
    })
    .catch(error => console.error('Error fetching config:', error));
