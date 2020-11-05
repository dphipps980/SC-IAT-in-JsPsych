<?php	
	// the $_POST[] array will contain the passed in filename and data
	// the directory "data" is writable by the server (chmod 777)
	$today  = date("d.m.y");
	$filename = "data/".$today."_".$_POST['filename'];
	$data = $_POST['filedata'];
	// write the file to disk
	file_put_contents($filename, $data);
	?>
