'use strict';

//1)    Напишите регулярное выражение для поиска HTML-цвета,
//		заданного как #ABCDEF, то есть # и содержит затем 6 шестнадцатеричных символов.

function task1() {
	var color = '#F0F8FF #979CA0 sdsd: 32dcd2 sddsdss  ,#97A4A0';
	color = color.match(/#[A-F0-9]{6}|#[A-F0-9]{3}/ig);
	console.log(color);
	document.getElementById('answer1').innerHTML = color;
}
document.getElementById('task1').onclick = task1;


//2)    Создайте регэксп, который ищет все положительные числа, 
//		в том числе и с десятичной точкой. Например, var str = "1.5 0 12. 123.4."

function task2() {
	var number = '1.5 0 12. h  g 445  g 0.05 123.4fg.';
	number = number.match(/\d+(\.\d+)?/g); //([0-9]+(\.([0-9])+)?)
	number = number.filter(function (number) {
		return number > 0;
	});
	console.log(number);
	document.getElementById('answer2').innerHTML = number;
}
document.getElementById('task2').onclick = task2;

//3)	Время может быть в формате часы:минуты или часы-минуты. 
//		И часы и минуты состоят из двух цифр, например 09:00, 21-30. 
//		Напишите регулярное выражение для поиска времени

function task3() {
	var time = 'scs15-29d 29-15fs5sd d29:555sd21-45 15-12 - d 23^0 23:00 155d 14 12-59 13-60';
	time = time.match(/(2[0-3]|[0-1]?[0-9])\:([0-5][0-9])|(2[0-3]|[0-1]?[0-9])\-([0-5][0-9])/g);
	console.log(time);
	document.getElementById('answer3').innerHTML = time;
}
document.getElementById('task3').onclick = task3;

//4)	Написать проверку правильности координаты в файле инициализации 
//		шахматной доски c помощью регулярного выражения. Он должен иметь формат вида A6.

function task4() {
	var desk = 's-d  *D1sfs a3 ff g6 ddf3dI9=';
	desk = desk.toUpperCase();
	desk = desk.match(/[A-H][1-8]/g);
	console.log(desk);
	document.getElementById('answer4').innerHTML = desk;
}
document.getElementById('task4').onclick = task4;

//5)    Написать регулярные выражения для следующих сущностей: номер телефона в формате
//		+7(965)-123-45-67, email, серии и номера паспорта.
//		Применить написанные регулярные выражения необходимо для валидации произвольной формы,
//		в которой обязательно должны присутствовать описанные выше поля.
//		Поля, которые проходят валидацию подсветить зеленым, остальные – красным.

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

	function setInputBackground(input, data, pattern) {
		if (pattern.test(data) == false) {
			input.style.background = 'red';
		} else input.style.background = 'green';
	}
	setInputBackground(phoneNumberInput, phoneNumberData, phonePattern);
	setInputBackground(mailInput, mailData, mailPattern);
	setInputBackground(passportInput, passportData, passportPattern);
}
document.getElementById('check').onclick = check;
