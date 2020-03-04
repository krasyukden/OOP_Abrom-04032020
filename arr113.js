//ok, но сортировка не относит последнего N !!!
"use strict"
var arr = [6, 8, -6, 4, -5, -3];//
var n = arr.length;//6
var tmp;

for(var j = 0; j < arr.length; j++){
	console.log(arr);//
	for(var i = arr.length; i > j; i--){	
	if (arr[i] <= arr[j]){	//&& i < arr.length/2)
			tmp = arr[j];
			arr[j] = arr[i];
			arr[i] = tmp;
		}
		
		
	}
	
	
}
console.log(arr);//ok

/*for(var j = 0; j < arr.length; j++){
	for(var i = 0; i < arr.length - j; i++){	
	if (arr[i] >= arr[arr.length - i]){	//&& i < arr.length/2)
			tmp = arr[n - i];
			arr[n - i] = arr[i];
			arr[i] = tmp;
		}
		
		
	}
	
	
}*/


/*Array113. Дан массив A размера N (≤6). Упорядочить его по возрастанию методом сортировки простым выбором: найти максимальный элемент массива и поменятьего местами с последним(N-м)элементом;выполнить описанные действия N−1 раз, каждый раз уменьшая на 1 количество анализируемых элементов и выводя содержимое массива. */