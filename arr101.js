// ok
"use strict"
var arr = [6, -3, -3, 4, 5, 6, 7, 7, 9, 8];//
var n = arr.length;//10
var k = 4;


for(var i = arr.length-1; i >= k; i--){
	
	arr[i + 1] = arr[i]; 
	
}
arr[k] = 0;

for(var j = 0; j <= arr.length; j++){
console.log(arr[j]);

}



/*Array101. Дан массив размера N и целое число K (1≤K ≤N). Перед элементом массива с порядковым номером K вставить новый элемент с нулевым значением.*/