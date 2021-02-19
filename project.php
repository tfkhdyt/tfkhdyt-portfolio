<?php
  include "data.php";
  for($i=0;$i<$jumlah;$i++):
?>
<div class="col-lg-4 col-md-6 portfolio-item filter-<?=$data[$i]['tipe']?>">
  <div class="portfolio-wrap">
    <img src="<?=$data[$i]['foto']?>" class="img-fluid" alt="">
    <div class="portfolio-info">
      <h4><?=$data[$i]['nama']?></h4>
      <p><?=$data[$i]['deskripsi']?></p>
      <div class="portfolio-links">
        <a href="<?=$data[$i]['link']?>" target="_blank"><i class="bx bx-window-open"></i></a>
      </div>
    </div>
  </div>
</div>
<?php
  endfor;
?>