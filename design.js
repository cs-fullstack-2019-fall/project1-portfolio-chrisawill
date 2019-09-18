window.onscroll = function ()
{
    scrolll()
};
var line = document.getElementById(line);
var sticky = head.offsetTop;
function scrolll()
{
    if (window.pageYOffset > sticky)
    {
        line.classList.add(sticky);
    }
    else
    {
        line.classList.remove(sticky);
    }
}