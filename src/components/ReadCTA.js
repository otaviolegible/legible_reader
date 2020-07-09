import React from 'react'
import { Link } from 'react-router-dom'
import { useUserState } from '@legible/context-provider'
import { Button } from '@legible/ui-components'

// const PurchaseValue = ({ pricing: {list = '', sale = ''}, id = '' }) => {
//   if(sale) {
//     return (
//       <>
//         <Link to={`/purchase/${id}`}>Purchase: {list}</Link>
//         <Link to={`/purchase/${id}`}>Sale price: {sale}</Link>
//       </>
//     )
//   }

//   return <Link to={`/purchase/${id}`}>Purchase: {list}</Link>
// }

const ReadCTA = ({ book }) => {
  const {username} = useUserState()
  const {monetization = {}, id, pricing} = book
  const {ads = false, subscription = false, purchase = false} = monetization

  // if(!username && (purchase || subscription)) {
  //   return <Link to={`/sign-in?ref=/book/${id}`}>Purchase: {pricing.list}</Link>
  // }

  // if(username && purchase && !ads && !subscription) {
  //   return <PurchaseValue pricing={pricing} id={id} />
  // }

  // if(purchase && (ads || subscription)) {
  //   return (
  //     <>
  //       <Link to={`/read/${id}`}>Read</Link>
  //       <PurchaseValue pricing={pricing} id={id} />
  //     </>
  //   )
  // }

  return <Button className='mt-5' fullWidth as={Link} to={`/read/${id}`}>Read</Button>
}

export default ReadCTA