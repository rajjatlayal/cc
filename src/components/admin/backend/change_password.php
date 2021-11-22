<?php
//error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
require_once('jwt.php');
// print_r($_POST);
// exit();
$result_array=array();
$old_password=md5($_POST['old_password']);
$new_password=md5($_POST['new_password']);
// $payload = JWT::decode($token, $serverKey, array('HS256'));
// $returnArray = array('userId' => $payload->userId);
// $user_id=$returnArray['userId'];

$check=mysqli_query($conn,"select id from admin where id='1' and password='$old_password'");
if(mysqli_num_rows($check) != 0){
	$result=mysqli_query($conn,"update admin set password='$new_password' where id=1");
	if($result){
		$result_array['success']='Password updated successfully';
	}else{
		$result_array['failed']='Some problem occured.';
	}	
}else if(mysqli_num_rows($check) == 0){
	$result_array['failed']='Old password is not correct.';
}
echo json_encode($result_array);
?>