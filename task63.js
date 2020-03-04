"use strict";// ok , но не совпадает длинна строк !!!
//var arr = [];
var strNum = "| Numbers: ";
var str = "| No numbers: ";
var tmp;
var k  = 0;
var table = "+-----------------+---------------------+\n| Исходная строка | Обработанная строка | \n+-----------------+---------------------+\n";

while(true){
	tmp = prompt("Введите строку", "'end' for end");
	var n = tmp.length;
			
		if(tmp == "end") {
			break;
		}
		else{
		k++;
			for(var i = 0; i < n; i++){

				if (tmp.charCodeAt(i) >= 48 && tmp.charCodeAt(i) <= 57){
					var tmp1 = strNum.concat(tmp, "\t", "|","\n+-----------------+---------------------+\n");
					//arr.push(tmp1);
					break;
				}

				else if (tmp.charCodeAt(n - 1) < 48 && i == n - 1 || tmp.charCodeAt(n - 1) > 57 && i == n - 1){
					tmp1 = str.concat(tmp, "\t","|", "\n+-----------------+---------------------+\n");
					//arr.push(tmp1);
					break;
				}			

			};
				/*var space = " ";
				 space.length = tmp1.length - tmp.length;*/
				var table  = table.concat("|", tmp," \t", tmp1);
			
		}	
		
		
};			
//console.log(arr);			
console.log(table);			
		
		
		
	
	

//var k = getNumber();
//k();
/*
while(true){
	var tmp = prompt("Введите строку", "'end' for end");
		//var n = tmp.length;
		
		if(tmp !== "end") {
			for(var i = 0; i < tmp.length; i++){
				//var n = tmp.length;
				console.log(tmp.charCodeAt(i));
				console.log(i);
				if (tmp.charCodeAt(i) >= 48 && tmp.charCodeAt(i) <= 57){
					tmp = strNum.concat(tmp);
					arr.push(tmp);
					break;
				}

				else if (tmp.charCodeAt(tmp.length - 1) < 48 || tmp.charCodeAt(tmp.length - 1) > 57){
					tmp = str.concat(tmp);
					arr.push(tmp);
					break;
				}			

			}
			
		//arr.push(tmp);
		}
		else{
			break;
		}
	
	
};*/

/*function add(value){
	
	return value + " _";
}*/
//var arr1 = arr.map(add);
//var arr2 = arr1.join(" ");// из мас в строку


//console.log(arr2);

/*var tmpAlone = tmp.split("");// массив
	console.log(tmpAlone);
	var tmpNum = [];*/

//tmpNum = parseInt(tmpAlone);
	//console.log(tmpNum);
	
	/*for(var i = 0; i < tmpAlone.length; i++){
		tmpNum [i] = parseInt(tmpAlone[i]);
		//console.log(tmpNum [i]);
		
		if(tmpNum[i] % 2 == 0 || tmpNum[i] % 2 == 1){
			function add(value){
				return "Number" + value + "_обр";
			}
		var arr1 = tmpNum.map(add);	*/
			
			
			//tmpAlone.join(" ");
			//typeof tmpNum[i] === "number" && !isNaN(tmpNum[i])// не раб
			/*function addNumber(value){
			return "Number" + value;
			}
		var arrPlusNumber = tmpAlone.map(addNumber);*/
		//var arrPlusNumber = tmpNum.map(addNumber);
			
			//console.log(arrPlusNumber[i]);
			
	//}
	//console.log(arrPlusNumber);

/*function newNumber (value){
		console.log(arrPlusNumber[i]);
	}
	arrPlusNumber.forEach(newNumber);*/
	
	//var res = arrPlusNumber.join("");
	//console.log(res);

//var number;
/*
function newNumber (value){
	if(arr[i] % 2 == 0 || arr[i] % 2 == 1){
			function addNumber(value){
			return "Number" + value;
			}
		var arrPlusNumber = tmpAlone.map(addNumber);
}
var arrPlusNumber = tmpAlone.map(addNumber);

arr1.forEach(newNumber);
*/

//console.log(number);

/*if(typeof tmpNum == "number"){
		console.log(1);
		
	}*/
	/*if(number in tmpNum){// не раб
		console.log(2);
	}*/
	
	/*
function num(value){
	if(parseInt(arr){
		console.log(1);
	}
}
arr.forEach(num);
*/