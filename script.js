function processData(name, email, date, time) {
    var name = document.getElementById(name).value;
    var email = document.getElementById(email).value;
    var date = document.getElementById(date).value;
    var time = document.getElementById(time).value;

    alert( name + " your appoiment is for: " + "\n" + date + " at: " + time + "\n" + "Confirmation email has been send to:" + "\n" + email);

}