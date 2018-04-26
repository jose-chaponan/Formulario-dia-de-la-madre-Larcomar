var interval = null;
function opciones( classTag ){
    var w_opciones = $("."+classTag).width();
    $("."+classTag).css({
        "height": w_opciones
    });
}

var close_modal_larcomar = function () {
    $(".overflow").addClass('fadeOutoverflow');
    $(".modal").addClass('fadeOutmodal');

    setTimeout(function () {
        $(".overflow").removeClass('fadeOutoverflow fadeInoverflow');
        $(".modal").removeClass('fadeOutmodal fadeInmodal');
    }, 500);
};

function acciones() {
    $(".content").animate({
            "opacity": 1
        }, 300, function () {
            var success_frm = $("#success_frm").val();
            if (success_frm != "") {
                switch (success_frm) {
                    case "listo":
                    $(".content").delay(1500).animate({
                            "opacity": 0
                        }, 300,
                        function () {
                            $("#titulo_mensaje").html("GRACIAS POR PARTICIPAR");
                            $("#mensaje").html("Mucha suerte");
                            $(".content").delay(500).animate({
                                "opacity": 1
                            }, 300);
                        });
                        clearInterval(interval);
                    break;
                    case "existes":
                        $("#titulo_mensaje").html("YA TE ENCUENTRAS REGISTRADO");
                        $("#mensaje").html("Gracias por llenar su información");
                        $(".content").delay(500).animate({
                            "opacity": 1
                        }, 300);
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                        clearInterval(interval);
                    break;
                    case "emailexiste":
                        $("#formulario").find(".enviar").prop("disabled", false);
                        $("#titulo_mensaje").html("EL EMAIL YA SE ENCUENTRA REGISTRADO");
                        $("#mensaje").html("Por favor, intente con otra cuenta de email ");
                        $(".content").delay(500).animate({
                            "opacity": 1
                        }, 300, function () {
                            $("#success_frm").val("");
                            setTimeout(() => {
                               close_modal_larcomar(); 
                            }, 3000);
                        });
                        clearInterval(interval);
                }
            }
    });
}

$( document ).ready( function() {
    $("#respuesta1").on( 'keyup', function(){
        var respuesta = $(this).val();
        $("#txtrespuesta1").val(respuesta);
    });

    // Validación de respuesta
    $(".siguiente").on('click', function () {
        var respuesta1 = $("#respuesta1").val();
        if (respuesta1 == ""){
            $(".vista1").addClass("shake");
            setTimeout(function(){
                $(".vistas").removeClass("shake");
            }, 1000);
        }
        else{
            $(".vistas").removeClass("active_vistas");
            $(".vista2").addClass("active_vistas");
        }
    });

    opciones("opciones");
    opciones("premios");

    $(window).on("resize", function () { 
        opciones("opciones");
        opciones("premios");
    });

    $('.slider_img').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        speed: 2000
    });

    $("#formulario").on("submit", function(){
        event.preventDefault();
        $(this).find(".enviar").prop("disabled", true);
        $("#titulo_mensaje").html("Espere por favor...");
        $("#mensaje").html("");
        interval = setInterval(function () {
            acciones();
        }, 2000);
    });

    // var restau = false;
    // var tienda = false;
    // var teatro = false;

    // $(".opciones").on("click", function(){ 
    //     var category = $(this).data("title");
    //     if (category == "Restaurantes"){
    //         if(restau){
    //             $(".restaurante").val("no");
    //             $(this).removeClass("opcion_activa");
    //             restau = false;
    //         }
    //         else{
    //             $(".restaurante").val("si");
    //             $(this).addClass("opcion_activa");
    //             restau = true;
    //         }
    //     }
    //     if (category == "Tiendas") {
    //         if (tienda) {
    //             $(".tiendas").val("no");
    //             $(this).removeClass("opcion_activa");
    //             tienda = false;
    //         }
    //         else{
    //             $(".tiendas").val("si");
    //             $(this).addClass("opcion_activa");
    //             tienda = true;
    //         }
    //     }
    //     if (category == "Teatro") {
    //         if (teatro) {
    //             $(".teatro").val("no");
    //             $(this).removeClass("opcion_activa");
    //             teatro = false;
    //         }
    //         else{
    //             $(".teatro").val("si");
    //             $(this).addClass("opcion_activa");
    //             teatro = true;
    //         }
    //     }
    // });


});
