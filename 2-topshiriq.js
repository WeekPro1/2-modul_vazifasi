const weekDays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

function wichDay(number) {
    if (number > 7) {
        return "none";
    } else {
        return weekDays[number - 1];
    }
}

console.log(wichDay(8))