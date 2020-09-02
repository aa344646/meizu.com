<?php
include("./conn.php");
$username= $_REQUEST['username'];
$password= $_REQUEST['password'];
$email= $_REQUEST['email'];

$sql ="select  *  from users where username='$username'";
$rest=$mysqli->query($sql);
if($rest->num_rows>0){
    echo '<script>  alert("账号已存在"); </script>';
    echo '<script>location.href="../src/html/register.html"</script>';
    $mysqli->close();
    die();
}
$insert="insert into users(username,password,email) values('$username','$password','$email')";
$res =$mysqli->query($insert);
$mysqli->close();
if($res){
    echo '<script>alert("注册成功");</script>';
    echo '<script>location.href="../src/html/login.html"</script>';

}

?>