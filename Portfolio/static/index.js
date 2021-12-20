
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button1').addEventListener('click',() => showmore('button1')),
    document.querySelector('#button2').addEventListener('click',() => showmore('button2'))
   
});

function vertical()
{
    const nav = document.getElementById("myTopnav");
    
     if (nav.classList.contains("responsive")) 
     {
        
        nav.classList.remove("responsive");
        console.log("remove");
        
     } 
    else if(nav.classList.contains("responsive") === false)
    {
        
        nav.classList.add("responsive");
        console.log("add");
    }
}

function showmore(tagname)
{
    var eventvariable = document.getElementById(`${tagname}`).innerHTML;
    console.log(eventvariable);
    if ( eventvariable === 'Read More')
    {
        document.getElementById(`${tagname}`).innerHTML = 'Read Less';
        var nextelement = document.getElementById(`${tagname}`).previousElementSibling;
        nextelement.style.display = 'block';
    }
    else
    {
        document.getElementById(`${tagname}`).innerHTML = 'Read More';
        var nextelement = document.getElementById(`${tagname}`).previousElementSibling;
        nextelement.style.display = 'none';
    }
   
}

window.onscroll = function()
{
    stick()
};
var nav = document.getElementById('myTopnav');
var navtop = nav.offsetTop;
function stick()
{
    console.log(navtop);
    if (window.pageYOffset >= navtop)
    {
        nav.classList.add("sticky-top");
        
    }
    else
    {
        nav.classList.remove("sticky-top");
    }
      
}
    