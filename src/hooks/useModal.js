import { useState } from 'react'

export const useModal = () => {
  const [visible, setVisible] = useState(true)

  const showModal = () => setVisible(!visible)

  return {
    visible,
    showModal,
  }
}
