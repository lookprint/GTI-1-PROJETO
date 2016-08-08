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
  $(".left-toggle").click(function() {
     if($('.menu-flutuante').css("display")=="none"){
      $('.menu-flutuante').css("display", "block");
    } else {
      $('.menu-flutuante').css("display", "none");
    }
  });

   $('body').click(function() {
    if($('.menu-flutuante').css("display")=="block"){
      $('.menu-flutuante').css("display", "none");
    }
  });
initMap();
initMap2();

 });

 /*===== MAPS ==== */

   
 function initMap(){
    var latlng = new google.maps.LatLng(-3.7685316,-38.5132985);
    var draggable = false;
    var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1f4887"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1c2336"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#32394d"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#352525"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#272f44"}]},{"featureType":"poi.place_of_worship","elementType":"geometry","stylers":[{"hue":"#ff0000"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#1c2336"},{"lightness":-37}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1d3354"}]}],
    draggable: draggable,
    styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}],
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
    var latlng = new google.maps.LatLng(-3.7446394,-38.5749513);
    var draggable = true;
    var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   styles: [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"off"},{"saturation":50},{"gamma":1},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}],
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
   
  };



  var map = new google.maps.Map(document.getElementById("map2"), myOptions);

  var image = 'img/mapicon.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: -3.745, lng: -38.578}, 
    map: map,
    icon: image
  });


}



