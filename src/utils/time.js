export function getTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `${year}-${month}-${date}T${hours}-${minutes}-${seconds}`
}

export function makeDate(date) {
    // 20230808
    const year = parseInt(date.slice(0, 4));
    const month = parseInt(date.slice(4, 6));
    const day = parseInt(date.slice(6, 8));

    return `${year}. ${month}. ${day}.`
}