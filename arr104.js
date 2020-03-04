//ok
"use strict"
var arr = [6, -3, -3, 4, 5, 6, 7, 7, 9, 8];//
var n = arr.length;//10
var k = 4;
var m = 3;


for(var i = arr.length-1; i >= k; i--){
	arr[i + m] = arr[i]; 
	
}
for(var j = k; j < k + m; j++){
	arr[j] = 0;
}
console.log(arr);



/*Array104. Дан массив размера N и два целых числа K и M (1 ≤ K ≤ N, 1 ≤ M ≤ 10). Перед элементом массива с номером K вставить M новых элементов с нулевыми значениями*/