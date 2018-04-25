<?php
    include_once("conexion.php");

    $txtrespuesta   = $_POST["txtrespuesta1"];
    $txtnombres     = $_POST["txtnombres"];
    $txtapellidos   = $_POST["txtapellidos"];
    $txtfecha_nac   = $_POST["txtfecha_nac"];
    $txtemail       = $_POST["txtemail"];
    $txtdistrito    = $_POST["txtdistrito"];
    $selsexo        = $_POST["selsexo"];

    $sql = $PDO -> prepare("INSERT INTO sorteo_madre_2018( nombres, apellidos, fecha_nac, email, distrito, sexo, respuesta ) VALUES ( :nombres, :apellidos, :fecha_nac, :email, :distrito, :sexo, :respuesta )");

    $sql->bindParam(":nombres", $txtnombres);
    $sql->bindParam(":apellidos", $txtapellidos);
    $sql->bindParam(":fecha_nac", $txtfecha_nac);
    $sql->bindParam(":email", $txtemail);
    $sql->bindParam(":distrito", $txtdistrito);
    $sql->bindParam(":sexo", $selsexo);
    $sql->bindParam(":respuesta", $txtrespuesta);
    $sql->execute();

    echo "listo";
?>