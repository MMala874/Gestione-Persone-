let people=[]

function aggiungiPersona(){
    let name=document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let email=document.getElementById("email").value;
    let birthdate=document.getElementById("birthdate").value;
    let phone=document.getElementById("phone").value;
    let country=document.getElementById("country").value;
    let province=document.getElementById("province").value;
    

    if(name==="" || surname==="" || email==="" || birthdate==="" || phone==="" || country==="" || province===""){
    alert("per favore compila tutti i campi");
    return;
    }

   let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailRegex.test(email)){
    alert("inserisci per favore un'email valida")
    return;
   }
   let phoneRegex=/^[0-9]{10}$/;
   if(!phoneRegex.test(phone)){
    alert("inserisci per favore un numero di telefono valido")
    return;
   } 
    let person={
        name:name,
        surname:surname,
        email:email,
        birthdate:birthdate,
        phone:phone,
        country:country,
        province:province
    }
    people.push(person);
    
    /* document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("email").value="";
    document.getElementById("birthdate").value="";
    document.getElementById("phone").value="";
    document.getElementById("country").value="";
    document.getElementById("province").value=""; */
}

function aggiornaTabella(){
    const personTable = document.getElementById('personTable');
    personTable.innerHTML = '';
        people.forEach((person, index) => {
            const
            row = `
                    <td>${person.name}</td>
                    <td>${person.surname}</td>
                    <td>${person.email}</td>
                    <td>${person.birthdate}</td>
                    <td>${person.phone}</td>
                    <td>${person.country}</td>
                    <td>${person.province}</td>
                    <td><button class="btn btn-outline" onclick="rimuoviPersona(${index})">Rimuovi</button></td>
            `;
            personTable.innerHTML += row;
        });
}

function rimuoviPersona(index) {
    people.splice(index, 1);
    aggiornaTabella();
}
