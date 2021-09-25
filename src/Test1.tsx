import React,{useState} from 'react'
import Val1 from './Val1'
import Val2 from "./Val2";
function Test1(props:any){
  console.log(props);
  const [searchValue, setSearchValue] =  useState('12341234')
  const [todoList, setTodoList] =  useState(['1'])
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  function handlePress(e: React.KeyboardEvent<HTMLInputElement>){
   
    if (e.charCode === 13 && searchValue !== ''){
      console.log(e,e.code,e.target,searchValue);
      setTodoList([...todoList, searchValue])
      setSearchValue('')
    }
  }
  const myAlert = (text:string) => {
    alert(text)
  }

  let val = searchValue.length > 4 ? <Val1></Val1> : <Val2></Val2>
  return (
    <div>
      <ul>
        {
          todoList.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      {val}
      <input value={searchValue} onChange={handleChange} onKeyPress={handlePress}></input>
      <h1>test1-{props.name}-{searchValue}</h1>
      <p>{props.searchValue}</p>
      <button onClick={()=>myAlert(searchValue)}>button</button>
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default Test1
