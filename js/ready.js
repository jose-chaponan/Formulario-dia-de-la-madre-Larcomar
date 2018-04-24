function opciones(){
    var w_opciones = $(".opciones").width();
    $(".opciones").css({
        "height": w_opciones
    })
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

    opciones();

    $(window).on("resize", function () { 
        opciones();
    });

});
