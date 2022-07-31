function zakat(){
    let goatZakat=document.getElementById('goatzakat').value;
    let results;
     
    if (goatZakat >=400)
    {
        results ="4 Goats";

    }
    else if (goatZakat>=201)
{
    results ="3 Goats";
}

else if (goatZakat>=121)
{
    results ="2 Goats";
}

else if (goatZakat>=40)
{
    results ="1 Goats";
}


else if (goatZakat>=1)
{
    results ="no Zakat";
}



    document.getElementById('result').innerText=results;
}