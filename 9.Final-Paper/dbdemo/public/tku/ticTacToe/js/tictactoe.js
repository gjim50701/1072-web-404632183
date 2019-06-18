$(document).ready(function () {



    let turn = 0; //even for player 'o',odd for player 'x'

    $('#board li').on('click', function () {
        if ($(this).hasClass('disable')) {
            alert('Already filled');
        } else if (turn % 2 == 0) {
            $(this).text('o');
            $(this).addClass('disable o');
        } else if (turn % 2 == 1) {
            $(this).text('x');
            $(this).addClass('disable x');
        }
        turn++;

        if(turn>4){
        checkStatus(turn);
        }
    })

    
    

    $.fn.reset = function () {
        $('#board li').text('+');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        $('#board li').removeClass('disable');
        turn=0;
    }



    $('#reset').on('click', function () {
        $.fn.reset();
    })

})

function checkStatus(turn){
    turn++;
    if($('#p1').text()==$('#p2').text()&&$('#p1').text()==$('#p3').text()&&$('#p1').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p1').text()==$('#p4').text()&&$('#p1').text()==$('#p7').text()&&$('#p1').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p1').text()==$('#p5').text()&&$('#p1').text()==$('#p9').text()&&$('#p1').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p2').text()==$('#p5').text()&&$('#p2').text()==$('#p8').text()&&$('#p2').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p3').text()==$('#p6').text()&&$('#p3').text()==$('#p9').text()&&$('#p3').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p3').text()==$('#p5').text()&&$('#p3').text()==$('#p7').text()&&$('#p3').text()!='+'){
        alert('player'+(turn%2+1)+' win');
    }else if($('#p4').text()==$('#p5').text()&&$('#p4').text()==$('#p6').text()&&$('#p4').text()!='+'){
        alert('player'+(turn%2+1)+ 'win');
    }else if($('#p7').text()==$('#p8').text()&&$('#p7').text()==$('#p9').text()&&$('#p7').text()!='+'){
        alert('player'+(turn%2+1)+ 'win');
    }

}


