import moment from "moment";

export const formateDate = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 1000 * 60) {
        return "now";
    } else if (diff < 1000 * 60 * 60) {
        return `${Math.round(diff / (1000 * 60))} min ago`;
    } else if (diff < 1000 * 60 * 60 * 24) {
        return moment(date).format("h:mm A");
    }

    return moment(date).format("DD/MM/YY");
};

export const wrapEmojisInHtmlTag = (messageText) => {
    const regexEmoji = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu; // regex to match all Unicode emojis
    return messageText.replace(regexEmoji, (match) => {
        return `<span style="font-size:1.5em;margin:0 2px;position:relative;top:2px">${match}</span>`;
    });
};
