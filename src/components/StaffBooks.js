import React from 'react'
import { injectIntl } from 'react-intl';

const StaffBooks = ({
  staffpick,
  books = []
}) => {
  return (
    <>
      <h2>{staffpick.title}</h2>
      <p>{staffpick.subtitle}</p>
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