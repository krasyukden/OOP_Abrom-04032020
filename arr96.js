//  перенос уникальных числел  - ок, но в новый массив arr, не раб splice !!! 
"use strict"
var a = [1, -3, -3, -3, -3, -3, 5, 6, 5, -3, 8, 9, 8];
var n = a.length;//13
var arr = [];

for (var i = 0; i <= a.length; i++) { // Max, поиграйся с длиной
	
	for(var j = i + 1; j <= n; j++){
		if(a[i] == a[j]){ //&& a[i] != a[j + 1]){ // Max, a[i] != a[j + 1]
			//a.splice(j, 1);
			//continue;
			a[j]= null; // Max, это не удаление, удалять надо j-ый
			//continue;
		// не корректно раб !!!!!
		}
		/*else if(a[i] == a[j] && a[i] == a[j + 1]){
		
			a[i]= null;*/
			//a.splice(j, 1);	
		}
		
		//a.splice(j, 1);
	
	
	//console.log(a[i]);
}
	
function condition (value){
	return value != null;
}
var arr = a.filter(condition);


for (var k = 0; k < n; k++){
	console.log(arr[k]);
}


/*Array96. Дан целочисленный массив размера N. Удалить из массива все одинаковые элементы, оставив их первые вхождения. */