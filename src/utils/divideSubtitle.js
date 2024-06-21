const divideSubtitle = (text, maxLength = 10000) => {
    const words = text.split(" ");
    const chunks = [];
    let chunk = "";

    for (const word of words) {
        if (chunk.length + word.length < maxLength) chunk += (chunk.length ? " " : "") + word;
        else { chunks.push(chunk); chunk = word; }
    }

    if (chunk.length) chunks.push(chunk);

    return chunks;
};


export default divideSubtitle;