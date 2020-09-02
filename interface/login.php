<?php
include("./conn.php");
$username= $_REQUEST['username'];
$password= $_REQUEST['password'];

$sql ="select  *  from users where username='$username' and password='$password'";

$rest=$mysqli->query($sql);

if($username==null||$password==null){
    echo '<script>  alert("账户或密码未输入(想吃屁？)"); </script>';
    echo  "<script>location.href='../src/html/login.html'; </script>";
    die();
}

if($rest->num_rows>0){
    setcookie('isLogined','true',time()+3600*24,'/');//设置cookie生存周期
    echo '<script>  alert("登入成功"); </script>';
    echo '<script>location.href="../src/html/index.html"</script>';//跳转主界面
    $mysqli->close();
    die();
}else{  
    //登入失败
    echo "<script> alert('用户名或密码错误');</script>";
    echo  "<script>location.href='../src/html/login.html'; </script>";

}


?>