<?php
  
$zip = new ZipArchive;
  
// Zip File Name
if ($zip->open('build.zip') === TRUE) {
  
    // Unzip Path
    $zip->extractTo('build');
    $zip->close();
    echo 'Unzipped Process Successful!';
} else {
    echo 'Unzipped Process failed';
}
?>