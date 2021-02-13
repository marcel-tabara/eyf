import { useState } from 'react'

export const useAlertDialog = () => {
  const [alertDialog, setAlertDialog] = useState({ open: false, id: null })

  return {
    alertDialog,
    setAlertDialog,
  }
}
