
var xmlDoc
var xmlFile ='./dom1.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            console.log(xmlReq.readyState)

            xmlDoc = xmlReq.responseXML
            displayTable()
        }
    }
    xmlReq.open('GET',xmlFile, true)
    xmlReq.send()
}

//function to display html table from xml data
function displayTable()
{
    var i;
    var table = "<tr><th>Student Name</th><th>Student University</th></tr>"

    var x = xmlDoc.getElementsByTagName("ComputerScience")
    for (i = 0; i < x.length; i++)
    {
        table += "<tr><td>" +
            x[i].getElementsByTagName("Student_name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("Student_university")[0].childNodes[0].nodeValue + "</td><td></tr>";
    }
    document.getElementById("table").innerHTML = table
}

