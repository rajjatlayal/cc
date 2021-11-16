<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
if (isset($_POST['username'])) {$username = $_POST['username']; $username=strtolower($username);}
if (isset($_POST['pwd'])) {$password = md5($_POST['pwd']);}
$qry="select * from admin where username='$username' and password='$password' ";
$result=mysqli_query($conn,$qry);
$fetch=mysqli_fetch_assoc($result);
if (($username == $fetch['email']) && ($password == $fetch['password'])) {
	$userId = $fetch['id'];
	// create a token
	$payloadArray = array();
	$payloadArray['userId'] = $userId;
	if (isset($nbf)) {$payloadArray['nbf'] = $nbf;}
	if (isset($exp)) {$payloadArray['exp'] = $exp;}
	$token = JWT::encode($payloadArray, $serverKey);
	// return to caller
	$returnArray = array('token' => $token,'user_name' => $user_name,'user_img' => $user_img,'coach' => $coach,'failed' => '');
	$jsonEncodedReturnArray = json_encode($returnArray, JSON_PRETTY_PRINT);
	echo $jsonEncodedReturnArray;
} 
else {
	$returnArray = array('failed' => 'Invalid credentials');
	$jsonEncodedReturnArray = json_encode($returnArray, JSON_PRETTY_PRINT);
	echo $jsonEncodedReturnArray;
}
?>