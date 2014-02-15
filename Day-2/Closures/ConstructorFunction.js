function Spinner(){
  var count = 0;
  this.up = function(){
     return ++count;
  }
  this.down = function(){
     return --count;
  }
  
}

function Employee(id,name,salary){
  /*
    1. id should not be modifiable
    2. new salary whenever assoigned should be greater than the old salary
  */
  var _id = id,
    _salary = salary;

  this.name = name;
  this.id = function(){
    return _id;
  }
  this.salary = function(sal){
    if (typeof sal === "undefined") return _salary;
    if (sal > _salary) _salary = sal;
    return _salary;
  }
}


