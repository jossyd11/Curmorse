async function initApp() {
    try {
        const response = await fetch('https://ppvcwr2z13.execute-api.us-east-1.amazonaws.com/prod/topics');
        const topics = await response.json();
        
        const container = document.getElementById('topics');
        container.innerHTML = '';
        
        topics.forEach((topic, index) => {
            const card = document.createElement('div');
            card.className = `bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg`;
            card.innerHTML = `
                <div class="flex items-center mb-2">
                    <span class="text-blue-500 font-bold mr-2">#${index + 1}</span>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${topic.title}</h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${topic.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">${topic.category}</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">🔥 ${topic.engagementScore}</span>
                </div>
            `;
            container.appendChild(card);
        });
        
        document.getElementById('loader').style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
    }
}

Telegram.WebApp.ready();
initApp();
