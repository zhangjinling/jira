import React,{ useState} from 'react'
const Search = (props:{search:Function}) => {

  const [searchValue,setSearchValue] = useState('')

  // 输入框change
  const handleSearchInputChanges = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log( e.target.value);
    
    setSearchValue( e.target.value)
  }
  const resetInputField = () => {
    setSearchValue('')
  }
  const callSearchFunction = (e:any) => {
    e.preventDefault();
    console.log('searchValue:',searchValue);
    
    props.search(searchValue)
    
    resetInputField()
  }

  return (
    <form className='search'>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type='text'
      />
      <input onClick={callSearchFunction} type='submit' value='SEARCH' />
    </form>
  )
}

export default Search