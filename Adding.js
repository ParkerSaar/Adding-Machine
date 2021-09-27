var sum = 0;
var count = 0;

function add(x)
{
  sum = sum + x;
  count = count + 1;
  print();
}
function print()
{
   document.getElementById("output").innerHTML = "The sum is " + sum + " <br> The count is " + count;
}
function clearit()
{
 document.getElementById("output").innerHTML = "";
 sum = 0;
 count = 0;
}
