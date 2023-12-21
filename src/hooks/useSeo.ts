import { useContext, useEffect } from 'react'
import { TitleContext } from '../contexts/TitleContext'

interface SeoProps {
  titleProp?: string
}

export function useSeo({ titleProp }: SeoProps) {
  const { title, setTitle } = useContext(TitleContext)

  useEffect(() => {
    if (titleProp) {
      setTitle(titleProp)
    }
  }, [titleProp, setTitle])

  titleProp ? (document.title = titleProp) : (document.title = title)

  return { title }
}
