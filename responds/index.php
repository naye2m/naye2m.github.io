
<?php
// SQLite database file path
$dbfile = 'datas.db';

// Establish database connection
$conn = new SQLite3($dbfile);

// Check connection
if (!$conn) {
    die("Connection failed: " . $conn->lastErrorMsg());
}

// Define table schema
$sql = "CREATE TABLE IF NOT EXISTS _table_response (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(50),
    message VARCHAR(50),
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
$date = new DateTime();
$date->setTimezone(new DateTimeZone('Asia/Dhaka')); // Set GMT+6 (Dhaka)

// Check if table creation was successful
if ($conn->exec($sql) === FALSE) {
    echo "Error creating table: " . $conn->lastErrorMsg();
}

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET["user"] == "naye2m") {
            echo $date->format('dmyHis');
            echo "<br>";
            $sql = "SELECT * FROM _table_response";
            $result = $conn->query($sql);
            if(! $result){
                echo "ERROR: CODE: NO_RES";
                return;
            }
            $reversed_results = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
              array_unshift($reversed_results, $row); // Prepend each row to the beginning
            }
            echo "<style>td {padding: 10px;outline: 1px dashed #8884;}table td{transition: 1s 1s;&:hover {font-size: 210%;}}td:nth-child(3) {max-width: 250px;overflow-wrap: break-word;text-wrap: wrap;}</style>";
            echo "<table><tr><th>ID</th><th>Name</th><th>Description</th><th>Message</th></tr>";
            while ($row = array_shift($reversed_results)) {
                echo "<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td>".$row["description"]."</td><td>".$row["message"]."</td></tr>";
            }
            echo "</table>";
    } else {
        echo "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"refresh\" content=\"5;url=https://naye.xyz\">\n    <title>Redirecting...</title>\n</head>Thank you so much for connecting us.. - naye2m ";
    }
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = mysql_escape_mimic($_POST['name']);
    $email = mysql_escape_mimic($_POST['email']);
    $description = mysql_escape_mimic($_POST['description']);
    $message = mysql_escape_mimic($_POST['message']);
    $datestr =$date->format('dmyHis');
    $sql2 = mysql_escape_mimic("INSERT INTO _table_response (name, description, message) VALUES ('$name', '$email - $description', '$datestr $message)");
    
    $sql = "INSERT INTO _table_response (name, description, message) VALUES ('$name', '$email - $description', '$datestr > 
    $message 
    >>>>>>>>>>>>>>>>>> $sql2')";
    

    // echo $sql;
    if ($conn->exec($sql) === TRUE) {
        // echo json_encode(['id' => $conn->lastInsertRowID(), 'name' => $name])
        echo "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"refresh\" content=\"5;url=https://naye.xyz\">\n    <title>Redirecting...</title>\n</head>Thank you so much for connecting us..\"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"refresh\" content=\"5;url=https://naye.xyz\">\n    <title>Redirecting...</title>\n</head>Thank you so much for connecting us.. Mr. ".$_POST['name'];
    } else {
        echo "Error: " . "Sorry something is wrong.....";
    }
}
function mysql_escape_mimic($inp) {
    if(is_array($inp))
        return array_map(__METHOD__, $inp);
    if(!empty($inp) && is_string($inp)) {
        return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a",','), array('\\\\', '\\0', '\\n', '\\r', "''", '\\"', '\\Z','\\,'), $inp);
    }
    return $inp;

}

// Close database connection
$conn->close();