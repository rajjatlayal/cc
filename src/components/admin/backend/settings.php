<?php
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include('db_connect/config.php');
// print_r($_POST);
// print_r($_FILES);
//exit();
$result_array=array();


$first_title=mysqli_real_escape_string($conn,$_POST['first_title']);
$second_title=mysqli_real_escape_string($conn,$_POST['second_title']);
$avatar_title=mysqli_real_escape_string($conn,$_POST['avatar_title']);
$sec6_heading=mysqli_real_escape_string($conn,$_POST['sec6_heading']);
//$sec7_heading=mysqli_real_escape_string($conn,$_POST['sec7_heading']);
$sec10_heading=mysqli_real_escape_string($conn,$_POST['sec10_heading']);
$sec11_heading=mysqli_real_escape_string($conn,$_POST['sec11_heading']);
$sec13_heading=mysqli_real_escape_string($conn,$_POST['sec13_heading']);
$sec15_heading=mysqli_real_escape_string($conn,$_POST['sec15_heading']);
$sec16_heading=mysqli_real_escape_string($conn,$_POST['sec16_heading']);
// $sec17_heading=mysqli_real_escape_string($conn,$_POST['sec17_heading']);
$sec8_heading=mysqli_real_escape_string($conn,$_POST['sec8_heading']);
$sec8_content=mysqli_real_escape_string($conn,$_POST['sec8_content']);
$sec9_heading=mysqli_real_escape_string($conn,$_POST['sec9_heading']);
$sec9_content=mysqli_real_escape_string($conn,$_POST['sec9_content']);
$sec12_heading=mysqli_real_escape_string($conn,$_POST['sec12_heading']);
$sec12_content=mysqli_real_escape_string($conn,$_POST['sec12_content']);
$sec14_heading=mysqli_real_escape_string($conn,$_POST['sec14_heading']);
$sec14_content=mysqli_real_escape_string($conn,$_POST['sec14_content']);
$text_under10=mysqli_real_escape_string($conn,$_POST['text_under10']);


$title=mysqli_real_escape_string($conn,$_POST['title']);
$content=mysqli_real_escape_string($conn,$_POST['content']);
// $collect_title1=$_POST['collect_title1'];
// $collect_title2=$_POST['collect_title2'];
// $collect_title3=$_POST['collect_title3'];
// $collect_title4=$_POST['collect_title4'];
$collect_content1=mysqli_real_escape_string($conn,$_POST['collect_content1']);
$collect_content2=mysqli_real_escape_string($conn,$_POST['collect_content2']);
$collect_content3=mysqli_real_escape_string($conn,$_POST['collect_content3']);
$collect_content4=mysqli_real_escape_string($conn,$_POST['collect_content4']);
$greatest_content=mysqli_real_escape_string($conn,$_POST['greatest_content']);
$greatest_content1=mysqli_real_escape_string($conn,$_POST['greatest_content1']);
$greatest_content2=mysqli_real_escape_string($conn,$_POST['greatest_content2']);
// $greatest_content3=mysqli_real_escape_string($conn,$_POST['greatest_content3']);
$section4_title=mysqli_real_escape_string($conn,$_POST['section4_title']);
$section4_content=mysqli_real_escape_string($conn,$_POST['section4_content']);
//$give_content=mysqli_real_escape_string($conn,$_POST['give_content']);
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
$faq_title1=mysqli_real_escape_string($conn,$_POST['faq_title1']);
$faq_title2=mysqli_real_escape_string($conn,$_POST['faq_title2']);
$faq_title3=mysqli_real_escape_string($conn,$_POST['faq_title3']);
$faq_title4=mysqli_real_escape_string($conn,$_POST['faq_title4']);
$faq_title5=mysqli_real_escape_string($conn,$_POST['faq_title5']);
$faq_title6=mysqli_real_escape_string($conn,$_POST['faq_title6']);
$faq_title7=mysqli_real_escape_string($conn,$_POST['faq_title7']);
$faq_title8=mysqli_real_escape_string($conn,$_POST['faq_title8']);
$faq_content1=mysqli_real_escape_string($conn,$_POST['faq_content1']);
$faq_content2=mysqli_real_escape_string($conn,$_POST['faq_content2']);
$faq_content3=mysqli_real_escape_string($conn,$_POST['faq_content3']);
$faq_content4=mysqli_real_escape_string($conn,$_POST['faq_content4']);
$faq_content5=mysqli_real_escape_string($conn,$_POST['faq_content5']);
$faq_content6=mysqli_real_escape_string($conn,$_POST['faq_content6']);
$faq_content7=mysqli_real_escape_string($conn,$_POST['faq_content7']);
$faq_content8=mysqli_real_escape_string($conn,$_POST['faq_content8']);
$cryptocunt_content=mysqli_real_escape_string($conn,$_POST['cryptocunt_content']);
$ape_content=mysqli_real_escape_string($conn,$_POST['ape_content']);
$famous_content=mysqli_real_escape_string($conn,$_POST['famous_content']);
$gods_content=mysqli_real_escape_string($conn,$_POST['gods_content']);
$evolved_content=mysqli_real_escape_string($conn,$_POST['evolved_content']);

