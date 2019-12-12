<?php
	header('content-type:text/html;charset=utf8');
	if(array_key_exists('name', $_COOKIE)&&array_key_exists('password', $_COOKIE)){
		$username = $_COOKIE['name'];
		$password = $_COOKIE['password'];
	}
	else{
		$username = $_POST['username'];
		$password = $_POST['password'];
	}
	//已经通过数据库验证
	$connect = mysqli_connect('localhost','root','root','user',3306);
	if(mysqli_connect_error()){
		die('0');
	}
	//查询数据库
	$sql = "SELECT * FROM info WHERE username='$username' AND password='$password'";
	$result = mysqli_query($connect,$sql);
	$row = mysqli_num_rows($result);
	if($row>0){
		setcookie('name',$username,time()+24*3600);
		setcookie('password',$password,time()+24*3600);
		echo "1";
	}else{
		setcookie('name',$username,time()-24*3600);
		setcookie('password',$password,time()-24*3600);
		echo "0";
	}


	
?>