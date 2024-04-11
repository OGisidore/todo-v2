

export const setItem =(key:string,value : any)=>{
    
    if (window.localStorage) {
        window.localStorage.setItem(key,JSON.stringify(value))
        
    }


}

export const getItem =(key:string)=>{
try {
    const item : any =  window.localStorage.getItem(key)
return JSON.parse(item)
} catch (error) {
    return null
    
}

}

export const removeItem =(key:string)=>{

if (window?.localStorage) {
    window.localStorage.removeItem(key)
    
}


}

export const clearLocalStorage =()=>{

if (window.localStorage) {
    window.localStorage.clear()
}


}