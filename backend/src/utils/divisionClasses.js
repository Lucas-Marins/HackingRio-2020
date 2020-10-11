const connection = require('../database/connection')


export default function divisionClasses(){
        


let runOdd;

if(alunos.length % 2 !== 0 ) {
    runOdd = true;
} else  {
    runOdd = false;
}

function selectRandom(){
    var n1 = Math.floor (Math.random() * alunos.length);
    var name = alunos[n1];
    alunos.splice(n1,1);
    return name;
}

function pairUp() {
    if (runOdd = true) {
        if (alunos.length > 3) {
            var student1 = selectRandom();
            var student2 = selectRandom();

            console.log(student1 + " & " + student2);
        }
        else if(alunos.length == 3){
            console.log(alunos[0] + " & " + alunos[1] + " & " + alunos[2]);
            alunos.splice(0,3);
        }

        else {
            if(alunos.length > 0){
                var student1 = selectRandom();
                var student2 = selectRandom();
                document.getElementById("partnerlist").innerHTML += student1 + " & " + student2 + '</br>';
            }
        }
    }
}

    pairUp(6);

}