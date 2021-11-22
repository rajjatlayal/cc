<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
if (isset($_POST['username'])) {$username = $_POST['username']; $username=strtolower($username);}
if (isset($_POST['password'])) {$password = md5($_POST['password']);}
$qry="select * from admin where username='$username' and password='$password' ";
$result=mysqli_query($conn,$qry);
$fetch=mysqli_fetch_assoc($result);
if (($username == $fetch['username']) && ($password == $fetch['password'])) {
	// echo 'user'.$username;
	// echo 'fetch_user'.$fetch['username'];
	// echo 'pass'.$password;
	// echo 'fetch_pass'.$fetch['password'];
	$userId = $fetch['id'];
	// create a token
	// $payloadArray = array();
	// $payloadArray['userId'] = $userId;
	// if (isset($nbf)) {$payloadArray['nbf'] = $nbf;}
	// if (isset($exp)) {$payloadArray['exp'] = $exp;}
	// $token = JWT::encode($payloadArray, $serverKey);
	// return to caller
	$returnArray = array('failed' => 'done');
	$jsonEncodedReturnArray = json_encode($returnArray, JSON_PRETTY_PRINT);
	echo $jsonEncodedReturnArray;
} 
else {
	$returnArray = array('failed' => 'Invalid credentials');
	$jsonEncodedReturnArray = json_encode($returnArray, JSON_PRETTY_PRINT);
	echo $jsonEncodedReturnArray;
}
?>