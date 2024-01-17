$(document).ready(function() {
    $('form').on('subumit', function (e) {
        e.preventDefault();

        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li> </li>');
        $(`
            <div>
                <a href="${tarefaNova}" style="text-decoration: " />

                </a>
            </div>
        
        
        
        `)
        
    })



})