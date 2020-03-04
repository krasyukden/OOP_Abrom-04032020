//ok
"use strict"
var arr = [6, 1, -3, 4, 5, 6, 7, 10, 9, 8];//
var n = arr.length;//10


for(var i = 0; i < n; i+=2){
	console.log(i);
	arr[n + i] = arr[i + 1];
	arr[i + 1] = arr[i];
	
}
var arr = arr.filter(function(value){
	return value != "empty";
});

console.log(arr);
/*Array106. Дан массив размера N. Продублировать в нем элементы с четными номерами (2, 4, ...). Условный оператор не использовать.*/ 