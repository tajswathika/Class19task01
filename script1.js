var request = new XMLHttpRequest();
request.open('Get', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
request.send();
var data;
request.onload =function()
{
 data = JSON.parse(this.response);

}
//-----------------GEneralized----------------------------------

function fngetData(p,a,b)
{

//console.log("Id: "+data[i].id+"Name: "+data[i].name+"Email: "+data[i].email);
//document.write("Id: "+data[i].id+"Name: "+data[i].name+"Email: "+data[i].email);



var ttable = document.createElement("table");
ttable.setAttribute("class","table");

var thead = document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");
var th1=createtrth("th","Id");
var th2=createtrth("th","Name");
var th3=createtrth("th","Email");

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement("tbody");

for(var i=a;i<b;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);

}

ttable.append(thead,tbody);
//document.body.append(ttable);
document.getElementById("mypage").innerHTML="";
document.getElementById("mypage").appendChild(ttable);
//document.getElementById("mypage").innerHTML="go away";


document.getElementsByName("txtno")[0].value=p;
}


//------------------------------------------------------------------



function fn()
{

//console.log("Id: "+data[i].id+"Name: "+data[i].name+"Email: "+data[i].email);
//document.write("Id: "+data[i].id+"Name: "+data[i].name+"Email: "+data[i].email);



var ttable = document.createElement("table");
ttable.setAttribute("class","table");

var thead = document.createElement("thead");
thead.setAttribute("class","thead-dark");

var tr=document.createElement("tr");
var th1=createtrth("th","Id");
var th2=createtrth("th","Name");
var th3=createtrth("th","Email");

tr.append(th1,th2,th3);
thead.append(tr);

var tbody=document.createElement("tbody");

for(var i=0;i<10;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);

}

ttable.append(thead,tbody);
//document.body.append(ttable);
document.getElementById("mypage").innerHTML="";
document.getElementById("mypage").appendChild(ttable);
//document.getElementById("mypage").innerHTML="go away";


document.getElementsByName("txtno")[0].value=1;
}

function fn1()
{

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

for(var i=10;i<20;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);
}

table.append(thead,tbody);
//document.body.append(table);
document.getElementById("mypage").innerHTML="";
document.getElementById("mypage").appendChild(table);
document.getElementsByName("txtno")[0].value=2;
}


function fn2()
{

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

for(var i=20;i<30;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);
}

table.append(thead,tbody);
document.body.append(table);
document.getElementsByName("txtno")[0].value=3;
}


function fn3()
{

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

for(var i=30;i<40;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);
}

table.append(thead,tbody);
document.body.append(table);
document.getElementsByName("txtno")[0].value=4;
}


function fn4()
{

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

for(var i=40;i<50;i++)
{
var tr=document.createElement("tr");
var td1=createtrth("td",data[i].id);
var td2=createtrth("td",data[i].name);
var td3=createtrth("td",data[i].email);

tr.append(td1,td2,td3);
tbody.append(tr);
}

table.append(thead,tbody);
document.body.append(table);
document.getElementsByName("txtno")[0].value=5;
}



function createtrth(elementname, value="")
{
  var ele=document.createElement(elementname);
   ele.innerHTML=value;
   return ele;
}

function pageupdown(pu)
{
    var txtval = document.getElementsByName("txtno")[0].value;
    if (pu==1)
    var p=parseInt(txtval)+1;
    else
    var p=parseInt(txtval)-1;
    var a=p*10-10;
    var b=p*10;
    
        fngetData(p,a,b)
        
        


    
    /*if(txtval==1)
    fn1();
    else if(txtval==2)
    fn2();
    else if(txtval==3)
    fn3();
    else if(txtval==4)
    fn4();*/
}


