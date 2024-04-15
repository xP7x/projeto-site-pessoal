<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $destinatario = "pedrocadore59@gmail.com";
    $assunto = "Coleta de Dados - Cadore Tech";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone;

    $cabecalho = "From: pedrocadore59@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destinatario,$assunto,$corpo,$cabecalho)){
        echo("E-mail enviado com sucesso!");
    
    }else{
        echo("Houve um erro ao enviar o email!");
    }



?>