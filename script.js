var colorIsChanged = false;

function clickedButton()
{
    if(!colorIsChanged)
    {
        document.getElementById('list').style.backgroundColor = "darkred";
        document.getElementById('button').innerHTML = "Lighten Color";
        colorIsChanged = true;
    }
    else
    {
        document.getElementById('list').style.backgroundColor = "#ff8b73";
        document.getElementById('button').innerHTML = "Darken Color";
        colorIsChanged = false;
    }
}