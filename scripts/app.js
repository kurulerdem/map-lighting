var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var response = this.responseText;
    const ob = JSON.parse(response);
    ob.forEach(element => {
        console.log(element['substation_name']);
    });
    //document.getElementById('response').innerHTML = positions;

  }
});
xhr.open("GET", "http://localhost:3000/devices");
xhr.send();


