document.getElementById('searchMusic').addEventListener('click', async () => {
    const input = document.getElementById('musicInput').value;
    if (!input) return alert('Введите запрос');

    try {
        const response = await fetch('/music/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: input })
        });
        const tracks = await response.json();
        const tracksDiv = document.getElementById('tracks');
        tracksDiv.innerHTML = '';

        tracks.forEach(track => {
            const trackElement = document.createElement('div');
            trackElement.innerHTML = `
                <p><strong>${track.name}</strong> — ${track.artists.map(a => a.name).join(', ')}</p>
                <iframe
                    src="${track.embed_url}"
                    width="300"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            `;
            tracksDiv.appendChild(trackElement);
        });
    } catch (error) {
        console.error("Ошибка на клиенте:", error);
    }
});
