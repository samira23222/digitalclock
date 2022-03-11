function showDate() {
    var date = new Date();
    var h = date.getHours();
    var years = date.getFullYear();
    var mm = date.getMinutes();
    var m = date.getMonth();
    var days = date.getDate();
    var day = date.getDay();
    var s = date.getSeconds();
    var endOfDay;
    var session = "AM";


    if (m == 0){m = "January"};
    if (m == 1){m = "February"};
    if (m == 2){m = "March"};
    if (m == 3){m = "April"};
    if (m == 4){m = "May"};
    if (m == 5){m = "June"};
    if (m == 6){m = "July"};
    if (m == 7){m = "August"};
    if (m == 8){m = "September"};
    if (m == 9){m = "October"};
    if (m == 10){m = "November"};
    if (m == 11){m = "December"};


    if (day == 0){day = "Sunday"};
    if (day == 1){day = "Monday"};
    if (day == 2){day = "Tuesday"};
    if (day == 3){day = "Wednesday"};
    if (day == 4){day = "Thursday"};
    if (day == 5){day = "Friday"};
    if (day == 6){day = "Saturday"};

    if (days == 1){endOfDay = "st"};
    if (days == 2){endOfDay = "nd"};
    if (days == 3){endOfDay = "rd"};
    if (days == 21){endOfDay = "st"};
    if (days == 22){endOfDay = "nd"};
    if (days == 23){endOfDay = "rd"};
    if (days == 31){endOfDay = "st"};
    if (days > 3 || days < 21 || days > 23){endOfDay = "th"};
    days += endOfDay;

    document.getElementById("myDay").innerHTML = day + ", " + m + " " + days + ", " + years;



    /*Time logic */

    if (h >= 12) {

        session = "PM";
    }

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
    }
    
    h = (h < 10)? "0" + h : h;
    mm =(mm < 10)? "0" + mm : mm;
    s = (s < 10)? "0" + s : s;

    let time = `${h}:  ${mm}: ${s} ${session}`;

    document.getElementById("myClock").innerHTML = time;

    setTimeout(showDate, 1000);

}

showDate();