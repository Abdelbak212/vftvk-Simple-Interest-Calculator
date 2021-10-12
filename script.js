function compute()
{
    var principal = parseFloat(this.principal.value);
    var years = parseFloat(this.years.value);
    var rate = parseFloat(this.rate.value);

    if (this.principal.value == '' || principal <= 0) {
        alert("Enter a positive number");
        this.principal.focus();
    }

    else {
        var interest = principal * rate * years / 100;
        var result = document.getElementById('result');
        result.innerHTML = "<br /><br />If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br>" + "You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + (new Date().getFullYear() + years) + "</mark>,<br />";
    }
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        