<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
// print_r($_POST);
// exit();
$result_array=array();

$title=$_POST['title'];
$content=mysqli_real_escape_string($conn,$_POST['content']);
$collect_title1=$_POST['collect_title1'];
$collect_title2=$_POST['collect_title2'];
$collect_title3=$_POST['collect_title3'];
$collect_title4=$_POST['collect_title4'];
$collect_content1=mysqli_real_escape_string($conn,$_POST['collect_content1']);
$collect_content2=mysqli_real_escape_string($conn,$_POST['collect_content2']);
$collect_content3=mysqli_real_escape_string($conn,$_POST['collect_content3']);
$collect_content4=mysqli_real_escape_string($conn,$_POST['collect_content4']);
$greatest_content=mysqli_real_escape_string($conn,$_POST['greatest_content']);
$roadmap_per1=$_POST['roadmap_per1'];
$roadmap_per2=$_POST['roadmap_per2'];
$roadmap_per3=$_POST['roadmap_per3'];
$roadmap_per4=$_POST['roadmap_per4'];
$roadmap_per5=$_POST['roadmap_per5'];
$roadmap_per6=$_POST['roadmap_per6'];
$roadmap_per7=$_POST['roadmap_per7'];
$roadmap_per8=$_POST['roadmap_per8'];
$roadmap_per9=$_POST['roadmap_per9'];
$roadmap_per10=$_POST['roadmap_per10'];
$roadmap_content1=mysqli_real_escape_string($conn,$_POST['roadmap_content1']);
$roadmap_content2=mysqli_real_escape_string($conn,$_POST['roadmap_content2']);
$roadmap_content3=mysqli_real_escape_string($conn,$_POST['roadmap_content3']);
$roadmap_content4=mysqli_real_escape_string($conn,$_POST['roadmap_content4']);
$roadmap_content5=mysqli_real_escape_string($conn,$_POST['roadmap_content5']);
$roadmap_content6=mysqli_real_escape_string($conn,$_POST['roadmap_content6']);
$roadmap_content7=mysqli_real_escape_string($conn,$_POST['roadmap_content7']);
$roadmap_content8=mysqli_real_escape_string($conn,$_POST['roadmap_content8']);
$roadmap_content9=mysqli_real_escape_string($conn,$_POST['roadmap_content9']);
$roadmap_content10=mysqli_real_escape_string($conn,$_POST['roadmap_content10']);
$video_title=mysqli_real_escape_string($conn,$_POST['video_title']);
$video_link=$_POST['video_link'];
$faq_title1=$_POST['faq_title1'];
$faq_title2=$_POST['faq_title2'];
$faq_title3=$_POST['faq_title3'];
$faq_title4=$_POST['faq_title4'];
$faq_title5=$_POST['faq_title5'];
$faq_title6=$_POST['faq_title6'];
$faq_content1=mysqli_real_escape_string($conn,$_POST['faq_content1']);
$faq_content2=mysqli_real_escape_string($conn,$_POST['faq_content2']);
$faq_content3=mysqli_real_escape_string($conn,$_POST['faq_content3']);
$faq_content4=mysqli_real_escape_string($conn,$_POST['faq_content4']);
$faq_content5=mysqli_real_escape_string($conn,$_POST['faq_content5']);
$faq_content6=mysqli_real_escape_string($conn,$_POST['faq_content6']);

$qry=mysqli_query($conn,"select max(id) as id from settings");
$ftch=mysqli_fetch_assoc($qry);
$id=$ftch['id'];

