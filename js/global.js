/*!
 * PATRICK
 * GTI 01/08/2016
 */
 jQuery(document).ready(function($) {
    $('.counter').counterUp({
         delay: 10,
         time: 1200
    });
});

 $(document).ready(function(){
   $('.menup').addClass('animated bounceIn');
   $('.logomarca-brand').addClass('animated bounceInLeft');
   /*====LEFT BAR TOGGLE====*/
   $(".left-toggle").click(function() {
     if($('.menu-flutuante').css("display")=="none"){
      $('.menu-flutuante').css("display", "block");
    } else {
      $('.menu-flutuante').css("display", "none");
    }
  });

   $('.corpo').click(function() {
    if($('.menu-flutuante').css("display")=="block"){
      $('.menu-flutuante').css("display", "none");
    }
  });
   exibeDataHora('hora');
   initMap();
   initMap2();

 });

 /*===== MAPS ==== */
 function initMap(){
    var latlng = new google.maps.LatLng(-3.7685316,-38.5132985);
    var draggable = false;
    var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1f4887"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1c2336"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#32394d"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#352525"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#272f44"}]},{"featureType":"poi.place_of_worship","elementType":"geometry","stylers":[{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#1c2336"},{"lightness":-37}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1d3354"}]}],
    draggable: draggable,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
}
function exibeDataHora(div){
  var data = new Date();
  horas = data.getHours();
  minutos = data.getMinutes();
  segundos = data.getSeconds();
  //converte as horas, minutos e segundos para string
  str_horas = new String(horas);
  str_minutos = new String(minutos);
  str_segundos = new String(segundos);
  //se tiver menos que 2 digitos, acrescenta o 0
  if (str_horas.length < 2)
    str_horas = 0 + str_horas;
  if (str_minutos.length < 2)
    str_minutos = 0 + str_minutos;
  if (str_segundos.length < 2)
    str_segundos = 0 + str_segundos;

  data = str_horas + ':' + str_minutos + ':' + str_segundos;
  document.getElementById(div).innerHTML = data;
  setTimeout("exibeDataHora('hora')", 1000);
}

// tirar 80 de diferença
var $doc = $('html, body');
$("a").click(function() {
  $doc.animate({
    scrollTop: ($( $.attr(this, 'href') ).offset().top-80) 
  }, 500);
  return false;
});



 function initMap2(){
    var latlng = new google.maps.LatLng(-3.7685316,-38.5132985);
    var draggable = true;
    var myOptions = {
    zoom: 12,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:
      [
          {
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": 33
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "labels",
              "stylers": [
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "gamma": "0.75"
                  }
              ]
          },
          {
              "featureType": "administrative.neighborhood",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "lightness": "-37"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#f9f9f9"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "40"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "-37"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "100"
                  },
                  {
                      "weight": "2"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "80"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "0"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": "-4"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#c5dac6"
                  },
                  {
                      "visibility": "on"
                  },
                  {
                      "saturation": "-95"
                  },
                  {
                      "lightness": "62"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "gamma": "1.00"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "gamma": "0.50"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "gamma": "0.50"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#c5c6c6"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "lightness": "-13"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "lightness": "0"
                  },
                  {
                      "gamma": "1.09"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#e4d7c6"
                  },
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "47"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "lightness": "-12"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#fbfaf7"
                  },
                  {
                      "lightness": "77"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "lightness": "-5"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "saturation": "-100"
                  },
                  {
                      "lightness": "-15"
                  }
              ]
          },
          {
              "featureType": "transit.station.airport",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": "47"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#acbcc9"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "saturation": "53"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "lightness": "-42"
                  },
                  {
                      "saturation": "17"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "lightness": "61"
                  }
              ]
          }
      ],
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
   
  };
  var map = new google.maps.Map(document.getElementById("map2"), myOptions);
}

/*SCROOL
HOME - 295
SERVIÇO - 643
PLANOS - 1537
CONTATOS - 2321

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();



        $('section').each(function(i) {
         

           if($(this).position().top<=windscroll+80){
                $('nav a.active').removeClass('active');
                $('nav a').eq(1).addClass('active');
           } 
        });

 

}).scroll();*/