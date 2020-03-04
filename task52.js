// !!! // 1) если правильные ввели индексы - ок, 2) Если нет -  NaN

"use strict"
var arr = [0, 1, 2, 5, 10];//5
var n = arr.length;
var first; 
var second;


function sumSliceArray(arr, first, second){
	if(typeof first != "number" || isNaN(first) || 0 > first ||  first >= n - 1){
		throw new Error("Извини, ошибочка вышла!")
	}
	if(typeof second != "number" || isNaN(second) || 0 >= second || second > n - 1){
		throw new Error("Извини, ошибочка вышла!")
	}
	return arr[first] + arr[second];
}
 


function customCall(arr, f, s) {
   // твой код
   if(typeof f != "number" || isNaN(f) || 0 > f ||  f >= n - 1){
		return false;
	}
	if(typeof s != "number" || isNaN(s) || 0 >= s || s > n - 1){
		return false;//second = s;
	}
	else {
		
   
	
   
		return sumSliceArray(arr, f, s);
   }
}

var custom = customCall(arr, -5, 2);// false или прав. ответ
console.log(custom);