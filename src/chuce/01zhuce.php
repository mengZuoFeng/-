<?php
	include "./connect.php";

	$username = $_POST['username'];//用户名
	$password = $_POST['password'];//密码
	//获取请求参数和主体的数组:$_POST,$_GET,$_REQUEST

	//把用户插入数据库
	$sql = "INSERT INTO info (username,password) VALUES ('$username','$password')";
	$result = mysqli_query($connect,$sql);
	if($result){
		//如果注册成功,为了下次可以直接登陆,给你发个通信证:cookie
		setcookie("username",$username,time()+24*60*60);
		setcookie("password",$password,time()+24*60*60);
		echo $username."注册成功";
	}else{
		echo "注册失败";
	}
?>