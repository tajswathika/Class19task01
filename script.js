var table = document.createElement("table");
table.setAttribute("class","table");

var thead = document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");
var th1=createtrth("th","Id");
var th2=createtrth("th","Name");
var th3=createtrth("th","Email");

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement("tbody");
var tr=document.createElement("tr");
var td1=createtrth("td","1");
var td2=createtrth("td","Lura Senger");
var td3=createtrth("td","Xander_Collier@yahoo.com");

tr.append(td1,td2,td3);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);

var tr=document.createElement("tr");
var td4=createtrth("td","2");
var td5=createtrth("td","Wilburn Weber");
var td6=createtrth("td","Bennett_Kreiger11@yahoo.com");


tr.append(td4,td5,td6);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td7=createtrth("td","3");
var td8=createtrth("td","Tyrique Hahn");
var td9=createtrth("td","Juston.Altenwerth@yahoo.com");


tr.append(td7,td8,td9);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td10=createtrth("td","4");
var td11=createtrth("td","Lenny Bailey");
var td12=createtrth("td","Guiseppe_Hegmann@yahoo.com");


tr.append(td10,td11,td12);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td13=createtrth("td","5");
var td14=createtrth("td","Vladimir Keeling");
var td15=createtrth("td","Louisa_Walsh18@hotmail.com");


tr.append(td13,td14,td15);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);

var tr=document.createElement("tr");
var td16=createtrth("td","6");
var td17=createtrth("td","Kellie Crona");
var td18=createtrth("td","Chandler_Abernathy@yahoo.com");


tr.append(td16,td17,td18);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td19=createtrth("td","7");
var td20=createtrth("td","Carolina White");
var td21=createtrth("td","Royal50@hotmail.com");


tr.append(td19,td20,td21);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td22=createtrth("td","8");
var td23=createtrth("td","Alfredo Conn");
var td24=createtrth("td","Clarabelle34@hotmail.com");


tr.append(td22,td23,td24);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);


var tr=document.createElement("tr");
var td25=createtrth("td","9");
var td26=createtrth("td","Stan Shanahan");
var td27=createtrth("td","Lamar.McClure@hotmail.com");


tr.append(td25,td26,td27);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);



var tr=document.createElement("tr");
var td28=createtrth("td","10");
var td29=createtrth("td","Marvin Fay");
var td30=createtrth("td","Osbaldo58@hotmail.com");


tr.append(td28,td29,td30);
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);



















function createtrth(elementname, value="")
{
  var ele=document.createElement(elementname);
   ele.innerHTML=value;
   return ele;
}