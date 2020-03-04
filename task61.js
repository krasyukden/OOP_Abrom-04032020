"use strict";
// ок 
var rectangle = {
	name: "rectangle",
	points: {
	x1: 2,
	y1: -3,
	x2: 5,
	y2: 1,
	},
	display: function(){
		console.log(rectangle.x1, rectangle.y1, rectangle.x2, rectangle.y2);// раб
	},
	
	toString: function(){
		//return this.display();//undefined
		return "Data: " + "x1 = " + this.points.x1 + "; x2 = " + this.points.x2 + "; y1 = " + this.points.y1 + "; y2 = " + this.points.y2;// Max, надо вернуть строку
		//return rectangle.display(); раб
		//return String(this.points.x1,this.points.x2);вывод последнего
		//return (this.x1, this.y1); вывод последнего
		//return this.x1; //раб
		//return this.y1; не  выводит
	},
	
	
	valueOf: function(){
		
		return (Math.abs(this.points.x2) - Math.abs(this.points.x1)) * 2 + (Math.abs(this.points.y1) - Math.abs(this.points.y2)) * 2; // модуль		
	}
	
};
/*var newArr = rectangle.points.map(
		function(value){
			return String(value);
		}
)*/


//console.log(String(rectangle.display()));// не строки выводит
console.log(String(rectangle));//Data: x1 = 2; x2 = 5; y1 = -3; y2 = 1
console.log(Number(rectangle)); //10
//console.log(newArr);
//rectangle.display();

/*Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния. Метод valueOf() должен возвращать текущий периметр.*/

