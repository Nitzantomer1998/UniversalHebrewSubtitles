import wizdomService from "../services/wizdomService.js";


const getSubtitlesList = async (imdbID, season, episode) => {
    const wizdomSubtitles = await wizdomService.fetchSubtitlesFromWizdom(imdbID, season, episode);
    const stremioSubtitles = wizdomService.mapSubtitlesToStremio(wizdomSubtitles);

    return stremioSubtitles;
};

const getSubtitleContent = async (subtitleID) => {
    const subtitleContent = await wizdomService.extractSubtitleFromWizdom(subtitleID);

    return subtitleContent;
};

const wizdomController = {
    getSubtitlesList,
    getSubtitleContent,
};


export default wizdomController;