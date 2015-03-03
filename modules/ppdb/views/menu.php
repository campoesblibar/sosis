<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#loadmenu">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
      	<img src="<?php echo base_url('images/twh.png'); ?>"  width="75" style="padding-bottom=50px">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="loadmenu">
      <ul class="nav navbar-nav navbar-left">
        <li><a href="#"><h4>SMPN 3 Purbalingga</h4></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="active"> <a href="<?php echo base_url(); ?>">Home</a></li>
        <li>
        	<a href="<?php echo base_url('ppdb/c_ppdb/daftar'); ?>">Daftar<span class="sr-only">(current)</span></a>
        </li>
        <li><a href="#">Alur Pendaftaran</a></li>
        <li><a href="#">Ketentuan Pendaftaran</a></li>
        <a href="<?php echo base_url('ppdb/c_ppdb/login'); ?>"
         <form class="navbar-form navbar-right">
       	 <button type="submit" class="btn btn-inverse">Login</button>
     	 </form> 
     	 </a>
      </ul>
    </div>
  </div>
</nav>
