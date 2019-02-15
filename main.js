var arr =['academia','história','historia','mercado','garra','aberto','o que oferece','beneficios','serviços'];
var arr2=['musculacao','musculação','musculaçao','musculacão','ginastica','ginástica','pilates','yoga','muay','thai','muay-thai','muay thai','jiu','jitsu','jiu-jitsu','jiu jitsu','boxe','luta','lutas','corrida','modalidades','modalidade','exercicios','exercicio'];
var arr3=['planos','preços','preco','trimestral','semestral','anual','avulso','avulsa','aulas jiu','aulas jiu-jitsu','aulas jiu jitsu','aula jiu','aula jiu-jitsu','aula jiu-jitsu','universitário','graduacao','universidade','planos e preços','universitario','graduação','graduaçao','economico','plano economico','barato'];
var arr4=['garra funcional','suspension','suspensao','suspensão','grit','power','dance','power dance','power-dance','funcional','abds','ABDS','jump','power jump','bike','horarios bike','horarios','horario bike','horario funcional','horario jump','horarios power jump','horários bike','horários funcional','horários jump','horários power jump','mix','garra mix','horários garra mix','horarios garra mix','gluteo','express','gluteo express','horario gluteo','horario gluteo express','horario segunda','horários segunda','horario terca','horario terça','horários terca','horários terça','segunda','terca','terça','quarta','quinta','sexta','horários segunda','horario quarta','horários quarta','horário quarta','horario quinta','horários quinta','horário quinta','horario sexta','horário sexta','horários sexta','demanhã','demanha','manha','manhã','tarde','noite','horario noite','horário noite','horários noite','horários noite','horários a noite','horario a noite','horario a noite','horários a tarde','horário a tarde','horarios demanha','horario demanha','horário demanha','horários manha','horario demanhã','horário demanhã','horários demanhã','horários','horario','horário','horarios a noite','horario a tarde','horarios a tarde'];
var arr5=['emprego','contato','curriculum','curriculo','enviar curriculo','email','e-mail','reclamacao','duvida','vagas de emprego','dúvida','dúvidas','duvidas','mensagem','entrar em contato','vagas'];

function checkarr(arr){
    return (arr == document.getElementById('myInput').value);
}

function checkarr(arr2){
    return (arr2 == document.getElementById('myInput').value);
}

function checkarr(arr3){
    return (arr3 == document.getElementById('myInput').value);
}

function checkarr(arr4){
    return (arr4 == document.getElementById('myInput').value);
}

function checkarr(arr5){
    return (arr5 == document.getElementById('myInput').value);
}

function myFunction() {

    if(document.getElementById('myInput').value == arr.find(checkarr)){
    location.replace("./tabs/academia.html");
    return false;
    }

    if(document.getElementById('myInput').value == arr2.find(checkarr)){
        location.replace("./tabs/modalidades.html");
        return false;
    }

    if(document.getElementById('myInput').value == arr3.find(checkarr)){
        location.replace("./tabs/planos.html");
        return false;
    }

    if(document.getElementById('myInput').value == arr4.find(checkarr)){
        location.replace("./tabs/horarios.html");
        return false;
    }

    if(document.getElementById('myInput').value == arr5.find(checkarr)){
        location.replace("./tabs/contato.html");
        return false;
    }

    else{
        alert('Não encontramos o que você procura. Tente novamente');
    }

  }
