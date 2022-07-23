 if(localStorage.getItem("job")){
    job=localStorage.getItem("job")
 }
 else{
   job=0;  
localStorage.setItem("job",0) 
}
document.getElementById("job").innerHTML=job
function plus(){
      job= Number(job)+3
document.getElementById("job").innerHTML=job  
}
function mines(){
    job= job-1
document.getElementById("job").innerHTML=job
if(job < 0){
    job= 0
document.getElementById("job").innerHTML=job
alert("not possible")
}
}
function save(){
localStorage.setItem("job", document.getElementById("job").innerHTML) 
}