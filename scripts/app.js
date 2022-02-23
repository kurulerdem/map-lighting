   function initMap(){

    // Map options
    var options = {
      zoom:12,
      center:{lat:41.25344387164387,lng:28.744995739223135}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

  

    // Array of markers
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    var items= {};
     var markers = [

      { 
        coords:{lat:41.24786777906994,lng:28.748613897439128},
        iconImage:'recr.png',
        content:'<h3>s04 EL01 R</h3><br><b>Durum: Down</b>'
      },
      {
        
        coords:{lat:41.247770734729855,lng:28.748737494647912},
        content:'<h3>S00 - Linye 18</h3><br><b>Durum: Down</b>',
        iconImage:'recr.png'
      },
      {
        
        coords:{lat:41.247688201299106,lng:28.74908684975283},
        content:'<h3>S00 - Linye 19</h3><br><b>Durum: Down</b>',
        iconImage:'recr.png'
      }
    ];

    result = xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var a = JSON.parse(this.responseText); 
        for(let i=0; i<a.length;i++){
          markers.push({
          name: a[i]['substation_name'],
          content:"<h3> "+ a[i]['substation_name'] +"</h3><br><b>Durum: Down</b>",
          coords:{lat:a[i]['position'][0],lng:a[i]['position'][1]},
          iconImage:a[i]['icon']
          })
        }
        
      }
    });
    
    xhr.open("GET", "http://localhost:3000/devices");
    
    xhr.send();
    obh = {erdem:'kurul',year:'1994'};
    markers.push(obh);
    console.log(markers);
    // Loop through markers
    for(var i = 0;i < markers.length;i++){
      // Add marker
      addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
      });

      // Check for customicon
      if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      // Check content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
    }
  }




