//#region Home
$('#btnEnviarReceberNoticias').click(function(){  
    var continua = true 
    $('#formReceberNoticias input').each(function (){
        if ($(this).val() == '') {
            $(this).css('background-color', '#FFDAB9')
            continua = false
        }
    })    
    if (!$('#exampleCheck1').is(':checked')) {
        $('.form-check-label').css('color', 'red')   
        continua = false
    }    
    if (continua == true) {        
        $('#formReceberNoticias input').val('')                
        $('#exampleCheck1').prop('checked', false)
        $('#alertaSucesso').attr('hidden', false)   
        $('body').animate({
            scrollTop: $("#alertaSucesso").offset().top
        }, 2000);
    }
})

$('.form-check-input').click(function(){
    $('.form-check-label').css('color', 'black')   
})

$('#formReceberNoticias input').click(function (){    
    $(this).css('background-color', '#FFFFFF')    
})
//#endregion

//#region Login
$(function () {
    var now = new Date   
    var msg = 'a'
    if (now.getHours() >= 6 && now.getHours() <= 12) {
        msg = 'bom dia!'
    } else if (now.getHours() >= 12 && now.getHours() <= 18) {
        msg = 'boa tarde!'
    }else{
        msg = 'boa noite!'
    }
    $('#msg').text('Olá, ' + msg)
})

$('#btnEntrar').click(function(){
    var continua = true
    continua = true
    $('#formLogin input').each(function (){
        if ($(this).val() == '') {
            $(this).css('background-color', '#FFDAB9')
            continua = false
        }
    })
    if (continua == true) {
        window.location.href = "index.html";
    }
})

$('#formLogin input').click(function (){    
    $(this).css('background-color', '#FFFFFF')    
})

$('#btnEsqueciMinhaSenha').click(function () { 
    if ($('#userLogin').val() == '') {
        $('#userLogin').css('background-color', '#FFDAB9')
    }else{
        alert('Um link para recuperação de senha foi enviado para seu e-mail.')
    }
 })
//#endregion

//#region Cadastro
$('#btnCadastrar').click(function () {    
    var continua = true
    $('#formCadastro input').each(function () {
        if ($(this).val() == '') {
            $(this).css('background-color', '#FFDAB9')            
            continua = false
        } 
     })
     if (continua == true) {
         alert('Cadastrado com sucesso!')        
        window.location.href = 'index.html' 
    }         
})

$('#formCadastro input').click(function (){    
    $(this).css('background-color', '#FFFFFF')    
})


//#endregion




//#region document.ready / window.ready
/*    
    $(document).ready(function(){
        alert('DOM carregado!');     
    });
    
    Forma reduzida do evento document.ready:
    $(function(){
        alert('DOM carregado 2!');    
    })

    $(window).ready(function(){
    alert('Elementos carregados!');     
})
*/
//#endregion

//#region hide / delay / css / fadeIn
/*
    $('#primeiroBotao').hide();
    $('#primeiroBotao').delay(1000);
    $('#primeiroBotao').css('color', 'red');
    $('#primeiroBotao').fadeIn('slow'); 
*/
//#endregion

//#region encadeamento em linha e em bloco 
/*
    Encadeamento em linha:
    $('#primeiroBotao').hide().delay(1000).css('color', 'red').fadeIn('slow');

    Encadeamento em bloco:
    $('#primeiroBotao')
        .hide()
        .delay(1000)
        .css('color', 'red')
        .fadeIn('slow');   
*/
//#endregion

//#region find
/*
$('p').find('span').css('color', 'red'); //find procura pelo elemento filho de outro elemento
*/ 
//#endregion
