function initMap() {

    let latitud = Number(document.querySelector('#latitud').value);
    let longitud = Number(document.querySelector('#longitud').value);
    let opciones = {
        zoom: 7,
        center: { lat: latitud, lng: longitud }
    }

    let mapa = new google.maps.Map(document.getElementById('mapa'), opciones);
    let markerMapa = new google.maps.Marker({
        position: new google.maps.LatLng(latitud, longitud),
        map: mapa,
        draggable: true,
        icon: "img/favicon.ico",
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(markerMapa, 'dragend', function () {
        latitudPoint = markerMapa.getPosition().lat();
        longitudPoint = markerMapa.getPosition().lng();
        localStorage.setItem('latitudPoint',latitudPoint);
        localStorage.setItem('longitudPoint',longitudPoint);
    });
}