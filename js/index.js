console.log("hiiiii");

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var p_gcv = document.getElementById("gcv");
var cpyBtn = document.getElementById("copyButton");
var rstBtn = document.getElementById("rstButton");




function changeForm(index){
    if (index === 1){
        form1.style.display = "block";
        form2.style.display = "none";
        p_gcv.style.display = "none";
        cpyBtn.style.display = "none";
        rstBtn.style.display = "none";

        


    }else if (index === 2){
        form1.style.display = "none";
        form2.style.display = "block";
        p_gcv.style.display = "none";
        cpyBtn.style.display = "none";
        rstBtn.style.display = "none";


    }
}


function calcForm1(){
    console.log("form1");
    var fc = parseFloat(document.getElementById("fc").value);
    var vm = parseFloat(document.getElementById("vm").value);
    var ash = parseFloat(document.getElementById("ash").value);
    var moisture = parseFloat(document.getElementById("moisture1").value);

    var numerator = ((165*fc) + 136*(vm-(0.1*ash)) - (108*moisture));
    var gcv = numerator / 1.8;


    form1.style.display = "none";
    p_gcv.innerHTML = "The GCV is "+gcv.toFixed(2);
    p_gcv.style.display = "block";
    cpyBtn.style.display = "block";
    rstBtn.style.display = "block";


}

function calcForm2(){
    console.log("form2");
    // var fc = parseFloat(document.getElementById("fc").value);
    // var vm = parseFloat(document.getElementById("vm").value);
    var ash = parseFloat(document.getElementById("ash2").value);
    var moisture = parseFloat(document.getElementById("moisture2").value);
    var numerator = 154*(100-((1.1*ash)+moisture)) - (108*moisture);
    var gcv = numerator / 1.8;


    form2.style.display = "none";
    p_gcv.innerHTML = "The GCV is "+gcv.toFixed(2);
    p_gcv.style.display = "block";
    cpyBtn.style.display = "block";
    rstBtn.style.display = "block";


}


function copyValue() {

    var tooltip = document.getElementById("myTooltip");
    var text = p_gcv.innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    elem.setSelectionRange(0, 99999);
    // document.execCommand("copy");
    navigator.clipboard.writeText(elem.value);
    tooltip.innerHTML = "Copied: " + elem.value;
    document.body.removeChild(elem);
    
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


  function restart(){
    document.getElementById("moisture").selectedIndex = 0;  
    window.location.reload();
  }