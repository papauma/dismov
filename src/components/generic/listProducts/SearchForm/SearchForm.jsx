import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


const SearchForm = ({onSubmit}) => {
    const [textSearch, setTextSearch] = useState('')

    const handleChange = e => {
        setTextSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(textSearch)
    }

  return (
    <Grid container justifyContent="flex-end">
      <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Text" variant="standard" placeholder='Search...' onChange={handleChange} value={textSearch}/>
          <Button type='submit' variant="outlined">Search</Button>
      </form>
    </Grid>
  )
}

export default React.memo(SearchForm)