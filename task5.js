var number=[1,2,3,4,5,1,6,2,7,1,3]

var numbers=number.filter((num,index)=>{
    return number.indexOf(num)==index

})

console.log(numbers)