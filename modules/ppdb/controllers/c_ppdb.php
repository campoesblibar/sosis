<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| School of Information System
| Copyright Campoes Blibar
| Created By ian, tangguh, bing 25-02-2015
|---------------------------------
*/
class C_ppdb extends IAN_Controller{

	function __construct(){
        parent::__construct();
        //$this->load->model('ppdb/m_ppdb');
    }

    /* by Bing2 Call Index Page Controller*/
    public function index(){
    	$this->load->view('ppdb/header');
    	$this->load->view('ppdb/menu');

    	//Content Is Here By Bing-Bing 26-02-2015
    	$this->load->view('ppdb/home'); 

    	$this->load->view('ppdb/footer');
    }

    /* by Bing2 Call Daftar Page */
    public function daftar(){
    	$this->load->view('ppdb/header');
    	$this->load->view('ppdb/menu');

    	//Content Is Here By Bing-Bing 26-02-2015
    	$this->load->view('ppdb/daftar'); 

    	$this->load->view('ppdb/footer');	
    }

        /* by Bing2 Call Daftar Page */
    public function login(){
    	$this->load->view('ppdb/header');
    	$this->load->view('ppdb/menu');

    	//Content Is Here By Bing-Bing 26-02-2015
    	$this->load->view('ppdb/login'); 

    	$this->load->view('ppdb/footer');	
    }

}