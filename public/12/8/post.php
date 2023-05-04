<?php
//////// if ($dir = @fopen("tags.txt", "a")) { fputs($dir, "$post\n"); fclose($dir); }
//////////////style of the posting
$post = <<< HTML
<a href="$url" target="_blank">$name</a> <strong>&raquo; </strong>$msg<br>
HTML;
///////////////end


/////////////Style of thanks 
$thnks = <<< HTML
<font size="2" face="Arial, Helvetica, sans-serif">Thanks for posting your message. click <a href="board.shtml">here</a> to go back</font>
HTML;
/////////////////end


/////////// variables of the emoticons
$lol = "xD";
//////////// end


//////////////replacing the variables
$msg = str_replace("$lol","<img src=\"lol.gif\">",$msg);
/////////////end


////////////open the file
if ($dir = @fopen("tags.txt", "a")) { fputs($dir, "$post\n"); fclose($dir); }
//////////////////end


/////////////////////post the message
/* fputs($dir, "$post\n"); */
/////////////////////end


///////////////close the fiel 
/* fclose($dir); */
//////////end


////////////final comments
echo("$thnks"); 
///////////////////////end
?> 
