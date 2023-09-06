const users=[{
    first_name:'Mike',
    Location:'london'
      },
{
    first_name:'Tim',
    Location:'US'

},
{
    first_name:'John',
    Location:'Australia' ,
    
}]
let a= users.map(function(e){
let num=`${e.first_name} lives in ${e.Location}`
return num;
})
document.write(JSON.stringify(a));