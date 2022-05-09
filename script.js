function removeCookie() {
    var element = document.querySelector('.cookieBox');
    element.remove();
    
}

function changeTemp() {
    var temp = document.getElementsByClassName('temp');
    var value = document.getElementById('tempUnitPicker').value;

    for(var i=0; i<temp.length; i++) {
        console.log('hello');
        if (value == "farenheit") {
            temp[i].innerText = Math.round((temp[i].innerText*1.8)+32);
    }
        else {
            temp[i].innerText = Math.round((temp[i].innerText-32)/1.8);

        }
    }
  
}
