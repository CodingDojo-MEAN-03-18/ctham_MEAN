$(document).ready(function() {
    $('#form_adduser').submit(function() {
        $.get("https://api.github.com/users/"+$('input[name="username"]').val(), displayName)
        // console.log($(this).serialize());
        // $('tbody').append('<tr><td>' 
        //     + $('input[name="username"]').val() + '</td><td>'
        //     +'</td></tr>');
        return false;
    });
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function displayName(data) {
        console.log(data);
        let str = '${data}';
        $('tbody').append('<tr><td>' 
            + $('input[name="username"]').val() + '</td><td>'
            + `${data.name}</td></tr>`);
    }
})