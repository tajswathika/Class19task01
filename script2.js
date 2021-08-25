function foo()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(['Bob','mark','alice']),5000);
    })
}
foo().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})