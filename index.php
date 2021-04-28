<?php include 'header.php';?>
<main id="top">
  <div id="slider">
    <?php
      $images = glob('media/slider/*.{jpg,png,gif}', GLOB_BRACE);
      foreach ($images as $image) {
      ?>
    <div class="slider-single" style="background-image: url(<?=$image?>)">
    </div>
    <?php }?>
  </div>
  <div id="flag">
    <?php include __DIR__ . '/media/flag.svg';?>
    <div id="stamp">
      <?php include __DIR__ . '/media/circle.svg';?>
    </div>
  </div>
  <div id="social-media">
    <div id="social-media-container">
      <?php include __DIR__ . '/media/fb.svg';?>
      <?php include __DIR__ . '/media/inst.svg';?>
    </div>
    <div id="social-media-text">Cooming soon...</div>
  </div>
</main>
<?php include 'footer.php';?>
