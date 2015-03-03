<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>S.O.S.I.S</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">
	
		<link href="<?php echo base_url('load/ui/css/style.css'); ?>" rel='stylesheet' type='text/css'>
	</head>

	<body>
		<section class="container">
		    <div class="login">
		      <h1>School Information System</h1>
		      <?php echo form_open('welcome/validasi'); ?>
		        <p><input type="text" name="username" value="" placeholder="Username"></p>
		        <p><input type="password" name="password" value="" placeholder="Password"></p>
		        <p class="submit"><input type="submit" name="commit" value="Login"></p>
		      </form>
		    </div>
	  	</section>
	</body>
</html>