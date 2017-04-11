<?php
// Attempt MySQL server connection. Assuming you are running MySQL
// TODO : include creds separately and dont commit to git
$servername = "";
$username = "";
$password = "";
$dbname = "";

$link = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
// TODO : map values to columns
//'location='+ location +'&date=' + date + '&time='+ time + '&successfulDetainment' + successfulDetainment +
//'&numberDetainees' + numberDetainees + '&description' + description + '&successfulDetainment' + successfulDetainment;
//Fetching Values from URL

$name = mysqli_real_escape_string($link, $_REQUEST['name']);


// attempt insert query execution
$sql = "INSERT INTO table_name (name) VALUES ('$name')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";

} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// close connection
mysqli_close($link);
?>

