import { useState } from 'react'

export const useSelect = () => {
  const [value, setValue] = useState('')

  const onChangeSelect = val => {
    console.log(`selected ${val}`)
    setValue(val)
  }

  const onBlurSelect = () => {
    console.log('blur')
  }

  const onFocusSelect = () => {
    console.log('focus now')
  }

  const onSearchSelect = val => {
    console.log('search:', val)
    setValue(val)
  }

  return {
    value,
    onChangeSelect,
    onBlurSelect,
    onFocusSelect,
    onSearchSelect,
  }
}
