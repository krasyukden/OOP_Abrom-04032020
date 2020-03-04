// ok.  Почему 2 раза использовать new Date ???
"use strict";

/*var currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 2);*/ //OK

function addTwoDays(date){
	 var currentDate = new Date();
	 var res = new Date(currentDate.setDate(date));
	 return res;
	
	
	//return addDays = currentDate.setDate(date).toDateString();// не ф-ция
	
	/*addDays = currentDate.setDate(date);
	return "Date: " + addDays;*/
	
	/*addDays = d.setDate(date);// не ф-ия
	return addDays;*/
	
	//console.log(addDays);
	//var res = addDays.toDateString();// не ф-ция
	//return res;
}
console.log(addTwoDays(2));// Tue Feb 18 2020 16:37:03 GMT+0200 (Восточная Европа, стандартное время)

//console.log(res);// 1582036838077
//console.log(currentDate);// Tue Feb 18 2020 16:37:03 GMT+0200 (Восточная Европа, стандартное время)




/*addDays.toDateStr = function(){// 
	addDays.toDateString();
}*/

/*addDays.toDateStr = function(){
	return addDays.toDateString();
}*/

//addDays.toDateString();

//var res = addTwoDays(2);



//console.log(currentDate.toDateString());// 
//console.log(addDays.toDateStr());// ошибка не ф-ция