//работает. 

/*[1, 2, 2, 2, 3, 3, 4]
итерация 1 - 1, 2
итерация 2 - 2, 2 => удалить одну 2 и счетчик--
итерация 3 - 2, 2 => удалить одну 2 и счетчик--
итерация 4 - 2, 3
...*/

"use strict"
var a = [1, -3, -3, -3, -3, -3, 5, 6, 6, 8, 8, 10];
var n = a.length;//


for (var i = 0; i < a.length; i++){ // Max, поиграйся с длиной
	if(a[i] == a[i + 1]){
		a.splice(i, 1); //
		i--;
		//arr[i] = a[i + 1];
		
	} 
	/*else {
		arr[i] = a[i];
	}*/
	
	
}
/*function condition(value){
	return value != null;
}

var newArr = a.filter(condition);
console.log(newArr);// [1, -3, 5, 6, 8, 10]
*/
console.log(a);// [1, -3, 5, 6, 8, 10]





/*Array95. Дан целочисленный массив размера N. Удалить из массива все соседние одинаковые элементы, оставив их первые вхождения.*/ 