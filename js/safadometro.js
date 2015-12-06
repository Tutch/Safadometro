	//BOO! Um código feioso!
		var value;
	    $(document).ready(function() {
	    	$('#safabutton').prop('disabled', true);



	        $( "#datepicker" ).datepicker({
	        	onSelect: function(date) {
		            $('#safabutton').prop('disabled', false);
		            $('#safabutton').addClass('activeButton');

		        },
	        	monthNames: [ "Janeiro", "Fevereiro", "Março", "April", "Maio", "Julho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ] ,
	        	monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Agos", "Set", "Out", "Nov", "Dez" ] ,
	            dateFormat: 'd M y' ,
		        dayNames: [ "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo" ] ,
		       dayNamesMin: [ "Seg", "Ter", "Quar", "Quin", "Sex", "Sáb", "Dom" ] ,
		       dayNamesShort: [ "Seg", "Ter", "Quar", "Quin", "Sex", "Sáb", "Dom" ] ,
		       maxDate: "+0d",
		       changeMonth: true,
		       changeYear: true,
		       yearRange: "1900:2050"

	        });
	       

	    });

	  $(document).ready(function() {
		  $("#safabutton").click(function() {


		    var dateOfBirth = $( '#datepicker' ).datepicker({ dateFormat: 'D, d M y' }).val();

		    if(dateOfBirth =='6 Set 88'){
		    	$('#safado').text("99%");
			    $('#anjo').text("1%");
		    }else{
			    var dateParts = dateOfBirth.split(" ");	


			    var dayN = 50 - dateParts[0];
			    var yearN = dateParts[2]/100;
			    var monthN;

			    switch(dateParts[1]){
			    	case 'Jan':
			    		monthN = 1;
			    		break;

			    	case 'Fev':
			    		monthN = 2;
			    		break;

			    	case 'Mar':
			    		monthN = 3;
			    		break;

			    	case 'Abr':
			    		monthN = 4;
			    		break;

			    	case 'Mai':
			    		monthN = 5;
			    		break;

			    	case 'Jun':
			    		monthN = 6;
			    		break;

			    	case 'Jul':
			    		monthN = 7;
			    		break;

			    	case 'Agos':
			    		monthN = 8;
			    		break;

			    	case 'Set':
			    		monthN = 9;
			    		break;

			    	case 'Out':
			    		monthN = 10;
			    		break;

			    	case 'Nov':
			    		monthN = 11;
			    		break;

			    	case 'Dez':
			    		monthN = 12;
			    		break;

			    	default:
			    		monthN = 0;
			    		break;
			    }

			    var safa = monthN + (dayN * yearN) * 1.35;
			    if(safa >99){
			    	safa = 99;
			    }
			    var anjo = 100 - safa;
			    $('#safado').text(parseFloat(safa).toFixed(1)+"%");
			    $('#anjo').text(parseFloat(anjo).toFixed(1)+"%");
			}

			$('#safadezaOculta').removeClass('hidden');


		  })
	})
