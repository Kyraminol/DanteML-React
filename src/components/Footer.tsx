import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link'
import { Container } from '@mui/material'
import styled from 'styled-components'
import theme from '../helpers/theme'

const LinkWithIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  
  svg {
    margin-right: 0.5rem;
  }
`

const Copyright: React.FC = () => {
  return (
    <LinkWithIcon color="inherit" href="https://github.com/Kyraminol/DanteML-React" underline="always">
      <GitHubIcon />
      <span>Source</span>
    </LinkWithIcon>
 )
}

const FooterContainer = styled(Container)`
  color: ${theme.palette.text.primary};
  margin: auto 0 0 0;
  padding: 1rem;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer disableGutters maxWidth={false}>
      <Copyright />
    </FooterContainer>
  )
}

export default Footer