if(!empty($_FILES['logo']['name'][0])){
	$query12=mysqli_query($conn,"select logo from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['logo']!=''){
		unlink('images/'.$fetch12['logo']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['logo']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['logo']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set logo='$gen_name' where id=$id");
}
if(!empty($_FILES['banner1']['name'][0])){
	$query12=mysqli_query($conn,"select banner1 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['banner1']!=''){
		unlink('images/'.$fetch12['banner1']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['banner1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['banner1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set banner1='$gen_name' where id=$id");
}
if(!empty($_FILES['banner2']['name'][0])){
	$query12=mysqli_query($conn,"select banner2 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['banner2']!=''){
		unlink('images/'.$fetch12['banner2']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['banner2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['banner2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set banner2='$gen_name' where id=$id");
}
if(!empty($_FILES['img1']['name'][0])){
	$query12=mysqli_query($conn,"select img1 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['img1']!=''){
		unlink('images/'.$fetch12['img1']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img1='$gen_name' where id=$id");
}
if(!empty($_FILES['img2']['name'][0])){
	$query12=mysqli_query($conn,"select img2 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['img2']!=''){
		unlink('images/'.$fetch12['img2']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img2='$gen_name' where id=$id");
}
if(!empty($_FILES['img3']['name'][0])){
	$query12=mysqli_query($conn,"select img3 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['img3']!=''){
		unlink('images/'.$fetch12['img3']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img3='$gen_name' where id=$id");
}
if(!empty($_FILES['img4']['name'][0])){
	$query12=mysqli_query($conn,"select img4 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['img4']!=''){
		unlink('images/'.$fetch12['img4']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img4='$gen_name' where id=$id");
}
if(!empty($_FILES['avatar1']['name'][0])){
	$query12=mysqli_query($conn,"select avatar1 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['avatar1']!=''){
		unlink('images/'.$fetch12['avatar1']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar1='$gen_name' where id=$id");
}
if(!empty($_FILES['avatar2']['name'][0])){
	$query12=mysqli_query($conn,"select avatar2 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['avatar2']!=''){
		unlink('images/'.$fetch12['avatar2']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar2='$gen_name' where id=$id");
}
if(!empty($_FILES['avatar3']['name'][0])){
	$query12=mysqli_query($conn,"select avatar3 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['avatar3']!=''){
		unlink('images/'.$fetch12['avatar3']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar3='$gen_name' where id=$id");
}
if(!empty($_FILES['greatest_img1']['name'][0])){
	$query12=mysqli_query($conn,"select greatest_img1 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['greatest_img1']!=''){
		unlink('images/'.$fetch12['greatest_img1']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img1='$gen_name' where id=$id");
}
if(!empty($_FILES['greatest_img2']['name'][0])){
	$query12=mysqli_query($conn,"select greatest_img2 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['greatest_img2']!=''){
		unlink('images/'.$fetch12['greatest_img2']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img2='$gen_name' where id=$id");
}
if(!empty($_FILES['greatest_img3']['name'][0])){
	$query12=mysqli_query($conn,"select greatest_img3 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['greatest_img3']!=''){
		unlink('images/'.$fetch12['greatest_img3']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img3='$gen_name' where id=$id");
}
if(!empty($_FILES['greatest_img4']['name'][0])){
	$query12=mysqli_query($conn,"select greatest_img4 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['greatest_img4']!=''){
		unlink('images/'.$fetch12['greatest_img4']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img4='$gen_name' where id=$id");
}
if(!empty($_FILES['collect_img1']['name'][0])){
	$query12=mysqli_query($conn,"select collect_img1 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['collect_img1']!=''){
		unlink('images/'.$fetch12['collect_img1']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img1='$gen_name' where id=$id");
}
if(!empty($_FILES['collect_img2']['name'][0])){
	$query12=mysqli_query($conn,"select collect_img2 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['collect_img2']!=''){
		unlink('images/'.$fetch12['collect_img2']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img2='$gen_name' where id=$id");
}
if(!empty($_FILES['collect_img3']['name'][0])){
	$query12=mysqli_query($conn,"select collect_img3 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['collect_img3']!=''){
		unlink('images/'.$fetch12['collect_img3']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img3='$gen_name' where id=$id");
}
if(!empty($_FILES['collect_img4']['name'][0])){
	$query12=mysqli_query($conn,"select collect_img4 from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['collect_img4']!=''){
		unlink('images/'.$fetch12['collect_img4']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img4='$gen_name' where id=$id");
}
if(!empty($_FILES['crypto_cunt_img']['name'][0])){
	$query12=mysqli_query($conn,"select crypto_cunt_img from settings where id='$id'");
	$fetch12=mysqli_fetch_assoc($query12);
	if($fetch12['crypto_cunt_img']!=''){
		unlink('images/'.$fetch12['crypto_cunt_img']);
	}

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['crypto_cunt_img']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['crypto_cunt_img']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set crypto_cunt_img='$gen_name' where id=$id");
}





$query=mysqli_query($conn,"update settings set title='$title',content='$content',collect_title1='$collect_title1',collect_title2='$collect_title2',collect_title3='$collect_title3',collect_title4='$collect_title4',roadmap_per1='$roadmap_per1',roadmap_per2='$roadmap_per2',roadmap_per3='$roadmap_per3',roadmap_per4='$roadmap_per4',roadmap_per5='$roadmap_per5',roadmap_per6='$roadmap_per6',roadmap_per7='$roadmap_per7',roadmap_per8='$roadmap_per8',roadmap_per9='$roadmap_per9',roadmap_per10='$roadmap_per10',roadmap_content1='$roadmap_content1',roadmap_content2='$roadmap_content2',roadmap_content3='$roadmap_content3',roadmap_content4='$roadmap_content4',roadmap_content5='$roadmap_content5',roadmap_content6='$roadmap_content6',roadmap_content7='$roadmap_content7',roadmap_content8='$roadmap_content8',roadmap_content9='$roadmap_content9',roadmap_content10='$roadmap_content10',video_title='$video_title',video_link='$video_link',faq_title1='$faq_title1',faq_title2='$faq_title2',faq_title3='$faq_title3',faq_title4='$faq_title4',faq_title5='$faq_title5',faq_title6='$faq_title6',faq_content1='$faq_content1',faq_content2='$faq_content2',faq_content3='$faq_content3',faq_content4='$faq_content4',faq_content5='$faq_content5', faq_content6='$faq_content6',collect_content1='$collect_content1',collect_content2='$collect_content2',collect_content3='$collect_content3',collect_content4='$collect_content4',greatest_content='$greatest_content' where id=$id");

if($query){
	$result_array['success']='Data updated successfully.';
}else{
	$result_array['failed']='Some problem occured';
}
$result = array('notifications' => $result_array);
echo json_encode($result);	
?>