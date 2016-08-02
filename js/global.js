/*!
 * PATRICK
 * GTI 01/08/2016
 */
 $(document).ready(function(){


 	 $('.menu').addClass('animated bounceIn');
 	 $('.logomarca-brand').addClass('animated bounceInLeft');
 	/*====LEFT BAR TOGGLE====*/
	$(function() {

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
	});
	initMap();

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
