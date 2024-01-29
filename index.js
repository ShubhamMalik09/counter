let count=document.querySelector("#count");
function add(){
    let a=parseInt(count.innerText);
    a=a+1;
    count.innerText=a;
}

function sub(){
    let a=parseInt(count.innerText);
    if(a>0)
        a=a-1;
    count.innerText=a;
}