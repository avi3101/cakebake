
var x=document.getElementsByClassName("p1");
var i=0;
for(var i=0;i<16;++i)
{
x[i].addEventListener("click",function()
{
    alert("your order is placed");
});
}

var b=document.getElementsByClassName("btn1");

b[0].addEventListener("click",function()
{
    if(!i)
    {
        var dis=document.getElementById("more");
        dis.style.display="inline";
        var but=document.getElementsByClassName("btn1");
        but[0].innerHTML="View less";
        i=1;
    }
    else{
        var dis=document.getElementById("more");
        dis.style.display="none";
        var but=document.getElementsByClassName("btn1");
        but[0].innerHTML="View more";
        i=0;
    }

})

