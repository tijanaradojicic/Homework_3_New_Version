var d = document.getElementById("description");
var f = document.getElementById("faq");
var x = document.getElementsByClassName("image");
var elements = document.getElementsByTagName("*");
var body = document.getElementsByTagName("body");
document.onkeydown = checkKey;
d.addEventListener("click",function(){
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "none";
})

f.addEventListener("click",function(){
  document.getElementById("div2").style.display = "block";
  document.getElementById("div1").style.display = "none";
})

var count;

document.getElementById("close").addEventListener("click", function(){
  document.getElementById("galery").style.display = "none";
})

x[0].addEventListener("click",function(){
  document.getElementById("galery").style.display = "block";
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  count = 1;
})

x[1].addEventListener("click",function(){
  document.getElementById("galery").style.display = "block";
  document.getElementById("two").style.display = "block";
  document.getElementById("one").style.display = "none";
  count = 2;
})

document.getElementById("prev").addEventListener("click", function(){
  if(count==1)
  {
    document.getElementById("two").style.display = "block";
    document.getElementById("one").style.display = "none";
    count = 2;
  }
  else if(count==2)
  {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    count = 1;
  }
})

document.getElementById("next").addEventListener("click", function(){
  if(count==1)
  {
    document.getElementById("two").style.display = "block";
    document.getElementById("one").style.display = "none";
    count = 2;
  }
  else if(count==2)
  {
    document.getElementById("one").style.display = "block";
    document.getElementById("two").style.display = "none";
    count = 1;
  }
})

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '37') {
    if(count==1)
    {
      document.getElementById("two").style.display = "block";
      document.getElementById("one").style.display = "none";
      count = 2;
    }
    else if(count==2)
    {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "none";
      count = 1;
    }
  }
  else if (e.keyCode == '39') {
    if(count==1)
    {
      document.getElementById("two").style.display = "block";
      document.getElementById("one").style.display = "none";
      count = 2;
    }
    else if(count==2)
    {
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "none";
      count = 1;
    }
  }

}








