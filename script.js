<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discord Images</title>
</head>
<body>
    <div id="portfolio"></div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            fetchDiscordMessages();
        });

        async function fetchDiscordMessages() {
            // Replace with your channel ID
            const channelId = '1253006792116404314';
            const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxA1jJxodKp5ZGN3kK8RxS68pnVlgY8bCDKFHjSt4PZUw-l56FCTY0VJFqnJpYSNCMJSQ/exec';

            try {
                const response = await fetch(`${googleScriptUrl}?channelId=${channelId}`);
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
    </script>
</body>
</html>
