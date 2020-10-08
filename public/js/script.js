//Thanks to everyone helped me to build this Script.



//Elements
var errorName = document.getElementById("error-name")
var errorMessage = document.getElementById("error-message")
var con = document.getElementById("console-area")
var textarea = document.querySelector('textarea');
var openFile = document.getElementById('openFile')
var mobileAlert = document.getElementById("top-jumbotron")
var i = 0;
var speed = 100;

//Run
const run = () => {
    try {
        eval(textarea.value)
    } catch (e) {
        var txt = '\n' + e + '.\n';
        var element = document.createElement("P");
        element.innerHTML = txt
        var att = document.createAttribute("class");
        att.value = "text-danger";
        element.setAttributeNode(att);
        con.appendChild(element);

    }
}
//Reset
function reset() {
    textarea.value = "alert(\"You can simply type your javascript code here then run it and see result :) \")";
    var txt = "Your code editor has been successfully reset.\n"
    var element = document.createElement("P");
    element.innerHTML = txt
    var att = document.createAttribute("class");
    att.value = "text-success";
    element.setAttributeNode(att);
    con.appendChild(element);
}

//Copy
function copy() {
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var txt = "You have successfully copied the code.\n"
    var element = document.createElement("P");
    element.innerHTML = txt
    var att = document.createAttribute("class");
    att.value = "text-success";
    element.setAttributeNode(att);
    con.appendChild(element);

}
//Console/Logs
function Console() {
    var txt = "This is a console log section you can see all your history here.\n"
    var element = document.createElement("P");
    element.innerHTML = txt
    var att = document.createAttribute("class");
    att.value = "text-info";
    element.setAttributeNode(att);
    con.appendChild(element);
}
//Upload Files
openFile.addEventListener('change', () => {
    let files = openFile.files;

    if (files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;

        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');

    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
    //send message to log
    var txt = "You have successfully uploaded your file.\n"
    var element = document.createElement("P");
    element.innerHTML = txt
    var att = document.createAttribute("class");
    att.value = "text-success";
    element.setAttributeNode(att);
    con.appendChild(element);
});
//SaveASFile
//Info: This code is made by someone in sololearn.com thanks for the help.
function saveData(data, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var json = JSON.stringify(data),
        blob = new Blob([data], { type: "text/plain;charset=utf-8" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);

}


function main() {
    var savefile = document.getElementById("saveAsButton")
    savefile.addEventListener("click", saveFile, false)
}


function saveFile(e) {
    saveData(textarea.value, "JsCodeEditor.js");

    e.preventDefault()
    var txt = "You have successfully saved the code.\n"
    var element = document.createElement("P");
    element.innerHTML = txt
    var att = document.createAttribute("class");
    att.value = "text-success";
    element.setAttributeNode(att);
    con.appendChild(element);
}


window.onload = main

//Mobile settings
function mobile(x) {
    if (x.matches) {
        var element = document.createElement("P");
        element.innerHTML = "Using a mobile device may cause some problems. Thank you."
        var att = document.createAttribute("class");
        att.value = "lead center";
        element.setAttributeNode(att);
        mobileAlert.appendChild(element);
    } else {
        return;
    }
}

var x = window.matchMedia("(max-width: 768px)")
mobile(x)
x.addListener(mobile)
