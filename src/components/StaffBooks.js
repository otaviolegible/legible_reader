import React from 'react'
import { useIntl } from 'react-intl'

const StaffBooks = ({
  books = []
}) => {
  const {formatMessage: f} = useIntl();

  return (
    <>
      <h2>{f({id: 'staffpicksTitle'})}</h2>
      <p>{f({id: 'staffpickSubtitle'})}</p>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <h2>{book.title}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

export default StaffBooks