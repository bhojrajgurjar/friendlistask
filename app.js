var click = document.getElementById('button').addEventListener('click',clickfunction)
var search = document.getElementById('searchbar')
function clickfunction(){
  
   var ritik = document.createElement('li')
   ritik.className = 'list-element'
   ritik.innerHTML = '<p>'+search.value+'</p><i class="fa fa-minus-square" aria-hidden="true"></i>'
   console.log(ritik)
   var ul = document.getElementById('list');
   var li = document.getElementById('ritu');
   ul.insertBefore(ritik,li);
}   


var toremove = document.getElementById('tomar').addEventListener('click',removefunction)


function removefunction(){
   var rituraj = document.getElementById('ritu')
   rituraj.remove();
}

var remove = document.getElementById('patel').addEventListener('click',removebhanu)

function removebhanu(){
   var bhwna = document.getElementById('bhanu')
   bhwna.remove();
}
//var rm = document.getElementsByClassName('fa-minus-square').addEventListener('click',rmv)

//function rmv(){
//   var list = document.getElementsByTagName('li')
//  console.log(list)
//}