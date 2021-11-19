<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
//print_r($_POST);
//print_r($_FILES);
//exit();
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
$section4_title=mysqli_real_escape_string($conn,$_POST['section4_title']);
$section4_content=mysqli_real_escape_string($conn,$_POST['section4_content']);
$give_content=mysqli_real_escape_string($conn,$_POST['give_content']);
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
$cryptocunt_content=mysqli_real_escape_string($conn,$_POST['cryptocunt_content']);
$title_font=$_POST['title_font'];
$para_font=$_POST['para_font'];
$list_font=$_POST['list_font'];
$date_time=$_POST['date_time'];
$button_font=$_POST['button_font'];
$subtitle_font=$_POST['subtitle_font'];

if($_POST['twitter']=='true'){
	$twitter='1';
}else{
	$twitter='0';
}
if($_POST['instagram']=='true'){
	$instagram='1';
}else{
	$instagram='0';
}
if($_POST['discord']=='true'){
	$discord='1';
}else{
	$discord='0';
}
if($_POST['cryptocunt']=='true'){
	$cryptocunt='1';
}else{
	$cryptocunt='0';
}
if($_POST['ape']=='true'){
	$ape='1';
}else{
	$ape='0';
}
if($_POST['famous']=='true'){
	$famous='1';
}else{
	$famous='0';
}
if($_POST['evolved']=='true'){
	$evolved='1';
}else{
	$evolved='0';
}
if($_POST['gods']=='true'){
	$gods='1';
}else{
	$gods='0';
}

$qry=mysqli_query($conn,"select max(id) as id from settings");
$ftch=mysqli_fetch_assoc($qry);
$id=$ftch['id'];

if($_FILES['logo']['size']!=0){
	// $query1=mysqli_query($conn,"select logo from settings where id='$id'");
	// $fetch1=mysqli_fetch_assoc($query1);
	// if($fetch1['logo']!=''){
	// 	unlink('images/'.$fetch1['logo']);
	// }

	$date1 = date('Y-m-d h:i:s a', time());
	$d1 = DateTime::createFromFormat('Y-m-d h:i:s a', $date1);
	$get_number1 = $d1->getTimestamp();
	$extension1 = strtolower(pathinfo($_FILES['logo']['name'], PATHINFO_EXTENSION));
	$target_file1 = "images/".$get_number1.".".$extension1;
	move_uploaded_file($_FILES['logo']["tmp_name"], "images/".$get_number1.".".$extension1);
	$gen_name1=$get_number1.".".$extension1;

	$query11=mysqli_query($conn,"update settings set logo='$gen_name1' where id=$id");
}
if($_FILES['banner1']['size']!=0){
	//echo 'enter';
	// $query2=mysqli_query($conn,"select banner1 from settings where id='$id'");
	// $fetch2=mysqli_fetch_assoc($query2);
	// if($fetch2['banner1']!=''){
	// 	unlink('images/'.$fetch2['banner1']);
	// }

	$date2 = date('Y-m-d h:i:s a', time());
	$d2 = DateTime::createFromFormat('Y-m-d h:i:s a', $date2);
	$get_number2 = $d2->getTimestamp();
	$extension2 = strtolower(pathinfo($_FILES['banner1']['name'], PATHINFO_EXTENSION));
	$target_file2 = "images/".$get_number2.".".$extension2;
	move_uploaded_file($_FILES['banner1']["tmp_name"], "images/".$get_number2.".".$extension2);
	$gen_name2=$get_number2.".".$extension2;
	// echo "update settings set banner1='$gen_name2' where id=$id";
	$query22=mysqli_query($conn,"update settings set banner1='$gen_name2' where id=$id");
}
if($_FILES['banner2']['size']!=0){
	// $query12=mysqli_query($conn,"select banner2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['banner2']!=''){
	// 	unlink('images/'.$fetch12['banner2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['banner2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['banner2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name3=$get_number.".".$extension;
	// echo "update settings set banner2='$gen_name3' where id=$id";
	$query=mysqli_query($conn,"update settings set banner2='$gen_name3' where id=$id");
}
if($_FILES['img1']['size']!=0){
	// $query12=mysqli_query($conn,"select img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img1']!=''){
	// 	unlink('images/'.$fetch12['img1']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name4=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img1='$gen_name4' where id=$id");
}
if($_FILES['img2']['size']!=0){
	// $query12=mysqli_query($conn,"select img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img2']!=''){
	// 	unlink('images/'.$fetch12['img2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name5=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img2='$gen_name5' where id=$id");
}
if($_FILES['img3']['size']!=0){
	// $query12=mysqli_query($conn,"select img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img3']!=''){
	// 	unlink('images/'.$fetch12['img3']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name6=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img3='$gen_name6' where id=$id");
}
if($_FILES['img4']['size']!=0){
	// $query12=mysqli_query($conn,"select img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img4']!=''){
	// 	unlink('images/'.$fetch12['img4']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name7=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set img4='$gen_name7' where id=$id");
}
if($_FILES['avatar1']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar1']!=''){
	// 	unlink('images/'.$fetch12['avatar1']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name8=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar1='$gen_name8' where id=$id");
}
if($_FILES['avatar2']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar2']!=''){
	// 	unlink('images/'.$fetch12['avatar2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name9=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar2='$gen_name9' where id=$id");
}
if($_FILES['avatar3']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar3']!=''){
	// 	unlink('images/'.$fetch12['avatar3']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['avatar3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['avatar3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name10=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set avatar3='$gen_name10' where id=$id");
}
if($_FILES['greatest_img1']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img1']!=''){
	// 	unlink('images/'.$fetch12['greatest_img1']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name11=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img1='$gen_name11' where id=$id");
}
if($_FILES['greatest_img2']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img2']!=''){
	// 	unlink('images/'.$fetch12['greatest_img2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name12=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img2='$gen_name12' where id=$id");
}
if($_FILES['greatest_img3']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img3']!=''){
	// 	unlink('images/'.$fetch12['greatest_img3']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name13=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img3='$gen_name13' where id=$id");
}
if($_FILES['greatest_img4']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img4']!=''){
	// 	unlink('images/'.$fetch12['greatest_img4']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['greatest_img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['greatest_img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name14=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set greatest_img4='$gen_name14' where id=$id");
}
if($_FILES['collect_img1']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img1']!=''){
	// 	unlink('images/'.$fetch12['collect_img1']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name15=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img1='$gen_name15' where id=$id");
}
if($_FILES['collect_img2']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img2']!=''){
	// 	unlink('images/'.$fetch12['collect_img2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name16=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img2='$gen_name16' where id=$id");
}
if($_FILES['collect_img3']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img3']!=''){
	// 	unlink('images/'.$fetch12['collect_img3']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name17=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img3='$gen_name17' where id=$id");
}
if($_FILES['collect_img4']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img4']!=''){
	// 	unlink('images/'.$fetch12['collect_img4']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['collect_img4']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['collect_img4']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name18=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set collect_img4='$gen_name18' where id=$id");
}
if($_FILES['crypto_cunt_img']['size']!=0){
	// $query12=mysqli_query($conn,"select crypto_cunt_img from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['crypto_cunt_img']!=''){
	// 	unlink('images/'.$fetch12['crypto_cunt_img']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['crypto_cunt_img']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['crypto_cunt_img']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name19=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set crypto_cunt_img='$gen_name19' where id=$id");
}
if($_FILES['section4_img']['size']!=0){
	// $query12=mysqli_query($conn,"select section4_img from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['section4_img']!=''){
	// 	unlink('images/'.$fetch12['section4_img']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['section4_img']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['section4_img']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name20=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set section4_img='$gen_name20' where id=$id");
}
if($_FILES['give_img1']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img1']!=''){
	// 	unlink('images/'.$fetch12['give_img1']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['give_img1']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['give_img1']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name21=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set give_img1='$gen_name21' where id=$id");
}
if($_FILES['give_img3']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img3']!=''){
	// 	unlink('images/'.$fetch12['give_img3']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['give_img3']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['give_img3']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name22=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set give_img3='$gen_name22' where id=$id");
}
if($_FILES['give_img2']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }

	$date = date('Y-m-d h:i:s a', time());
	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
	$get_number = $d->getTimestamp();
	$extension = strtolower(pathinfo($_FILES['give_img2']['name'], PATHINFO_EXTENSION));
	$target_file = "images/".$get_number.".".$extension;
	move_uploaded_file($_FILES['give_img2']["tmp_name"], "images/".$get_number.".".$extension);
	$gen_name23=$get_number.".".$extension;

	$query=mysqli_query($conn,"update settings set give_img2='$gen_name23' where id=$id");
}





