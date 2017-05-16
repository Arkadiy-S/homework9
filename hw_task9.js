
// ДЗ  Задача 9. Выражение в польской инверсной записи ***
/* Ввести целочисленное выражение в польской инверсной записи, в котором могут содержаться разделённые пробелом целые числа и 4 знака арифметики: "+", "-", "*" и "/“. 
	Если выражение можно вычислить, вывести результат. В противном случае (синтаксическая ошибка, в стеке остался не один элемент, и т. п.) вывести ERROR.

	Input:8
	234 345 456 + + 5 /

	Output:
	207

*/
//"use strict";
 
function rpn(s) {

let i;
let arrS = s.split(" "); //массив для хранения исходной строки
let stack = []; // стек для обработки
let output = 0; // результат
let op1 = 0; // переменная для 1-го операнда
let op2 = 0; // переменная для 2-го операнда
let nTmp = 0; // переменная для 2-го операнда



//arrS.forEach(function(item) { // перебираем  символы исходной строки из массива arr
 for (i=0; i<arrS.length; i++) {
  // модуль анализа поступающих символов исходной строки из массива arr 
  let item = arrS[i]; 
  if (item == "") {
    output = "ERROR";
    stack.push(output);
    break;
  }
  if (!isNaN(item)) stack.push(+item)  //  если  "на вход"   поступает  число - заносится в стек
      else {
        switch (item) { //  если  "на вход"   поступает знак операции - производится вычисление
          case "+":
            //op1 = +stack.pop();
            //op2 = +stack.pop();
            //output = op1 + op2;
            nTmp = stack.pop();
            output = stack.pop() + nTmp;
            stack.push(output);
            //continue;
            break;
          case "-":
            nTmp = stack.pop();
            output = stack.pop() - nTmp;
            stack.push(output);
            //continue;
            break;
          case "*":
          nTmp = stack.pop();
            output = stack.pop() * nTmp;
            stack.push(output);
            //continue;
            break;
          case "/":
            nTmp = stack.pop();
            output = stack.pop() / nTmp;
            stack.push(output);
            //continue;
            break;
          default:
            output = "ERROR";
            stack.push(output);
        }
      }

 
};

output =  stack.pop();  
if ( stack.length != 0 ) {output = "ERROR";} // последовательность символов закончилась , стек не опустел     
return output; 
}

// Input: 234 345 456 + + 5 /
let s = "234 345 456 + + 5 /";
console.log("Output = " + rpn(s));