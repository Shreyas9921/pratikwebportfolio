//Date function

const currentDate = new Date();

//Format the date
// const options = { year: "numeric", month: "short", day: "2-digit"};
// const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(currentDate);
//Format to add ordinal suffix to day

function addOrdinalSuffix(day) {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
        case 1 : return day + 'st';
        case 2 : return day + 'nd';
        case 3 : return day + 'rd';
        default : return day + 'th';
    }
}

//Extract day, month and year
const day = addOrdinalSuffix(currentDate.getDate());
const month = currentDate.toLocaleString('default', {month: 'short'});
const year = currentDate.getFullYear();

// Concatenate the formatted date
const formattedDateString = `${day} ${month}, ${year}`;

export default formattedDateString;