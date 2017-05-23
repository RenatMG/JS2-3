'use strict';
var color = '#F0F8FF #979CA0 sdsd: 32dcd2 sddsdss  ,#97A4A0';
color = color.match(/#[A-F0-9]{6}/g);
console.log(color);


var number = '1.5 0 12. h  g 445  g 0.05 123.4fg.';
number = number.match(/\d+(\.\d+)?/g); //([0-9]+(\.([0-9])+)?)
number = number.filter(function (number) {
    return number > 0;
});
console.log(number);


var time = 'scs15-29d 29-15fs5sd d29:555sd21-45 15-12 - d 23^0 23:00 155d 14 12-59 13-60';
time = time.match(/(2[0-3]|[0-1]?[0-9])\:([0-5][0-9])|(2[0-3]|[0-1]?[0-9])\-([0-5][0-9])/g);
console.log(time);

var desk = 's-d  *D1sfs a3 ff g6 ddf3dI9=';
desk = desk.toUpperCase();
desk = desk.match(/[A-H][1-8]/g);
console.log(desk);

function check() {
    var phoneNumberInput = document.getElementById('phoneNumberInput');
    var phoneNumberData = phoneNumberInput.value;
    var phonePattern = /\+\d\(\d{3}\)\-\d{3}\-\d{2}-\d{2}/;

    var mailInput = document.getElementById('mailInput');
    var mailData = mailInput.value;
    var mailPattern = /\w+\@\w+\.\w+/i;
    
    var passportInput = document.getElementById('passportInput');
    var passportData = passportInput.value;
    var passportPattern = /\d{4}\s\d{6}/;
    
    function setInputBackground(input,data,pattern){
        if (pattern.test(data) == false) {
        input.style.background = 'red';
    } else input.style.background = 'green';
    }
    setInputBackground(phoneNumberInput,phoneNumberData,phonePattern);
    setInputBackground(mailInput,mailData,mailPattern);
    setInputBackground(passportInput,passportData,passportPattern);
}
document.getElementById('check').onclick = check;
