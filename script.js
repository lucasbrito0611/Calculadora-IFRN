const form = document.getElementById('gradesform');
const resultado_media = document.getElementById('grade');
const div_media = document.getElementById('totalgrade1');
const nota_que_falta = document.getElementById('missing');
const div_nota_que_falta = document.getElementById('totalgrade2');
const situacao = document.getElementById('whatsituation');
const div_situacao = document.getElementById('situation');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const period = document.getElementById("period_").value;
  if (period == "0") {
    alert("Por favor, selecione um período."); 
  } 
});

function calculatesemester(event1) {
    event1.preventDefault();
    let firstsemester = document.getElementById('first').value;
    let secondsemester = document.getElementById('second').value;

    const semester = 5;
    const pass_grade1 = 60;

    if (firstsemester == '') {
        alert("Por favor, preencha os valores.");
    }

    let bi_1 = firstsemester * 2;
    let bi_2 = secondsemester * 3;

    let average_semester = ((bi_1) + (bi_2)) / semester;
    average_semester = Math.round(average_semester);
    resultado_media.innerHTML = average_semester;
    div_media.style.display = "block";

    let missing_semester = 0;

    if (firstsemester != '' && secondsemester == '') {
        missing_semester = ((pass_grade1 * semester) - bi_1) / 3;
        missing_semester = Math.ceil(missing_semester);
        
        nota_que_falta.innerHTML = missing_semester;
        div_nota_que_falta.style.display = "block";
        div_nota_que_falta.textContent = `Você precisa de ${missing_semester} no 2º bimestre para ser aprovado.`

        situacao.innerHTML = 'Cursando';
        div_situacao.style.display = "block";
    }

    if (firstsemester != '' && secondsemester != '') {
        if (average_semester >= 60) {
            situacao.innerHTML = 'Aprovado';
            div_situacao.style.display = "block";
            div_nota_que_falta.style.display = "none";
        }
        else {
            missing_semester = (pass_grade1 * 2) - average_semester;
            missing_semester = missing_semester.toFixed(0);
            nota_que_falta.innerHTML = missing_semester;
            div_nota_que_falta.style.display = "block";
            div_nota_que_falta.textContent = `Você precisa de ${missing_semester} na prova final para ser aprovado.`
            
            if (missing_semester <=100) {
                div_nota_que_falta.style.display = "block";
                situacao.innerHTML = 'Prova Final';
                div_situacao.style.display = "block";
            }
            
            else {
                situacao.innerHTML = 'Reprovado';
                div_situacao.style.display = "block";
                div_nota_que_falta.style.display = "none";
            }


        }
    }
}

function calculateanual(event2) {
    event2.preventDefault();
    let first = document.getElementById('first').value;
    let second = document.getElementById('second').value;
    let third = document.getElementById('third').value;
    let fourth = document.getElementById('fourth').value;
    let final = document.getElementById('finalinput');
    
    const anual = 10;
    const pass_grade = 60;
    
    if (first == '' | second == '') {
        alert("Por favor, preencha os dois primeiros bimestres.");
    }
    
    let first_bi = first * 2; 
    let second_bi = second * 2;
    let third_bi = third * 3; 
    let fourth_bi = fourth * 3; 
    
    let missing_anual = 0;
    let missing_anual_3 = 0;
    
    let average_anual = ((first_bi) + (second_bi) + (third_bi) + 
    (fourth_bi)) / anual;
    average_anual = Math.round(average_anual);
    resultado_media.innerHTML = average_anual;
    
    if (first != '' && second != '' && third == '' && fourth == '') {
        div_media.style.display = "block";
        
        missing_anual = ((anual * pass_grade) - (first_bi + second_bi)) / 6
        missing_anual = missing_anual.toFixed(0);
        missing_anual_3 = ((anual * pass_grade) - (first_bi + second_bi)) / 3 
        missing_anual_3 = Math.ceil(missing_anual_3);
        
        nota_que_falta.innerHTML = missing_anual;
        div_nota_que_falta.style.display = "block";
        
        if (missing_anual_3 <= 100) {
            div_nota_que_falta.textContent = `Você precisa de ${missing_anual_3} no 3º bimestre ou ${missing_anual} no 3º e 4º bimestre para ser aprovado.`
        }

        else {
            div_nota_que_falta.textContent = `Você precisa de ${missing_anual} no 3º e 4º bimestre para ser aprovado.`
        }

        situacao.innerHTML = 'Cursando';
        div_situacao.style.display = "block";
        
    }

    if (third != '' && fourth == '') {
        div_media.style.display = "block";
        
        missing_anual = ((anual * pass_grade) - (first_bi + second_bi + third_bi)) / 3
        missing_anual = missing_anual.toFixed(0);
        situacao.innerHTML = 'Cursando';
        div_situacao.style.display = "block";
    
        if (missing_anual > 0 & missing_anual <= 100) {
            nota_que_falta.innerHTML = missing_anual;
            div_nota_que_falta.style.display = "block";
            div_nota_que_falta.textContent = `Você precisa de ${missing_anual} no 4º bimestre para ser aprovado.`
        }
    
        if (missing_anual <= 0) {
            situacao.innerHTML = 'Aprovado';
            div_situacao.style.display = "block";
        }
    
        if (missing_anual > 100) {
            let average_w100 = ((first_bi) + (second_bi) + (third_bi) + (300)) / anual;
            let final_test = (pass_grade * 2) - average_w100; 
            final_test = Math.ceil(final_test);
        
            nota_que_falta.innerHTML = missing_anual;
            div_nota_que_falta.style.display = "block";
            div_nota_que_falta.textContent = `Você precisa de 100 no 4º bimestre e ${final_test} na prova final para ser aprovado.`
        }
    }

    if (third != '' && fourth != '') {
        div_media.style.display = "block";
        
        if (average_anual >= 60) {
            situacao.innerHTML = 'Aprovado';
            div_situacao.style.display = "block";
            div_nota_que_falta.style.display = "none";
        }
    
        else {
            missing_anual = (pass_grade * 2) - average_anual
            nota_que_falta.innerHTML = missing_anual;
            div_nota_que_falta.textContent = `Você precisa de ${missing_anual} na prova final para ser aprovado.`
            
            if (missing_anual <= 100) {
                div_nota_que_falta.style.display = "block";
                situacao.innerHTML = 'Prova Final';
                div_situacao.style.display = "block";
            }
            
            else {
                situacao.innerHTML = 'Reprovado';
                div_situacao.style.display = "block";
            }
        }
    }
}

function atualizouSelect() {
    let select = document.querySelector('#period_')
    let optionvalue = select.options[select.selectedIndex];
    let value = optionvalue.value;
    
    if (value == 'Semestral') {
        document.getElementById('bimester3').style.display = "none";
        document.getElementById('bimester4').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
        form.addEventListener('submit', calculatesemester);
    }

    else {
        document.getElementById('bimester3').style.display = "block";
        document.getElementById('bimester4').style.display = "block";
        document.getElementById('third').style.display = "block";
        document.getElementById('fourth').style.display = "block";
        form.addEventListener('submit', calculateanual);
    }
}

div_media.style.display = "none";
div_nota_que_falta.style.display = "none"; 
div_situacao.style.display = "none";  

document.getElementsByClassName('forminput').addEventListener('input', calculateanual);
document.getElementsByClassName('forminput').addEventListener('input', calculatesemester);