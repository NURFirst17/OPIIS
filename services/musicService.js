const axios = require('axios');

exports.searchMusic = async (userPrompt) => {
    try {
        // Отправляем запрос к Spotify API для поиска треков по запросу пользователя
        const spotifyResponse = await axios.get('https://api.spotify.com/v1/search', {
            headers: { Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}` },
            params: { q: userPrompt, type: 'track', limit: 5 }
        });

        if (!spotifyResponse.data.tracks || !spotifyResponse.data.tracks.items) {
            throw new Error("Spotify не вернул треки");
        }

        // Формируем массив треков с embed URL для встроенного плеера Spotify
        const tracks = spotifyResponse.data.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artists: track.artists,
            embed_url: `https://open.spotify.com/embed/track/${track.id}`
        }));

        return tracks;
    } catch (error) {
        throw new Error("Ошибка при поиске треков в Spotify: " + error.message);
    }
};
