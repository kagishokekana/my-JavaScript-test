
function login() {
    
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    let display = document.getElementById("display");
  
  
   let login  = [
    { name: 'hardy', age: '36'  },
    { name: 'vusumuzi', age: '31' },
     { name: 'wandile', age: '29' },
     { name: 'charity', age: '26' },
     { name: 'precious', age: '30' },
     { name: 'andisiwe', age: '29' },  
     { name: 'mmapaseka', age: '24' },
    { name: 'mhlonipheni', age: '23' },
     { name: 'khumbulani', age: '25' },
     { name: 'sophie', age: '26' },
     { name: 'lucky', age: '27' },
     { name: 'sithembiso', age: '22' },
     { name: 'happy', age: '27' },
    { name: 'selina', age: '31' },
     { name: 'nkosiphendule', age: '28' },
     { name: 'kagisho', age: '26' },
  ];
  
  display.innerHTML ="";

   for (let i = 0; i < login.length; i++) {
      
   if ((login[i].name == name) && (login[i].age == age)) {

        location.href = './index.html';
  
    }
  }
}