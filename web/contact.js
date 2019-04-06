// function saveData()
// {
//     const subject = document.getElementById('subject');
//     const massage = document.getElementById('massage');
//     const name = document.getElementById('name');
//     const gender = document.getElementById('gender');
//     const phone = document.getElementById('phone');
//     const email = document.getElementById('email');
//     inputData(subject.value, massage.value, name.value, gender.value, 
//         phone.value, email.value)
// }

// function inputData(subject, massage, name, gender, phone, email)
// {
//     var firebaseRef = firebase.database().ref("users");
//     firebaseRef.push(
//         {
//             subject: subject, 
//             massage: massage, 
//             name: name, 
//             gender: gender, 
//             phone: phone, 
//             email: email
//         }
//     );

//     console.log("Input Success");
//     Submit();
// }

    const contact = document.getElementById('contact');
    const subject = document.getElementById('subject');
    const massage = document.getElementById('massage');
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    contact.addEventListener('submit', Submit);

function Submit(e)
{    
    e.preventDefault();

        // if(document.getElementById('subject').value == "")
        // {
        // alert('PLEASE INPUT SUBJECT');
        // return false;
        // }

        // if(document.getElementById('massge').value == "")
        // {
        // alert('PLEASE INPUT MASSAGE');
        // return false;
        // }

        // if(document.getElementById('name').value == "")
        // {
        // alert('PLEASE INPUT NAME');
        // return false;
        // }

        // if(document.getElementById('radio1').checked  == false && document.getElementById('radio2').checked  == false )
        // {
        // alert('PLEASE CHECK GENDER TRUE');
        // return false;
        // }

        // if(document.getElementById('phone').value == "")
        //  {
        // alert('PLEASE INPUT PHONE');
        // return false;
        // }
    
        // if(document.getElementById('email').value == "")
        // {
        // alert('PLEASE INPUT E-MAIL');
        // return false;
        // }
    
        if(subject.value === '' || massge.value === '' || name.value === '' || radio1.checked  === false && radio2.checked  === false
        || phone.value === '' || email.value === '')
        {
            alert('PLEASE INPUT ALL DATA');
            return false;
        }
        
    const list = document.querySelector('show_submit');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${subject.value}</td>
    <td>${message.value}</td>
    <td>${name.value}</td>
    <td>${gender}</td>
    <td>${email.value}</td>
    <td>${phone.value}</td>
    <td><a class="btn btn-danger btn-sm delete"> X </a></td>
  `;

  list.appendChild(row);

        subject.value = '';
        message.value = '';
        name.value = '';
        email.value = '';
        phone.value = '';

}

document.querySelector('show_submit').addEventListener('click', (e) => 
{ 
    e.target.parentElement.parentElement.remove();
});