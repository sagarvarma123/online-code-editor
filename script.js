function run(){
    var code = document.getElementById("code").value;
    var result = document.getElementById("result");
    result.innerHTML = code;

    var code_box = document.getElementById("code-box");
    code_box.style.display = "none";

    var result_box = document.getElementById("result-box");
    result_box.style.display = "block";
    result_box.setAttribute("class","animate__animated animate__slideInRight")

    var run_btn = document.getElementById("run-code");
    run_btn.style.display = "none";

    var r_btn = document.getElementById("r-btn");
    r_btn.style.display = "block";
    r_btn.setAttribute("class","animate__animated animate__fadeIn");
}

function result(){
    var code_box = document.getElementById("code-box");
    code_box.style.display = "block";
    code_box.setAttribute("class","animate__animated animate__slideInLeft")

    var result_box = document.getElementById("result-box");
    result_box.style.display = "none";
    

    var run_btn = document.getElementById("run-code");
    run_btn.style.display = "block";
    run_btn.setAttribute("class","animate__animated animate__fadeIn");

    var r_btn = document.getElementById("r-btn");
    r_btn.style.display = "none";
    
}