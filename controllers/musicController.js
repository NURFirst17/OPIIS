const musicService = require('../services/musicService');

exports.searchMusic = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Запрос (prompt) обязателен" });
        }
        console.log("Запрос от пользователя:", prompt);
        
        const tracks = await musicService.searchMusic(prompt);
        res.json(tracks);
    } catch (error) {
        console.error("Ошибка сервера:", error.message);
        res.status(500).json({ error: error.message });
    }
};
