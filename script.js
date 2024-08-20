document.addEventListener('DOMContentLoaded', () => {
    fetchDiscordMessages();
});

async function fetchDiscordMessages() {
    // Replace with your channel ID
    const channelId = 'YOUR_CHANNEL_ID';
    // Replace with your Google Apps Script Web App URL
    const googleScriptUrl = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
    
    try {
        const response = await fetch(`${googleScriptUrl}?channelId=${channelId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const categories = await response.json();
        displayImages(categories);
        
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

function displayImages(categories) {
    const container = document.getElementById('portfolio');

    Object.keys(categories).forEach(categoryName => {
        const sectionElement = document.createElement('section');

        const titleElement = document.createElement('h2');
        titleElement.textContent = categoryName;
        sectionElement.appendChild(titleElement);

        categories[categoryName].forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = categoryName;
            imgElement.title = categoryName;
            sectionElement.appendChild(imgElement);
        });

        container.appendChild(sectionElement);
    });
}
