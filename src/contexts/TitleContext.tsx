import { createContext, useState } from 'react'

export const TitleContext = createContext(
  {} as {
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
  },
)

interface TitleProviderProps {
  children: React.ReactNode
}

export const TitleProvider = ({ children }: TitleProviderProps) => {
  const [title, setTitle] = useState(document.title)

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>
}
