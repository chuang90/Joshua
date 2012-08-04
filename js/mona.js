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
    

}
)