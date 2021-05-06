import React, { useCallback, useEffect, useMemo, useState } from 'react'


export const Home = () => {

  const [arr, setArr] = useState([])

  useEffect( async () =>{
    
      let response = await fetch('http://localhost:3001/home')
      setArr(await response.json())
  },[])


  //   const getResponse = async () =>{ 
  //     let response = await fetch('http://localhost:3001/home')
  //     let content = await response.json()
  //     // setArr(content)
  //     console.log(arr)
  // }
  // getResponse()
  

// console.log(arr)
  return (
    <div>
      <h1>Home</h1>
      { arr.map( (item, key) => {
        return(
          <p key={key}> {item.name}</p>
        )
      })}
    </div>
  );
}
// ! работает, но хуйня
  // useEffect( () => {
  //   fetch('http://localhost:3001/home')
  //   .then(res => res.json())
  //   .then(resp => {
  //     let test = resp
  //     setArr(test)
  //   })
  // },[])



// ! не работает и хуйня 
  // const getResponse = async () =>{ 
  //     let response = await fetch('http://localhost:3001/home')
  //     content = await response.json()
  // }
  // getResponse()