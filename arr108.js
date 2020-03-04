//ok
"use strict"
var arr = [6, 1, -3, 4, -5, -6, 7, 10, -9, 8];//
var n = arr.length;//10
var k = 0;

for(var j = 0; j < arr.length; j++){
	if(arr[j] >= 0){
		n ++;
		j++;
		console.log(j);	
		for(var i = n; i >= j - 1; i--){
	//console.log(i);	

		arr[i + 1] = arr[i];
		arr[i] = 0;
		}
	
	}	
}
/*for(var j = 0; j < arr.length; j++){
	if(arr[j] >= 0){
		k++;
		for(var i = n + k; i >= j; i--){
	//console.log(i);	

		arr[i + 1] = arr[i];
		arr[j] = 0;
		}
	
	}	
}*/	
console.log(arr);	
	

/*Array108. Дан массив размера N. Перед каждым положительным элементом массива вставить элемент с нулевым значением. */