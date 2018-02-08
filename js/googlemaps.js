function initMap() {
    var nadZalewem = {
        lat: 50.017898,
        lng: 22.003553
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: nadZalewem,
        scrollwheel: false,
        cancelable: false

    });


    var marker = new google.maps.Marker({
        position: nadZalewem,
        map: map,
        icon: './marker2.png',

        draggable: true,
        animation: google.maps.Animation.BOUNCE


    });

}
