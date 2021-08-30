import { Button } from '../../components/atoms/atoms-index'
import { useState } from 'react'

export const HomePage = () => {
  const [busy, setBusy] = useState(false)

  return (
    <>
      <Button label="Normal" isBusy={busy} />
      <Button label="Click ME" onClick={() => setBusy(!busy)} />
      <Button label="Disabled" disabled />
    </>
  )
}
