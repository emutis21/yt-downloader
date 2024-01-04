import { useState } from 'react'
import { Data } from '../types'

export const useDownload = () => {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async (urlParams: string) => {
    try {
      setLoading(true)

      const response = await fetch(`http://localhost:3000/download?url=${urlParams}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const responseData = await response.json()

      setData(responseData)
    } catch (error) {
      const err = error as Error
      console.error('handleDownload error for', urlParams, err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, handleDownload }
}
