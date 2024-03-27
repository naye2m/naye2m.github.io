
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
    message VARCHAR(50)
)";

// Check if table creation was successful
if ($conn->exec($sql) === FALSE) {
    echo "Error creating table: " . $conn->lastErrorMsg();
}

// Handle GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM _table_response";
    $result = $conn->query($sql);

    if ($result && $_GET["user"] == "naye2m") {
        echo "<table><tr><th>ID</th><th>Name</th><th>Description</th><th>Message</th></tr>";
        while($row = $result->fetchArray(SQLITE3_ASSOC)) {
            echo "<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td>".$row["description"]."</td><td>".$row["message"]."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"refresh\" content=\"5;url=https://naye.xyz\"><title>Redirecting...</title></head>Thank you so much for connecting us.. - naye2m ";
    }
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $description = $_POST['description'];
    $message = $_POST['message'];
    // todo fixit
    $sql = "INSERT INTO _table_response (name, description, message) VALUES ('$name', '$email - $description', '$message')";

    if ($conn->exec($sql) === TRUE) {
        // echo json_encode(['id' => $conn->lastInsertRowID(), 'name' => $name])
        echo "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"refresh\" content=\"5;url=https://naye.xyz\"><title>Redirecting...</title></head>Thank you so much for connecting us.. Mr. ".$name;
    } else {
        //todo: add to file without echoing
        echo "Error: " . $sql . $conn->lastErrorMsg();
    }
}

// Close database connection
$conn->close();
?>
