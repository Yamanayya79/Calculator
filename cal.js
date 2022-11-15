let screen = document.getElementById('screen');
let screenValue = '';
buttons = document.querySelectorAll('button');
del = document.querySelector('btn btn-clear');

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    // document.getElementById("test").innerHTML;
    // document.getElementById("test").innerHTML;

    function back() {
      var screen = document.getElementById("C").value;
      document.getElementById("d").value = value.substr(0, value.length - 1);
    }
    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == 'AC') {
      screenValue = " ";
      screen.value = screenValue;

    }
    else if (buttonText == '=') {
      screenValue = eval(screenValue);
      screen.value = screenValue;

    }
    else if (buttonText == 'C') {
      screenValue = eval(screenValue);
     //  screen.value = screenValue;
     str = str.substr(0,str.length-1);
    

    }
 
    else {
      screenValue += buttonText;
      screen.value = screenValue;

    }

    del.addEventListener('click', function(e){
      screen.value ="";
    })

  })
}