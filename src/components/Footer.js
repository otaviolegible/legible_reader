import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer as FooterWrapper, Link } from '@legible/ui-components'

// TO DO: Add links when pages are done
const Footer = () => (
  <FooterWrapper>
    <Link as={NavLink} to='/browse' color='inherit'>Browse All</Link>
    <Link as={NavLink} to='' color='inherit'>About Us</Link>
    <Link as={NavLink} to='/premium' color='inherit'>Legible Premium</Link>
    <Link as={NavLink} to='' color='inherit'>FAQ</Link>
    <Link as={NavLink} to='' color='inherit'>For Publishers</Link>
  </FooterWrapper>
)

export default Footer