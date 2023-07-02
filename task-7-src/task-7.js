function addStudent(){
    let name=document.getElementById('name').value;
    let regID=document.getElementById('regID').value;
    
    let subject1=document.getElementById("subject1").value;
    let internal1=Number(document.getElementById('internal1').value);
    let external1=Number(document.getElementById('external1').value);
    let total1=internal1+external1;

    let subject2=document.getElementById("subject2").value;
    let internal2=Number(document.getElementById('internal2').value);
    let external2=Number(document.getElementById('external2').value);
    let total2=internal2+external2;

    let subject3=document.getElementById("subject3").value;
    let internal3=Number(document.getElementById("internal3").value);
    let external3=Number(document.getElementById("external3").value);
    let total3=internal3+external3;

    let subject4=document.getElementById("subject4").value;
    let internal4=Number(document.getElementById("internal4").value);
    let external4=Number(document.getElementById("external4").value);
    let total4=internal4+external4;

    let subject5=document.getElementById("subject5").value;
    let internal5=Number(document.getElementById("internal5").value);
    let external5=Number(document.getElementById("external5").value);
    let total5=internal5+external5;

    let gpa=(total1+total2+total3+total4+total5)/50;

    let studentDetails={
        name : name,
        regID : regID,
        subject1 : subject1,
        internal1 : internal1,
        external1 : external1,
        total1 : total1,
        subject2 : subject2,
        internal2 : internal2,
        external2 : external2,
        total2 : total2,
        subject3 : subject3,
        internal3 : internal3,
        external3 : external3,
        total3 : total3,
        subject4 : subject4,
        internal4 : internal4,
        external4 : external4,
        total4 : total4,
        subject5 : subject5,
        internal5 : internal5,
        external5 : external5,
        total5 : total5,
        gpa : gpa
    }

    console.log(studentDetails);

    if(localStorage.getItem("Student-marklist")==null){
        let marklist_array = [];
        marklist_array.push(studentDetails);
        localStorage.setItem("Student-marklist",JSON.stringify(marklist_array));
    }
    else{
        let marklist_array=JSON.parse(localStorage.getItem("Student-marklist"));
        marklist_array.push(studentDetails);
        localStorage.setItem("Student-marklist",JSON.stringify(marklist_array));    
    }

    displayStudent()

}

function displayStudent(){
    let student=JSON.parse(localStorage.getItem("Student-marklist"));
    console.log(student);
    let results = document.getElementById("student-list");
    if(student===null){
        results.innerHTML=`<h5 class="text-center fw-normal">No students added yet</h5>`
    }
    else{
        student.forEach(element => {
            results.innerHTML+=`
            <div class="row">
                <div class="col">
                    ${element.name}
                </div>
                <div class="col">
                    ${element.regID}
                </div>
                <div class="col">
                    <a href="task-7-mark.html?val=${element.regID}">
                        <button type="button" id="btn" value="${element.regID}" class="btn btn-secondary btn-sm">View Marks</button>
                    </a>
                </div>
                <br><br> 
            </div>
            `
        });

    }
}


function display(){


    let selectedID = window.location.search.substring(1).split("&")[0].split("=")[1]
    let student = JSON.parse(localStorage.getItem("Student-marklist"));
    // console.log(student);
    let results = document.getElementById("student-marks");
    // console.log(student)

    // Finding the object with particular id
    let obj = student.find( x => x.regID === selectedID)
    results.innerHTML=`
    <tr class="text-center">
        <td>${obj.subject1}</td>
        <td>${obj.internal1}</td>
        <td>${obj.external1}</td>
        <td>${obj.total1}</td>
    </tr>

    <tr class="text-center">
        <td>${obj.subject2}</td>
        <td>${obj.internal2}</td>
        <td>${obj.external2}</td>
        <td>${obj.total2}</td>
    </tr>

    <tr class="text-center">
        <td>${obj.subject3}</td>
        <td>${obj.internal3}</td>
        <td>${obj.external3}</td>
        <td>${obj.total3}</td>
    </tr>

    <tr class="text-center">
        <td>${obj.subject4}</td>
        <td>${obj.internal4}</td>
        <td>${obj.external4}</td>
        <td>${obj.total4}</td>
    </tr>

    <tr class="text-center">
        <td>${obj.subject5}</td>
        <td>${obj.internal5}</td>
        <td>${obj.external5}</td>
        <td>${obj.total5}</td>
    </tr>
    <tr class="text-center">
    <th> 
    <h6 class="fw-bold">GPA </h4>
    </th>
    <th></th><th></th>
    <th>
    <h6>${obj.gpa}</h4>
    </th>
    </tr>
    `
}