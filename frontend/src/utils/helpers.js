
//2022-01-02T20:39:09.254Z
const formatDate = (date) => {
    const d = new Date(date)
    return d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + " " +
    d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2);
}

export default formatDate;