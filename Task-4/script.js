function convert(){
    const temp = document.getElementById('temp').value;
    const ty = document.getElementById('type').value;
    if(ty == 'fah' )
    {
        var f = (temp*1.8)+32;
        document.getElementById('result').innerHTML=`= ${f}°Fahrenheit`;
    }
    else{
        var f= (temp*1) + 273.15;
        document.getElementById('result').innerHTML=`= ${f}°Kelvin`;
    }


}