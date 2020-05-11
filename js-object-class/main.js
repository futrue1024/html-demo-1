class Person {
  constructor() {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return "你好，我叫" + this.name;
  }
}

let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * arr[i];
}

let arr = [1, 2, 3, 4];
arr.map((x) => x * x); //不会改变原数组，会生成一个新数组

let arr = [1, 2, 3, 4];
arr.filter((x) => x % 2 === 0); //设定条件，只留下符合条件的数组元素，返回一个新的数组

let arr = [1, 2, 3, 4];

let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6];
let arr2 = arr.map((function(day){
    if(day[day.length - 1] === [0]){
        return day[day.length - 1] === '周日'
    }

});
console.log(arr2);


let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
//求数组中的奇数和
num = scores.reduce((x,y) => {
    if(y%2===1){
        return x.concat(y)
    }else{
        return x
    }
},[])
//简化
num = scores.reduce((x,y) => y%2===1? x.concat(y):x,[])

let arr = [
    {'名称':'动物',id:1,parent:null},
    {'名称':'狗',id:2,parent:1},
    {'名称':'锚',id:3,parent:1}
]
//数组变对象
arr.reduce((result,item) => {
   if(item.parent===null){
      result.id = item.id
      result['名称'] = item['名称']
    
	}else{
    result.children.push(item)
    delete item.parent
    item.children = null
    }
    return result              
},{id:null,children:[]})

function f1(){
    let a = 1
    function f2(){
        let a = 2
        function f3(){
            console.log(a)
        }
        a = 22
        f3()
    }
    console.log(a)
    a = 100
    f2()
}
f1()