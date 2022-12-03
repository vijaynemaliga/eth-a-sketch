let box=document.getElementsByClassName("main");
let size=document.getElementById("size");
let  button=document.getElementsByClassName("create");
let remove =document.getElementById("remove");
var count=0;
button[0].addEventListener('click',()=>{
  var div = document.createElement("div");
  var btn= document.createElement("button");
  var value=parseInt(size.value);


  div.style.padding="0px";
  div.style.margin="0px";
  div.style.height=value+"px";
  div.style.width=value*value+"px";
  div.style.backgroundColor="white";


  btn.className ="small";
  btn.style.width=value+"px";
  btn.style.height=value+"px";
  btn.style.margin="0px";
  btn.style.padding="0px";
  btn.style.borderColor="white";
  btn.style.borderRadius="0px";
  btn.style.borderWidth="0px";
  btn.style.backgroundColor="grey";


  box[0].style.width=value*value+"px";
  box[0].style.height=value*value+"px";
   
    for(let i=1;i<=value;i++)
      div.appendChild(btn.cloneNode(true));
    for(let i=1;i<=value;i++)
      box[0].appendChild(div.cloneNode(true));

 let x=document.getElementsByClassName("small");
  console.log(x.length);
   for(let i=0;i<x.length;i++)
  {
    x[i].addEventListener('mouseover',(e)=>{
     if(e.target.style.backgroundColor=="black")
     e.target.style.backgroundColor="grey";
     else
     e.target.style.backgroundColor="black";
    })
  }
})

remove.addEventListener("click",()=>{
   while(box[0].firstChild)
   box[0].removeChild(box[0].firstChild);
   box[0].style.width="0px";
   box[0].style.height="0px";
})