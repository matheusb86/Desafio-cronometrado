

const $submit = document.querySelector('.submit')




$submit.addEventListener('click', function(e){
    
    e.preventDefault();

    let $name = document.querySelector('#Name');
    let $email = document.querySelector('#E-mail');
    let $senha = document.querySelector('#Senha');
    let $csenha = document.querySelector('#Confirme-senha');
    
    const Iname = $name.value;
    const Iemail = $email.value;
    const Isenha = $senha.value;
    const ICsenha = $csenha.value;


    if((Iname.value == null) 
        ||(Isenha.value == null) 
            ||(ICsenha.value == null)){
                alert("preencha todos os campos")
        }
            if((Iname.length > 3) 
                &&(Isenha === ICsenha) 
                ){
                console.log("Cadastro realizado com sucesso!")
            }else{ alert("Complete os campos corretamente")}

    })


    function validarEmail(){
        var email = document.querySelector('#E-mail');
        var error = document.querySelector('#error-email');
        
        if(!email.checkValidity()){
          error.innerHTML = "Email invalido";  
        }
         
      }
      
      function redefinirMsg(){
        var error = document.querySelector('#error-email');
        if (error.innerHTML == "Email invalido"){
          error.innerHTML = "";
        }
      }