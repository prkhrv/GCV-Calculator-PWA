console.log("hiiiii");

form1 = document.getElementById("form1");
form2 = document.getElementById("form2");



function changeForm(index){
    if (index === 1){
        form1.style.display = "block";
        form2.style.display = "none";

    }else if (index === 2){
        form1.style.display = "none";
        form2.style.display = "block";

    }
}