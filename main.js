$(document).ready(function() {

    $('form').on('submit', function (e) {
        
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style=" display: "></li>');
        

        $(` 
            <div class="caixa">
                <h3 class="nome-tarefa">${tarefaNova}</h3>
            </div>

        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#tarefa-nova').val('');

    })

    $("ul").on('click', 'li', function(){
        $(this).toggleClass("risco");
    })

})