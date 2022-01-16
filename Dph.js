
  var xmlDoc
     var xmlFile = "C:\Users\91911\workspace\DomParser\DP1.xml"

        function loadXMLDoc() 
        {
            var xmlReq = new XMLHttpRequest();
            console.log(xmlReq.readyState)
            xmlReq.onreadystatechange = function() {
                console.log(xmlReq.readyState)

                // Request finished and response 
                // is ready and Status is "OK"
                if (xmlReq.readyState == 4 && xmlReq.status == 200)
                 {
                     console.log(xmlReq.readyState)
                     xmlDoc=xmlReq.responseXML
                    empDetails()
                }
            }
  
           
            xmlReq.open("GET",xmlFile, true);
            xmlReq.send();
        }
       

  
        function empDetails()
         {
            var i;
            var table =
                `<tr><th>ID</th><th>NAME</th>
                    <th>AGE</th><th>SALARY</th>
                    <th>EMAILID</th><th>MobNum</th><th>DESIGNATION</th
                </tr>`
                
            var x = xmlDoc.getElementsByTagName("pms");
            
  
            // Start to fetch the data by using TagName 
            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("ID")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("Emp_NAME")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("Emp_AGE")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("Emp_SALARY")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("Emp_EMAILID")[0]
                    .childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("Emp_MobNum")[0]
                    .childNodes[0].nodeValue + "</td><td>"+
                    x[i].getElementsByTagName("Emp_Designation")[0]
                    .childNodes[0].nodeValue + "</td>"+
                    "<td><span class='material-icons' onclick='editRecord(" +i+ ")'>edit</span></td>" +
            "<td><span class='material-icons' onclick='deleteRecord(" +i+ ")'>delete</span></td></tr>";
            }
  
            pms.getElementById("id").innerHTML = table;
        }

        function addNewRecord()
        {
            var i
            var doc = []
            var x = pms.getElementById("addRecordForm")
            pms = xmlDoc.createElement("pms")
            Emp[0] = xmlDoc.createElement("ID")
            Emp[1] = xmlDoc.createElement("Emp_NAME")
            Emp[2] = xmlDoc.createElement("Emp_AGE")
            Emp[3] = xmlDoc.createElement("Emp_SALARY")
            Emp[4] = xmlDoc.createElement("Emp_EMAILID")
            Emp[5] = xmlDoc.createElement("Emp_MobNum")
            Emp[6] = xmlDoc.createElement("Emp_Designation")
        
            for(i = 0; i < 7; i++)
            {
                doc[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
                pms.appendChild(Emp[i])
            }
            xmlDoc.documentElement.appendChild(pms);
            console.log("Record added: " + x.elements[0].value)
            empDetails()
        }

        function deleteR(i)
        {
            y = xmlDoc.getElementsByTagName("pms")[i]
            var name = y.getElementsByTagName("Emp_AGE")[0].childNodes[0].nodeValue
            var reply = confirm("Do you want to delete record? \nName: " + name)
            if(reply == true)
            {
                xmlDoc.documentElement.removeChild(y)
                console.log("Record deleted: " + name)
                empDetails()
            }
        
        

        function open()
        {
            document.getElementById("addRecordForm").style.display = "block"
        }
        

        function close()
        {
            document.getElementById("addRecordForm").style.display = "none"
        }
        
  
    }
