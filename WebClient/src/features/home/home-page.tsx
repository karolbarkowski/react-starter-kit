import { Button } from '../../components/atoms/atoms-index'
import { useState } from 'react'

export const HomePage = () => {
  const [isBusy, setIsBusy] = useState(false)

  return (
    <div className="inline-flex flex-row">
      <Button isBusy={isBusy} label="Button" onClick={() => setIsBusy(true)} />
      <Button isBusy={isBusy} label="Button" onClick={() => setIsBusy(true)} />
      <Button label="Button" onClick={() => setIsBusy(true)} />
      <Button label="Button" onClick={() => setIsBusy(false)} />
    </div>
  )
}
