(function(window, $, undefined){

    //~~~~~~~~~~~~~~~~~~~~~TOGGLE VARIOUS UI ELEMENTS OFF FOR INITIAL LOAD~~~~~~~~~~~~~~~~~~~\\
    $(".zoom").toggle();
    $('.sub_form').toggle();
    $('#ctaNot_button').toggle();

    //~~~~~~~~~~~~~~~~~~INITIATE PARALLAX BACKGROUND~~~~~~~~~~~~~~~~~~~~~~~\\
    $.stellar({
          horizontalScrolling: false,
          verticalOffset: 0
      });    

    //~~~~~~~~~~~~~~~~~~~~~~~~GRID ZOOM CONTENT~~~~~~~~~~~~~~~~~~~~~~\\
    var berryCollege = {
      name:'berryCollege',
      heads:['Oak Hill Garden', 'Oak Hill Garden', 'Cage Recreation Center', 'Cage Recreation Center'],
      captions:['Landscape and maintenance plan', 'Landscape and maintenance plan', 'Site, landscape, and fountain design', 'Site, landscape, and fountain design']
    }
    var sherwoodMemorialPark = {
      name:'sherwoodMemorialPark',
      heads:['Mausoleum', 'Mausoleum', 'Mausoleum', 'Mausoleum'],
      captions:['With paperbank maple allee', 'With osage orange grove', 'With grass roof', 'Site plan']
    }
    var davidsonCollege = {
      name:'davidsonCollege',
      heads:['College union', 'Historic core', 'Richardson Plaze', 'Athletic building'],
      captions:['Amphitheatre entry', 'Walkway - fire road', 'paved plaza reworked as greenspace', 'Plaza - road - crosswalk']
    }
    var midlothianResidence = {
      name:'midlothianResidence',
      heads:['Deck pergola', 'Deck pergola', 'Before', 'Fountain'],
      captions:['Deck and koi pond', 'Deck and koi pond', '', 'Deck level founitain']
    }
    var fountainsAndFeatures = {
      name:'fountainsAndFeatures',
      heads:['Custom gurgle fountain', 'Custom sculptural fountain', 'Koi and fish pond', 'Stacked wood wall'],
      captions:['Drilled river rock and slate', 'Drilled river rock and slate', '', '']
    }
    var blandyArboretum = {
      name:'blandyArboretum',
      heads:['Stone walls', 'amphitheatre shape', 'proposed wildflower terrace design', 'fourth'],
      captions:['Define shape and create levels', 'creates large and small scall seating areas', '', '']
    }
    var charlottesvilleAmphitheatre = {
      name:'charlottesvilleAmphitheatre',
      heads:['mall terminus seatwall', 'Wall showing undulating landform', 'Site plan proposal', 'Site plan details'],
      captions:['', '', '', '']
    }
    var wintergreenResort = {
      name:'wintergreenResort',
      heads:['Main entry sign panel', 'Terrace walkway and kiosk', 'Terrace and stage design', 'Terrace overlook seatwall'],
      captions:['', '', '', '']
    }
    var emoryAndHenryCollege = {
      name:'emoryAndHenryCollege',
      heads:['Entry gateway', 'New brinck walkways', 'Master plan', 'Terrace overlook seatwall'],
      captions:['New stone gate and walls based on historic', '', '', '']
    }
    var name_key = [berryCollege, sherwoodMemorialPark, davidsonCollege, midlothianResidence, fountainsAndFeatures, blandyArboretum, charlottesvilleAmphitheatre, wintergreenResort, emoryAndHenryCollege];

    //
    var i = 1;
    var thisZoom = {};
    window.onload = function(){
     for (i = 0; i<name_key.length; i++){
        thisZoom = name_key[i];
        img1 = new Image();
        img2 = new Image();
        img3 = new Image();
        img4 = new Image();

        img1.src = "./assets/graphics/grid_images/"+thisZoom.name+"/"+thisZoom.name+"_content_1.jpg";
        img2.src = "./assets/graphics/grid_images/"+thisZoom.name+"/"+thisZoom.name+"_content_2.jpg";
        img3.src = "./assets/graphics/grid_images/"+thisZoom.name+"/"+thisZoom.name+"_content_3.jpg";
        img4.src = "./assets/graphics/grid_images/"+thisZoom.name+"/"+thisZoom.name+"_content_4.jpg";

        name_key[i].images = [img1, img2, img3, img4];
     }
    }
    
    //~~~~~~~~~~~~~~~~~~POPULATE ZOOM SLIDESHOW~~~~~~~~~~~~~~~~~\\
    $(".grid div").not(".clearfix").click(function(){
      $('#zoom_carousel').carousel(0);
      thisZoom = name_key[this.id.split('_')[1] - 1 ]
      for (i = 0; i < 4; i++){
        $('#slide_'+(i+1)+' img').replaceWith(thisZoom.images[i]);
        $('#slide_'+(i+1)+' h1').text(thisZoom.heads[i]);
        $('#slide_'+(i+1)+' p').text(thisZoom.captions[i]);
      }
      $(".grid" ).toggle();
      $(".zoom" ).fadeToggle('slow');
    });

    //~~~~~~~~~~~~~~CLOSE GRID ZOOM SLIDESHOW~~~~~~~~~~~~~~~\\
    $("#zoom_close").click(function(){
      $(".grid, .zoom" ).toggle();
    });

    //~~~~~~~~~KEEPS ...ACTUALLY IM NOT SURE WHY THIS IS DONE~~~~~~~~~~~~~~~~\\
    var cw = $('.square').width() * 2;
    $('.sqare').css({
        'height': cw + 'px'
    });

    //~~~~~~~~~~~~FORM AND STEP BY STEP TOGGLE~~~~~~~~~~~~~~~~~~\\
    $('.cta').click(function(){
      $('.sub_form, #plan_carousel').slideToggle();
      $('.cta').toggle('slow');
    });
  
   	//~~~~~~~~~~~~~~~SLIDESHOW~~~~~~~~~~~~~~~~\\
   	$('#fadein_previousWork img:gt(0)').hide();
    setInterval(function(){
    $('#fadein_previousWork :first-child').fadeOut()
    	.next('img').fadeIn()
        .end().appendTo('#fadein_previousWork');}, 
    3000);
    
    $('#fadein_steps img:gt(0)').hide();
    setInterval(function(){
    $('#fadein_steps :first-child').fadeOut()
    	.next('img').fadeIn()
        .end().appendTo('#fadein_steps');}, 
    3000);
    
    //~~~~~~~~~~~~~~~IMAGE LOADING ON FORM~~~~~~~~~~~~~~~~~~\\
    $(document).on('change', '.btn-file :file', function() {
      $("#photoCount").slideToggle();
        var input = $(this);
        var numFiles = input.get(0).files ? input.get(0).files.length : 1;
        var label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
      $("#photoCount").text(numFiles+" Files Selected.").slideToggle('slow');
    });

    //~~~~~~~~~~~~~FORM SUBMISSION~~~~~~~~~~~~~~~\\
   	var regexEmail = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
 	  var email = "";
     $('body').on('click', '#submitForm', function(){
      console.log("called!")
     	var form = new FormData($('#myform')[0]);
   	 	email = $('#contact_email').val();
  		if (regexEmail.test(email)){
  			if ( email != $('#contact_email_confirm').val()){
  				alert("email doesnt match");
  				return;
  			}
  			else{  			
  				$.ajax({
				    type: "POST",
				    url: "./assets/php/email_v2.php",
				    data: form,
				    async: false,
				    success: function(res){
				        if(res.indexOf(":") < 0){
                  alert("Submission Recieved!")
                }
                else{
                  alert("Oops, looks like out email is down!")
                }
				    },
				    cache: false,
	                contentType: false,
	                processData: false
				});
  			}
  		}
  		else{
  			alert("email address invalid");	
  			return;
  		}
    });    
 })(window, jQuery);