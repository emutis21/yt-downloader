import { useState } from 'react'
import { Data } from '../types'

export const useDownload = () => {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleDownload = async (urlParams: string) => {
    try {
      setLoading(true)

      const response = await fetch(`http://localhost:3000/download?url=${urlParams}`)
      const responseData = await response.json()

      setData(responseData)
    } catch (error) {
      console.error('handleDownload error for', urlParams, error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, handleDownload }
}
