var click = document.getElementById('button').addEventListener('click',clickfunction)
var search = document.getElementById('searchbar')
function clickfunction(){
  
   var ritik = document.createElement('li')
   ritik.id = 'new'
   ritik.className = 'list-element'
   ritik.innerHTML = '<p>'+search.value+'</p><i class="fa fa-minus-square" id="icon" aria-hidden="true"></i>'
   var ul = document.getElementById('list');
   var li = document.getElementById('ritu');
   ul.insertBefore(ritik,li);
   console.log(ritik);
   var removeAdded = document.getElementById('icon').addEventListener('click',newfriend)


function newfriend(){
   var newadded = document.getElementById('new')
   newadded.remove();
}
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
var toRemove = document.getElementById('gupta').addEventListener('click',removeFunction)


function removeFunction(){
   var avnti = document.getElementById('avnti')
   avnti.remove();
}
var Remove = document.getElementById('yadav').addEventListener('click',removeyadav)

function removeyadav(){
   var rnjit = document.getElementById('rnjit')
  rnjit.remove();
}

//var removeAdded = document.getElementById('icon').addEventListener('click',newfriend)

//function newfriend(){
 //  var newadded = document.getElementById('new');
 //  newadded.remove();
//}
var removeAdded = document.getElementById('icon').addEventListener('click',newfriend)


function newfriend(){
   var newadded = document.getElementById('new')
   newadded.remove();
}
