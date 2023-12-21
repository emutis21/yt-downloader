import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TitleContext } from '../contexts/TitleContext'
import '../styles/header.css'
import { Anchor } from './Anchor'
import { Arrow } from './Arrow'

export const Header = () => {
  const { title } = useContext(TitleContext)

  const location = useLocation()

  const anchor = title !== 'Youtube Downloader'
  
  const currentUrlParams = (location.pathname + location.search).slice(1)

  return (
    <header className='card'>
      {anchor && (
        <a href='/'>
          <span className='arrow'>
            <Arrow />
          </span>
        </a>
      )}
      <Link to={anchor ? currentUrlParams : '/'} className='card-title' target={anchor ? '_blank' : '_self'}>
        {title}
        {anchor ? (
          <span className='anchor'>
            <Anchor />
          </span>
        ) : null}
      </Link>
    </header>
  )
}
