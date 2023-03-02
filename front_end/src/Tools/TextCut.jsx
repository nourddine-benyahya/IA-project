export function divideText(text) {
    const words = text.split(" ");
    let subText = "";
    let subTexts = [];
    for (let i = 0; i < words.length; i++) {
        if (subText.length + words[i].length + 1 <= 230) {
            subText += words[i] + " ";
        } else {
            subTexts.push(subText);
            subText = words[i] + " ";
        }
    }
    subText=subText.replace(/\n\n/g, "")
    subTexts.push(subText);
    return subTexts;
}