export const pluralize = (num, text) => {

    let newNum = Number(num);
    if (newNum === 1) {
        return `${newNum} ${text}`;
    } else {
        return `${newNum} ${text}s`;
    }
}
