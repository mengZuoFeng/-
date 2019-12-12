<?php 
	header('content-type:text/html;charset=utf8');
	$connect = mysqli_connect('localhost','root','root','user',3306);
	if(mysqli_connect_error()){
		die('数据库连接错误');
	}
?>