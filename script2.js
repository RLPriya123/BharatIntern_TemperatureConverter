const convert=()=>{
    const inputTemp=document.getElementById('temp').value;
    const tempselected=document.getElementById('diff');
    const valueTemp=diff.options[tempselected.selectedIndex].value;
    const celToFah=(cel)=>{
        let fahrenheit=((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }

}