$title_font=$_POST['title_font'];
$para_font=$_POST['para_font'];
$list_font=$_POST['list_font'];
$date_time=$_POST['date_time'];
$button_font=$_POST['button_font'];
$subtitle_font=$_POST['subtitle_font'];
$title_weight=$_POST['title_weight'];
$para_weight=$_POST['para_weight'];
$list_weight=$_POST['list_weight'];
$button_weight=$_POST['button_weight'];
$subtitle_weight=$_POST['subtitle_weight'];
$head_font=$_POST['head_font'];
$head_weight=$_POST['head_weight'];

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
	move_uploaded_file($_FILES['logo']["tmp_name"], "images/".$_FILES['logo']['name']);
	$gen_name1=$_FILES['logo']['name'];
	$query11=mysqli_query($conn,"update settings set logo='$gen_name1' where id=$id");
}
if($_FILES['banner1']['size']!=0){
	//echo 'enter';
	// $query2=mysqli_query($conn,"select banner1 from settings where id='$id'");
	// $fetch2=mysqli_fetch_assoc($query2);
	// if($fetch2['banner1']!=''){
	// 	unlink('images/'.$fetch2['banner1']);
	// }
	move_uploaded_file($_FILES['banner1']["tmp_name"], "images/".$_FILES['banner1']['name']);
	$gen_name2=$_FILES['banner1']['name'];
	$query22=mysqli_query($conn,"update settings set banner1='$gen_name2' where id=$id");
}
if($_FILES['banner2']['size']!=0){
	// $query12=mysqli_query($conn,"select banner2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['banner2']!=''){
	// 	unlink('images/'.$fetch12['banner2']);
	// }
	move_uploaded_file($_FILES['banner2']["tmp_name"], "images/".$_FILES['banner2']['name']);
	$gen_name3=$_FILES['banner2']['name'];
	$query=mysqli_query($conn,"update settings set banner2='$gen_name3' where id=$id");
}
if($_FILES['img1']['size']!=0){
	// $query12=mysqli_query($conn,"select img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img1']!=''){
	// 	unlink('images/'.$fetch12['img1']);
	// }
	move_uploaded_file($_FILES['img1']["tmp_name"], "images/".$_FILES['img1']['name']);
	$gen_name4=$_FILES['img1']['name'];
	$query=mysqli_query($conn,"update settings set img1='$gen_name4' where id=$id");
}
if($_FILES['img2']['size']!=0){
	// $query12=mysqli_query($conn,"select img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img2']!=''){
	// 	unlink('images/'.$fetch12['img2']);
	// }
	move_uploaded_file($_FILES['img2']["tmp_name"], "images/".$_FILES['img2']['name']);
	$gen_name5=$_FILES['img2']['name'];
	$query=mysqli_query($conn,"update settings set img2='$gen_name5' where id=$id");
}
if($_FILES['img3']['size']!=0){
	// $query12=mysqli_query($conn,"select img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img3']!=''){
	// 	unlink('images/'.$fetch12['img3']);
	// }
	move_uploaded_file($_FILES['img3']["tmp_name"], "images/".$_FILES['img3']['name']);
	$gen_name6=$_FILES['img3']['name'];
	$query=mysqli_query($conn,"update settings set img3='$gen_name6' where id=$id");
}
if($_FILES['img4']['size']!=0){
	// $query12=mysqli_query($conn,"select img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['img4']!=''){
	// 	unlink('images/'.$fetch12['img4']);
	// }
	move_uploaded_file($_FILES['img4']["tmp_name"], "images/".$_FILES['img4']['name']);
	$gen_name7=$_FILES['img4']['name'];
	$query=mysqli_query($conn,"update settings set img4='$gen_name7' where id=$id");
}
if($_FILES['avatar1']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar1']!=''){
	// 	unlink('images/'.$fetch12['avatar1']);
	// }
	move_uploaded_file($_FILES['avatar1']["tmp_name"], "images/".$_FILES['avatar1']['name']);
	$gen_name8=$_FILES['avatar1']['name'];
	$query=mysqli_query($conn,"update settings set avatar1='$gen_name8' where id=$id");
}
if($_FILES['avatar2']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar2']!=''){
	// 	unlink('images/'.$fetch12['avatar2']);
	// }
	move_uploaded_file($_FILES['avatar2']["tmp_name"], "images/".$_FILES['avatar2']['name']);
	$gen_name9=$_FILES['avatar2']['name'];
	$query=mysqli_query($conn,"update settings set avatar2='$gen_name9' where id=$id");
}
if($_FILES['avatar3']['size']!=0){
	// $query12=mysqli_query($conn,"select avatar3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['avatar3']!=''){
	// 	unlink('images/'.$fetch12['avatar3']);
	// }
	move_uploaded_file($_FILES['avatar3']["tmp_name"], "images/".$_FILES['avatar3']['name']);
	$gen_name10=$_FILES['avatar3']['name'];
	$query=mysqli_query($conn,"update settings set avatar3='$gen_name10' where id=$id");
}
if($_FILES['greatest_img1']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img1']!=''){
	// 	unlink('images/'.$fetch12['greatest_img1']);
	// }
	move_uploaded_file($_FILES['greatest_img1']["tmp_name"], "images/".$_FILES['greatest_img1']['name']);
	$gen_name11=$_FILES['greatest_img1']['name'];
	$query=mysqli_query($conn,"update settings set greatest_img1='$gen_name11' where id=$id");
}
if($_FILES['greatest_img2']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img2']!=''){
	// 	unlink('images/'.$fetch12['greatest_img2']);
	// }
	move_uploaded_file($_FILES['greatest_img2']["tmp_name"], "images/".$_FILES['greatest_img2']['name']);
	$gen_name12=$_FILES['greatest_img2']['name'];
	$query=mysqli_query($conn,"update settings set greatest_img2='$gen_name12' where id=$id");
}
if($_FILES['greatest_img3']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img3']!=''){
	// 	unlink('images/'.$fetch12['greatest_img3']);
	// }
	move_uploaded_file($_FILES['greatest_img3']["tmp_name"], "images/".$_FILES['greatest_img3']['name']);
	$gen_name13=$_FILES['greatest_img3']['name'];
	$query=mysqli_query($conn,"update settings set greatest_img3='$gen_name13' where id=$id");
}
if($_FILES['greatest_img4']['size']!=0){
	// $query12=mysqli_query($conn,"select greatest_img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['greatest_img4']!=''){
	// 	unlink('images/'.$fetch12['greatest_img4']);
	// }
	move_uploaded_file($_FILES['greatest_img4']["tmp_name"], "images/".$_FILES['greatest_img4']['name']);
	$gen_name14=$_FILES['greatest_img4']['name'];
	$query=mysqli_query($conn,"update settings set greatest_img4='$gen_name14' where id=$id");
}
if($_FILES['collect_img1']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img1 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img1']!=''){
	// 	unlink('images/'.$fetch12['collect_img1']);
	// }
	move_uploaded_file($_FILES['collect_img1']["tmp_name"], "images/".$_FILES['collect_img1']['name']);
	$gen_name15=$_FILES['collect_img1']['name'];
	$query=mysqli_query($conn,"update settings set collect_img1='$gen_name15' where id=$id");
}
if($_FILES['collect_img2']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img2']!=''){
	// 	unlink('images/'.$fetch12['collect_img2']);
	// }
	move_uploaded_file($_FILES['collect_img2']["tmp_name"], "images/".$_FILES['collect_img2']['name']);
	$gen_name16=$_FILES['collect_img2']['name'];
	$query=mysqli_query($conn,"update settings set collect_img2='$gen_name16' where id=$id");
}
if($_FILES['collect_img3']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img3 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img3']!=''){
	// 	unlink('images/'.$fetch12['collect_img3']);
	// }
	move_uploaded_file($_FILES['collect_img3']["tmp_name"], "images/".$_FILES['collect_img3']['name']);
	$gen_name17=$_FILES['collect_img3']['name'];
	$query=mysqli_query($conn,"update settings set collect_img3='$gen_name17' where id=$id");
}
if($_FILES['collect_img4']['size']!=0){
	// $query12=mysqli_query($conn,"select collect_img4 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['collect_img4']!=''){
	// 	unlink('images/'.$fetch12['collect_img4']);
	// }
	move_uploaded_file($_FILES['collect_img4']["tmp_name"], "images/".$_FILES['collect_img4']['name']);
	$gen_name18=$_FILES['collect_img4']['name'];
	$query=mysqli_query($conn,"update settings set collect_img4='$gen_name18' where id=$id");
}
if($_FILES['crypto_cunt_img']['size']!=0){
	// $query12=mysqli_query($conn,"select crypto_cunt_img from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['crypto_cunt_img']!=''){
	// 	unlink('images/'.$fetch12['crypto_cunt_img']);
	// }
	move_uploaded_file($_FILES['crypto_cunt_img']["tmp_name"], "images/".$_FILES['crypto_cunt_img']['name']);
	$gen_name19=$_FILES['crypto_cunt_img']['name'];
	$query=mysqli_query($conn,"update settings set crypto_cunt_img='$gen_name19' where id=$id");
}
// if($_FILES['section4_img']['size']!=0){
// 	// $query12=mysqli_query($conn,"select section4_img from settings where id='$id'");
// 	// $fetch12=mysqli_fetch_assoc($query12);
// 	// if($fetch12['section4_img']!=''){
// 	// 	unlink('images/'.$fetch12['section4_img']);
// 	// }

