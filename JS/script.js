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
