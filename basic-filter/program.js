function getShortMessages(messages) {
    return messages.filter((m) => {
        if (m.message.length < 50)
            return m.message;
    }).map((fm) => fm.message);
}

module.exports = getShortMessages