// 	$date = date('Y-m-d h:i:s a', time());
// 	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
// 	$get_number = $d->getTimestamp();
// 	$extension = strtolower(pathinfo($_FILES['section4_img']['name'], PATHINFO_EXTENSION));
// 	$target_file = "images/".$get_number.".".$extension;
// 	move_uploaded_file($_FILES['section4_img']["tmp_name"], "images/".$get_number.".".$extension);
// 	$gen_name20=$get_number.".".$extension;

// 	$query=mysqli_query($conn,"update settings set section4_img='$gen_name20' where id=$id");
// }
// if($_FILES['give_img1']['size']!=0){
// 	// $query12=mysqli_query($conn,"select give_img1 from settings where id='$id'");
// 	// $fetch12=mysqli_fetch_assoc($query12);
// 	// if($fetch12['give_img1']!=''){
// 	// 	unlink('images/'.$fetch12['give_img1']);
// 	// }

// 	$date = date('Y-m-d h:i:s a', time());
// 	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
// 	$get_number = $d->getTimestamp();
// 	$extension = strtolower(pathinfo($_FILES['give_img1']['name'], PATHINFO_EXTENSION));
// 	$target_file = "images/".$get_number.".".$extension;
// 	move_uploaded_file($_FILES['give_img1']["tmp_name"], "images/".$get_number.".".$extension);
// 	$gen_name21=$get_number.".".$extension;

