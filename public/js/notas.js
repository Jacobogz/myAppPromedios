const add = document.getElementById("plus");
const grade = document.getElementById("grade");
const percentage = document.getElementById("percentage");
const tbody = document.getElementById("tbody");
const tfoot = document.getElementById("tfoot");
const table = document.getElementById("table");
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

let gradeArray = [];

add.addEventListener("click", ()=>{
    if(grade.value === "" || percentage.value === ""){
        alert("Por favor ingresa nota y porcentaje antes de agregar un nuevo registro");
    }else {
        const tr = document.createElement("tr");

        const tdGrade = document.createElement("td");
        tdGrade.innerHTML = grade.value;
        const tdPercentage = document.createElement("td");
        tdPercentage.innerHTML = percentage.value;

        tr.appendChild(tdGrade);
        tr.appendChild(tdPercentage);
        tbody.appendChild(tr);

        table.classList.remove("display-none");
        calculate.classList.remove("display-none");
        clear.classList.remove("display-none")

        gradeArray.push({
            grade: grade.value,
            percentage: percentage.value
        })
        console.log(gradeArray);
        grade.value = null;
        percentage.value = null;
    }
});

calculate.addEventListener("click", ()=>{
    let total = 0;
    let totalPercentage = 0;

    gradeArray.forEach((result)=>{
        let rowGrade = parseFloat(result.grade);    
        let rowPercentage = parseFloat(result.percentage);
        value = (rowGrade * (rowPercentage / 100));
        total += value;
        totalPercentage += rowPercentage;
    });

    const final = document.createElement("h2");
    final.innerHTML = `Tu nota final es ${total} para el ${totalPercentage}%`;
    result.appendChild(final)
    result.classList.remove("display-none");
})
clear.addEventListener("click", () => {
    gradeArray = [];
    tbody.querySelectorAll("*").forEach((child) => child.remove());
    result.querySelectorAll("*").forEach((child) => child.remove());
    if (tfoot.querySelector("tr") !== null) {
      tfoot.querySelector("tr").remove();
    }
  
    table.classList.add("display-none");
    calculate.classList.add("display-none");
    clear.classList.add("display-none");
    result.classList.add("display-none");
  });