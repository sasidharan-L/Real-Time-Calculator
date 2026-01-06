 function Addition(){
            var  a = document.getElementById("number1").value
            var  b = document.getElementById("number2").value
            var add = parseInt(a)+parseInt(b)
            console.log("add")
            document.getElementById("output").innerHTML=add
        }
            function Subraction(){
            var  a = document.getElementById("number1").value
            var  b = document.getElementById("number2").value
            var sub = a-b
            console.log("sub")
            document.getElementById("output").innerHTML=sub
        }
          function Multiplication(){
            var  a = document.getElementById("number1").value
            var  b = document.getElementById("number2").value
            var mul = a*b
            console.log("mul")
            document.getElementById("output").innerHTML=mul
          }
            function Division(){
            var  a = document.getElementById("number1").value
            var  b = document.getElementById("number2").value
            var div = a/b
            console.log("div")
            document.getElementById("output").innerHTML=div
            }