// 	$query=mysqli_query($conn,"update settings set give_img1='$gen_name21' where id=$id");
// }
// if($_FILES['give_img3']['size']!=0){
// 	// $query12=mysqli_query($conn,"select give_img3 from settings where id='$id'");
// 	// $fetch12=mysqli_fetch_assoc($query12);
// 	// if($fetch12['give_img3']!=''){
// 	// 	unlink('images/'.$fetch12['give_img3']);
// 	// }

// 	$date = date('Y-m-d h:i:s a', time());
// 	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
// 	$get_number = $d->getTimestamp();
// 	$extension = strtolower(pathinfo($_FILES['give_img3']['name'], PATHINFO_EXTENSION));
// 	$target_file = "images/".$get_number.".".$extension;
// 	move_uploaded_file($_FILES['give_img3']["tmp_name"], "images/".$get_number.".".$extension);
// 	$gen_name22=$get_number.".".$extension;

// 	$query=mysqli_query($conn,"update settings set give_img3='$gen_name22' where id=$id");
// }
// if($_FILES['give_img2']['size']!=0){
// 	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
// 	// $fetch12=mysqli_fetch_assoc($query12);
// 	// if($fetch12['give_img2']!=''){
// 	// 	unlink('images/'.$fetch12['give_img2']);
// 	// }

