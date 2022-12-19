var division = document.createElement("div")
division.setAttribute("class","container")
document.body.append(division)

var table = document.createElement("table")

var row1 = document.createElement("tr")
row1.innerHTML=`<input type="text" id="output">` 

var row2 = document.createElement("tr")
row2.innerHTML=`<td><button onclick="display('1')">1</button>
                    <button onclick="display('2')">2</button>
                    <button onclick="display('3')">3</button>
                    <button onclick="display('%')">%</button>
                    <button onclick="clr()">AC</button></td>`

var row3 = document.createElement("tr")
row3.innerHTML=` <td><button onclick="display('4')">4</button>
                     <button onclick="display('5')">5</button>
                     <button onclick="display('6')">6</button>
                     <button onclick="display('*')">*</button>
                     <button onclick="display('+')" id="foo">+</button></td>`

var row4 =document.createElement("tr")
row4.innerHTML=` <td><button onclick="display('7')">7</button>
                     <button onclick="display('8')">8</button>
                     <button onclick="display('9')">9</button>
                     <button onclick="display('/')">/</button></td>`

var row5 =document.createElement("tr")
row5.innerHTML=` <td><button onclick="display('.')">.</button>
                     <button onclick="display('0')">0</button>
                     <button onclick="display('-')">-</button>
                     <button onclick="Calculate()">=</button>
                     <button onclick="del()">Del</button></td>`


table.append(row1,row2,row3,row4,row5)
division.append(table)


 var res=document.getElementById("output");

 function display(num) {
    res.value += num
 }
  display(num)

 function clr(){
    res.value=""
 }
  clr()

 function del(){
    res.value=res.value.slice(0,-1)
}
  del()

 function Calculate(){
   try{
     res.value = eval(res.value)
  }
   catch(err){
     alert("invalid")
  }


  }Calculate()