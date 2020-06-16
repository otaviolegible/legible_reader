import React, {useState, useEffect, useRef} from 'react'
import {Modal} from '@legible/ui-components'

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => savedCallback.current = callback, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}

const AdContent = () => (
  <>
    <h2>Subscribe to Legible</h2>
    <p>Over a many books</p>
  </>
)

export const Ads = ({ 
  timer: initialTimer = 0, 
  interval: initialInterval = 1000,
  modal: initialModal = true,
  displayTimer: initialDisplayTimer = 60*5
}) => {
  const [timer, setTimer] = useState(initialTimer)
  const [modal, setModal] = useState(initialModal)
  const [interval] = useState(initialInterval)
  const [displayTimer] = useState(initialDisplayTimer)

  const handleClose = () => setModal(false)

  useInterval(() => {
    if(timer === displayTimer) return setTimer(0)
    setTimer(timer + 1)
  }, interval)

  useEffect(() => {
    if(timer === displayTimer) setModal(true)
  }, [timer])

  if(!modal) return null

  return (
    <Modal open onClose={handleClose} primaryButtonText='Ok'>
      <AdContent />
    </Modal>
  )
}

export default Ads