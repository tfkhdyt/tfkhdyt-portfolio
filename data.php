<?php

  $jumlah = 0;
  foreach ($data as $type) {
      $jumlah+= count($type);
  }
  $jumlah /= 5;
?>