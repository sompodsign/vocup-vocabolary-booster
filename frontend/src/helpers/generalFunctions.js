export const pluralize = (num, text) => {
    console.log(text)
    let newNum = Number(num);
    if (newNum === 1) {
        return `${newNum} ${text}`;
    } else {
        return `${newNum} ${text}s`;
    }
}
