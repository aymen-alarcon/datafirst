var etudiants = [
    {id:0,"image":'user.png',name:'Ahmed Chababa',
    class:'TSDI','date':'12/02/2000'},
    {id:1,"image":'user.png',name:'Imane Chababa',
    class:'TSDI','date':'12/02/2000'},
    {id:2,"image":'user.png',name:'Salima Chababa',
    class:'TSDI','date':'12/06/2000'}
];

var updateId;

function ReadEtudiants(etudiantsP){
document.getElementById("etudiants").innerHTML=""
for (let index = 0; index < etudiantsP.length; index++) {
    const element = etudiantsP[index];
    document.getElementById("etudiants").innerHTML+=
        `<tr class="etudiant">
        <td class="img">
            <img src="${element.image}" alt="">
        </td>
        <td class="name">
            ${element.name}                    
        </td>
        <td class="class">
            ${element['class']}
        </td>
        <td class="date">
            ${element['date']}
        </td>
        <td class="edit">
            <button onclick="prepareupdateEtudiant(${element['id']})" >Modifier</button>
        </td>
        <td class="delete">
            <button onclick="supprimerEtudiant(${element['id']})" >Supprimer</button>
        </td>
    </tr>` 
}
}

function prepareupdateEtudiant(idP){
    for (let index = 0; index < etudiants.length; index++) {
        const element = etudiants[index];
        if(element.id == idP){
            updateId = element.id;
            document.getElementById("updateName").value=element.name;
            document.getElementById("updateClass").value=element.class;
            document.getElementById("updateDate").value=element.date;
        }
    }
}

function supprimerEtudiant(idP){

    for (let index = 0; index < etudiants.length; index++) {
        const element = etudiants[index];
        if(element.id == idP){
            etudiants.pop(index);
        }
    }
    ReadEtudiants(etudiants);
}

function updateEtudiant(){
    for (let index = 0; index < etudiants.length; index++) {
        const element = etudiants[index];
        if(element.id == updateId){
            element.name = document.getElementById("updateName").value;
            element.class = document.getElementById("updateClass").value;
            element.date = document.getElementById("updateDate").value;
        }
    }
    ReadEtudiants(etudiants);
    updateId = undefined;
}

function createEtudiant(){
    const image = "user.png";
    const name = document.getElementById("createName").value;
    const classe = document.getElementById("createClass").value;
    const date = document.getElementById("createDate").value;
    const etudiant = {id:etudiants.length,image,name,class:classe,date};
    etudiants.push(etudiant);
    ReadEtudiants(etudiants);
}

ReadEtudiants(etudiants);