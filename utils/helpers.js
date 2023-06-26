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
