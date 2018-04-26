<?php
    include_once("conexion.php");

    $existe = 0;
    $existeEmail = 0;

    $txtrespuesta   = $_POST["txtrespuesta1"];
    $txtnombres     = $_POST["txtnombres"];
    $txtapellidos   = $_POST["txtapellidos"];
    $txtfecha_nac   = $_POST["txtfecha_nac"];
    $txtemail       = $_POST["txtemail"];
    $txtdistrito    = $_POST["txtdistrito"];
    $selsexo        = $_POST["selsexo"];


    $sqlexiste = $PDO -> prepare("SELECT nombres, apellidos FROM sorteo_madre_2018 WHERE nombres = :nombrese AND apellidos = :apellidose");
    $sqlexiste->bindParam(":nombrese", $txtnombres);
    $sqlexiste->bindParam(":apellidose", $txtapellidos);
    $sqlexiste->execute();
    $row_existe = $sqlexiste->rowCount();

    if ($row_existe != 0) {
        echo "existes";
    }
    else{
        $sqlexisteEmail = $PDO -> prepare("SELECT email FROM sorteo_madre_2018 WHERE email = :email");
        $sqlexisteEmail->bindParam(":email", $txtemail);
        $sqlexisteEmail->execute();
        $row_existeEmail = $sqlexisteEmail->rowCount();

        if($row_existeEmail != 0){
            echo "emailexiste";
        }
        else{
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
        }

    }
?>