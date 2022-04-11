var balance = "10 000.00";

function displayBalance()
{
    alert('fired: f1');
    global = 1;
    alert('global changed to 1');
}

function f2()
{
    alert('fired f2');
    alert('value of global: '+global);
}