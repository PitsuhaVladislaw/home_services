let today = '';

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if(month > 1 && month < 10) {
    today = `${day}:0${month}:${year}`;
} else {
    today = `${day}:${month}:${year}`;
}

console.log(today);