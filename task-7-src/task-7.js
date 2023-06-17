function addStudent(){
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let std_id = document.getElementById('std_id').value;
    let mark1 = Number(document.getElementById('mark1').value);
    let mark2 = Number(document.getElementById('mark2').value);
    let external = Number(document.getElementById('external').value);
    let total = mark1 + mark2 + external;
    
// creating student details object
    let studentDetails = {
        name : name,
        subject : subject,
        std_id : std_id,
        mark1 : Number(mark1),
        mark2 : Number(mark2),
        external : Number(external),
        total : total
    }
    
    if(localStorage.getItem("Student-marklist")===null){
        let marklist_array = []
        marklist_array.push(studentDetails);
        console.log(marklist_array)
        localStorage.setItem("Student-marklist",JSON.stringify(marklist_array));
    }
    else{
        let marklist_array = JSON.parse(localStorage.getItem("Student-marklist"))
        marklist_array.push(studentDetails)
        console.log(marklist_array)
        localStorage.setItem("Student-marklist",JSON.stringify(marklist_array));
    }

    displayStudent()

}

let students = JSON.parse(localStorage.getItem("Student-marklist")) || []

function displayStudent(){
    let students=JSON.parse(localStorage.getItem("Student-marklist"));
    console.log(students)
    let results = document.getElementById("student-list")
    if(students===null){
        results.innerHTML='<h5 class="text-center fw-normal">No students added yet</h5>'
    }
    else{
        results.innerHTML=`
        <table>
            <tr>Name</tr>
            <tr>Reg No</tr>
            <tr> </tr>
        </table>
        `
        students.forEach(element => {
            
            results.innerHTML+=`
            <tr>
            <td>${element.name}</td>
            <td>${element.std_id}</td>
            <td><button class="btn">View marks</td>
            </tr>
            `
        });
    }
}