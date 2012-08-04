$(document).ready(function() {

    function filter(message) {
        alert(message);
    }
    
    $('#my_submit').on('click', function(){
        var message = $('#my_input').val();
        filter(message);
        $('#my_input').val(' ');
        return false;
    });
    
	$("#add").on("click", function(){
		var $table = $("#nkd");
		
		var $rows = $table.find("tbody tr");
		$rows.last().remove();
		
		var insert_me = "<tr> <td>100</td> <td class='bid_price'>$100</td>"
		insert_me = insert_me + "<td class='ask_price'>$200</td><td>200</td></tr>"
		
		$rows.first().before(insert_me);
	});


    $('#autotrader').toggle(start_autotrader, stop_autotrader);
    
    function start_autotrader() {
        $('#nkd_speedbump').hide();
        $('#autotrader').html('Stop Autotrader');
        $('#autotrader').removeClass('btn-success');
        $('#autotrader').addClass('btn-danger');
    }
    
    function stop_autotrader() {
        $('#nkd_speedbump').show();

        $('#autotrader').html('Start Autotrader');
        $('#autotrader').removeClass('btn-danger');
        $('#autotrader').addClass('btn-success');
    }
    
})