$query=mysqli_query($conn,"update settings set title='$title',content='$content',collect_title1='$collect_title1',collect_title2='$collect_title2',collect_title3='$collect_title3',collect_title4='$collect_title4',roadmap_per1='$roadmap_per1',roadmap_per2='$roadmap_per2',roadmap_per3='$roadmap_per3',roadmap_per4='$roadmap_per4',roadmap_per5='$roadmap_per5',roadmap_per6='$roadmap_per6',roadmap_per7='$roadmap_per7',roadmap_per8='$roadmap_per8',roadmap_per9='$roadmap_per9',roadmap_per10='$roadmap_per10',roadmap_content1='$roadmap_content1',roadmap_content2='$roadmap_content2',roadmap_content3='$roadmap_content3',roadmap_content4='$roadmap_content4',roadmap_content5='$roadmap_content5',roadmap_content6='$roadmap_content6',roadmap_content7='$roadmap_content7',roadmap_content8='$roadmap_content8',roadmap_content9='$roadmap_content9',roadmap_content10='$roadmap_content10',video_title='$video_title',video_link='$video_link',faq_title1='$faq_title1',faq_title2='$faq_title2',faq_title3='$faq_title3',faq_title4='$faq_title4',faq_title5='$faq_title5',faq_title6='$faq_title6',faq_content1='$faq_content1',faq_content2='$faq_content2',faq_content3='$faq_content3',faq_content4='$faq_content4',faq_content5='$faq_content5', faq_content6='$faq_content6',collect_content1='$collect_content1',collect_content2='$collect_content2',collect_content3='$collect_content3',collect_content4='$collect_content4',greatest_content='$greatest_content',social_discord='$discord',social_instagram='$instagram',social_twitter='$twitter',section4_title='$section4_title',section4_content='$section4_content',give_content='$give_content',cryptocunt_content='$cryptocunt_content',CryptoCunts='$cryptocunt',Evolved='$evolved',AnonymousApe='$ape',FamousCryptoCunt='$famous',CryptoCuntGods='$gods',title_font='$title_font',para_font='$para_font',list_font='$list_font',date_time='$date_time',button_font='$button_font',subtitle_font='$subtitle_font' where id=$id");

if($query){
	$result_array['success']='Data updated successfully.';
}else{
	$result_array['failed']='Some problem occured';
}
$result = array('notifications' => $result_array);
echo json_encode($result);	
?>