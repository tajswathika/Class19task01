
    //document.write("Temporary Database");
    //var div=document.createElement("div");
    var table=document.createElement("table");
    table.setAttribute("class","table");

    var thead = document.createElement("thead");
    thead.setAttribute("class","thead-dark");

    var tr=document.createElement("tr");
    var th1=createtrth("th","First Name");
    var th2=createtrth("th","Last Name");
    var th3=createtrth("th","Address1");
    var th4=createtrth("th","Address2");
    var th5=createtrth("th","Pincode");
    var th6=createtrth("th","Gender");
    var th7=createtrth("th","Food");
    var th8=createtrth("th","State");
    var th9=createtrth("th","Country");

    tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
    thead.append(tr);

    
    var tbody=document.createElement("tbody");
    table.append(thead,tbody);
    //div.append(table);
    //document.body.append(table);
document.getElementById("mytable").appendChild(table);
    function display()
    {
    var dv=fnvalidateDDL(); 
    if(dv!==0)
    {
    var tbody=document.createElement("tbody");
    var tr=document.createElement("tr");
    var td1=createtrth("td",document.getElementsByName("fname")[0].value);
    var td2=createtrth("td",document.getElementsByName("lname")[0].value);
    var td3=createtrth("td",document.getElementsByName("address1")[0].value);
    var td4=createtrth("td",document.getElementsByName("address2")[0].value);
    var td5=createtrth("td",document.getElementsByName("pincode")[0].value);
    var td6=createtrth("td",document.getElementsByName("gender")[0].value);
    var td7=createtrth("td",dv);
    var td8=createtrth("td",document.getElementsByName("state")[0].value);
    var td9=createtrth("td",document.getElementsByName("country")[0].value);

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    tbody.append(tr);

    table.append(thead,tbody);
    //document.body.append(table);
    //document.getElementsByClassName("maindiv").appendChild(table);
    document.getElementById("mytable").appendChild(table);
    resetfield();
}
}

function createtrth(elementname, elevalue="")
{
  var ele=document.createElement(elementname);
   ele.innerHTML=elevalue;
   return ele;
}
function fnvalidateDDL()
{
var fld = document.getElementById('ddl');
var ddlvalues = [];
var j=0;
for (var i = 0; i < fld.options.length; i++) {
  if (fld.options[i].selected) {
    ddlvalues[j]=fld.options[i].value;
    j++;
  }
}
if(j>1)
return ddlvalues;
else
{
alert("Please select atleast two choices of food")
return 0;
}
}

function resetfield()
{
    document.getElementById("myForm").reset();
}