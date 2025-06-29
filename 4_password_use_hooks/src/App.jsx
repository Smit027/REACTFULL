import {useCallback, useEffect,useState } from "react"


function App() {
  const[length, Setlength]=useState(8)
  const[number,Setnumber]= useState(false)
  const[char,Setchar]= useState(true)
  const[password,setpassword]= useState()


  const passwordgenrator = useCallback(()=>{
    let str='QWERTYUIOPLKJHGFDSAZXCVBNMmznxbcvalskdjfhgpqowieuryt'
    let pass= ''
    if(number){
      str += '0123456789'
    }
    if(char) str +='!@#$%^&*()_-+{}<>?:;[]'

    for(let i=1; i<=length; i++){
      let oi =Math.random()* str.length
       pass += str.at(oi)
    }
    setpassword(pass)
  } ,[length,number,char,setpassword])


  useEffect(()=>{
   passwordgenrator()
  },[length,number,char,setpassword])



  // 2 ) without use usecall back only useeffect hook and without mamoazation .

  // useEffect( ()=> {
  //   let str='QWERTYUIOPLKJHGFDSAZXCVBNMmznxbcvalskdjfhgpqowieuryt'
  //   let pass= ''
  //   if(number){
  //     str += '0123456789'
  //   }
  //   if(char) str +='!@#$%^&*()_-+{}<>?:;[]'

  //   for(let i=1; i<=length; i++){
  //     let oi =Math.random()* str.length
  //      pass += str.at(oi)
  //   }
  //   setpassword(pass)
  // } ,[length,number,char,setpassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text' 
            className="outline-none w-full py-1 px-3 bg-white"
            disabled
            value={password}
          />
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={5}
          max={60}
          value={length}
          onChange={(e)=> Setlength(e.target.value)}
           />
            <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input           
          type='checkbox'
          id="numberInput"
          checked= {number}
          onChange={(e) => Setnumber(e.target.checked) }  
        />

        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
            type='checkbox'
            id="characterInput"
            defaultChecked  
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
