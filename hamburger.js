function toggleHamburger()
{
    var togler = document.getElementById("togler");
    togled = togler.getAttribute("aria-expanded");
    var isTrueSet = (togled == 'true');
    togler.setAttribute("aria-expanded", (!isTrueSet));
    if(!isTrueSet)
    {
        document.getElementById("navbarResponsive").style.display = "inline-block"
    }
    else
        document.getElementById("navbarResponsive").style.display = "none"
}