// 	$date = date('Y-m-d h:i:s a', time());
// 	$d = DateTime::createFromFormat('Y-m-d h:i:s a', $date);
// 	$get_number = $d->getTimestamp();
// 	$extension = strtolower(pathinfo($_FILES['give_img2']['name'], PATHINFO_EXTENSION));
// 	$target_file = "images/".$get_number.".".$extension;
// 	move_uploaded_file($_FILES['give_img2']["tmp_name"], "images/".$get_number.".".$extension);
// 	$gen_name23=$get_number.".".$extension;

// 	$query=mysqli_query($conn,"update settings set give_img2='$gen_name23' where id=$id");
// }
if($_FILES['sec9_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['sec9_img']["tmp_name"], "images/".$_FILES['sec9_img']['name']);
	$gen_name24=$_FILES['sec9_img']['name'];
	$query=mysqli_query($conn,"update settings set sec9_img='$gen_name24' where id=$id");
}
if($_FILES['sec12_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['sec12_img']["tmp_name"], "images/".$_FILES['sec12_img']['name']);
	$gen_name25=$_FILES['sec12_img']['name'];
	$query=mysqli_query($conn,"update settings set sec12_img='$gen_name25' where id=$id");
}
if($_FILES['sec14_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['sec14_img']["tmp_name"], "images/".$_FILES['sec14_img']['name']);
	$gen_name26=$_FILES['sec14_img']['name'];
	$query=mysqli_query($conn,"update settings set sec14_img='$gen_name26' where id=$id");
}
if($_FILES['ape_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['ape_img']["tmp_name"], "images/".$_FILES['ape_img']['name']);
	$gen_name26=$_FILES['ape_img']['name'];
	$query=mysqli_query($conn,"update settings set ape_img='$gen_name26' where id=$id");
}
if($_FILES['famous_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['famous_img']["tmp_name"], "images/".$_FILES['famous_img']['name']);
	$gen_name26=$_FILES['famous_img']['name'];
	$query=mysqli_query($conn,"update settings set famous_img='$gen_name26' where id=$id");
}
if($_FILES['evolved_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['evolved_img']["tmp_name"], "images/".$_FILES['evolved_img']['name']);
	$gen_name26=$_FILES['evolved_img']['name'];
	$query=mysqli_query($conn,"update settings set evolved_img='$gen_name26' where id=$id");
}
if($_FILES['gods_img']['size']!=0){
	// $query12=mysqli_query($conn,"select give_img2 from settings where id='$id'");
	// $fetch12=mysqli_fetch_assoc($query12);
	// if($fetch12['give_img2']!=''){
	// 	unlink('images/'.$fetch12['give_img2']);
	// }
	move_uploaded_file($_FILES['gods_img']["tmp_name"], "images/".$_FILES['gods_img']['name']);
	$gen_name26=$_FILES['gods_img']['name'];
	$query=mysqli_query($conn,"update settings set gods_img='$gen_name26' where id=$id");
}

$query=mysqli_query($conn,"update settings set title='$title',content='$content',roadmap_per1='$roadmap_per1',roadmap_per2='$roadmap_per2',roadmap_per3='$roadmap_per3',roadmap_per4='$roadmap_per4',roadmap_per5='$roadmap_per5',roadmap_per6='$roadmap_per6',roadmap_per7='$roadmap_per7',roadmap_per8='$roadmap_per8',roadmap_per9='$roadmap_per9',roadmap_per10='$roadmap_per10',roadmap_content1='$roadmap_content1',roadmap_content2='$roadmap_content2',roadmap_content3='$roadmap_content3',roadmap_content4='$roadmap_content4',roadmap_content5='$roadmap_content5',roadmap_content6='$roadmap_content6',roadmap_content7='$roadmap_content7',roadmap_content8='$roadmap_content8',roadmap_content9='$roadmap_content9',roadmap_content10='$roadmap_content10',video_title='$video_title',video_link='$video_link',faq_title1='$faq_title1',faq_title2='$faq_title2',faq_title3='$faq_title3',faq_title4='$faq_title4',faq_title5='$faq_title5',faq_title6='$faq_title6',faq_title7='$faq_title7',faq_title8='$faq_title8',faq_content1='$faq_content1',faq_content2='$faq_content2',faq_content3='$faq_content3',faq_content4='$faq_content4',faq_content5='$faq_content5', faq_content6='$faq_content6',faq_content7='$faq_content7',faq_content8='$faq_content8',collect_content1='$collect_content1',collect_content2='$collect_content2',collect_content3='$collect_content3',collect_content4='$collect_content4',greatest_content='$greatest_content',greatest_content1='$greatest_content1',greatest_content2='$greatest_content2',social_discord='$discord',social_instagram='$instagram',social_twitter='$twitter',section4_title='$section4_title',section4_content='$section4_content',cryptocunt_content='$cryptocunt_content',CryptoCunts='$cryptocunt',Evolved='$evolved',AnonymousApe='$ape',FamousCryptoCunt='$famous',CryptoCuntGods='$gods',title_font='$title_font',para_font='$para_font',list_font='$list_font',date_time='$date_time',button_font='$button_font',subtitle_font='$subtitle_font',first_title='$first_title',second_title='$second_title',avatar_title='$avatar_title',sec6_heading='$sec6_heading',sec10_heading='$sec10_heading',sec11_heading='$sec11_heading',sec13_heading='$sec13_heading',sec15_heading='$sec15_heading',sec16_heading='$sec16_heading',sec8_heading='$sec8_heading',sec8_content='$sec8_content',sec9_heading='$sec9_heading',sec9_content='$sec9_content',sec12_heading='$sec12_heading',sec12_content='$sec12_content',sec14_heading='$sec14_heading',sec14_content='$sec14_content',text_under10='$text_under10',title_weight='$title_weight',para_weight='$para_weight',list_weight='$list_weight',button_weight='$button_weight',subtitle_weight='$subtitle_weight',head_font='$head_font',head_weight='$head_weight',ape_content='$ape_content',famous_content='$famous_content',gods_content='$gods_content',evolved_content='$evolved_content' where id=$id");

if($query){
	$result_array['success']='Data updated successfully.';
}else{
	$result_array['failed']='Some problem occured';
}
$result = array('notifications' => $result_array);
echo json_encode($result);	
?>