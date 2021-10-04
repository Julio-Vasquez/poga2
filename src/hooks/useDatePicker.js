import { useState } from 'react'

export const useDatePicker = () => {
  const [value, setValue] = useState('')

  const onChangeDate = (date, dateString) => {
    setValue(dateString)
  }

  return {
    value,
    onChangeDate,
  }
}
