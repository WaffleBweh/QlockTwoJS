<!--****************************************************************************//
Nom          : index.php
Date         : 24.02.15
Version      : 0.1
Auteur       : SEEMULLER Julien
Description  : La page d'acceuil du site web
****************************************************************************//-->
<!doctype html>
<html class="no-js" lang="fr">
    <head>  
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>qlocktwoJS</title>
        <meta name="author" content="SEEMULLER Julien">
        <meta name="description" content="QlockTwo JavaScript Replica">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='http://fonts.googleapis.com/css?family=Josefin+Sans&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="header-container">
            <header>
            </header>
        </div>
        <div class="main-container">
            <div id="qlock">
                <div id="dot-container">
                    <div id="matrix"></div>
                </div>
            </div>
            
            <div class="button-container">
                <button id="btnFR" class="btnLanguage" type="button">FRANCAIS</button>
                <button id="btnEN" class="btnLanguage" type="button">ANGLAIS</button>
            </div>
        </div> <!-- Container principal -->


        <div class="footer-container">
            <footer>
            </footer>
        </div>

        <!--Initialisation de jQuery et des scripts JS-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')</script>
        <script src="js/core.js"></script>
    </body>
</html>