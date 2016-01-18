$(document).ready(function() {

    $('#btn-add').click(addEvent);
    $('#text-box').on("keyup", function (e) {
        if (e.keyCode == 13) {
            addEvent();
        }
    });

    function addEvent() {

        var toAdd = $('input[name=checkListItem]').val();
        if (toAdd) {

            var toDoElement = $('<li class="item">' + toAdd + '</li>');
            $('#todo-list').append(toDoElement);
            $('input[name=checkListItem]').val('');

            var deleteButton = $('<span class="delete-link">x</span>');
            $(toDoElement).append(deleteButton);

            var checkbox = $('<input type="checkbox">');
            $(toDoElement).append(checkbox);
            $(checkbox).addClass('check');
        }
    };

    $(document).on('click', '.delete-link', function () {
        $(this).parent().remove();
    });


//    console.log('checkbox2', check);

    $(document).on('click', '.check', function() {
        $(this).parent().toggleClass('checked');
    });


});
