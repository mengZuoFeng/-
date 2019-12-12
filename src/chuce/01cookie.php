<?php
include "./connect.php";
$username = $_GET['username'];
$password = $_GET['password'];

//查询这条记录是否有
$sql = "SELECT * FROM info WHERE username='$username' AND password='$password'" ;
$result = mysqli_query($connect,$sql);
$rows = mysqli_num_rows($result);
if($rows>0){
	echo "欢迎回来".$username;
}else{
	echo "点击重新注册:<a href='http://localhost/zhuceyudenglu/02login.html'>注册</a>";
}

/*

cookie:一种身份证明,服务端通过他可以判断用户的身份
php里面有一个变量叫$_COOKIE可以获取cookie数组
cookie的特点:
大小有限制:4K左右
条数有限制:50条左右
读取有限制:同域读取
时效有限制:默认会话时效

*/ 