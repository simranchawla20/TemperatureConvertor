const convertTemp=()=>{
    const numbertemp=document.getElementById('temp').value;

    const unitselect=document.getElementById('unitselect');

    const unit=unitselect.options[unitselect.selectedIndex].value;

    const celToFah=(numbertemp)=>{
        let fahrn=Math.round((numbertemp*9/5)+32);
        return fahrn;
    }
    const fahToCel=(numbertemp)=>{
        let celc=Math.round((numbertemp-32)*5/9);
        return celc;
    }

    let result;
    if(unit=='cel')
    {
        result =celToFah(numbertemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`;
    }else{
        result =fahToCel(numbertemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celcius`;
    }
}