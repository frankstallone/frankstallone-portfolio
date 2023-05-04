<?PHP
    // Place the location of files into variables
    $location_counter = "count.txt";
    $location_ip = "ip.txt";
    // Finds how many people have visited and adds one to it
    $counter = join('', file($location_counter));
    trim($counter);
    $counter++;
    // Print lines to the screen
    echo "<br>You are visitor number: $counter";
    echo "<br>Your IP address is: $REMOTE_ADDR";
    // Changes the value of the counter in the count.txt file
    $fp = fopen($location_counter,"w");
    fputs($fp, $counter);
    fclose($fp);
    // Adds one more ip address to the end of the ip.txt file
    $date = date("H:i:s d M, Y");
    $fp = fopen($location_ip,"a");
    fputs($fp, "Date: $date IP: $REMOTE_ADDR \n");
    fclose($fp);
    ?>
