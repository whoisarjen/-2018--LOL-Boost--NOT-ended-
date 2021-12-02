<!DOCTYPE html>
<html>
<head>
	<title>Lol-Boost.eu</title>
   	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="assets/css/materialize.min.css"  media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <?php
    require_once './config/styles.php';
    if(isset($_GET['page'])){
    	$page = $_GET['page'];
    	echo styleofPage($page);
    }
    ?>
    
</head>
<body>
	<?php
	if(isset($page)){
		if($page=="login"){			
			include './pages/login.php';
		}


	}
	?>
	

      <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script type="text/javascript" src="assets/js/materialize.min.js"></script>
</body>
</html>