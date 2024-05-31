const Backendurl="https://dummyjson.com/products"

const GetApi=async()=>{
try{
const response=await fetch(`${Backendurl}`)
const data=await response.json()
return data
}catch(e){
console.log(e)
}
}

export {GetApi}
