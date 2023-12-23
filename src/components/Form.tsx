import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormProps, Inputs } from '../types'
import { urlSchema } from '../validations/urlSchema'
import { Button } from './Button'
import { Input } from './Input'

import '../styles/form.css'

export const Form: React.FC<FormProps> = ({ handleDownload: handleDownloadProp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(urlSchema),
  })

  const location = useLocation()
  const [urlParams, setUrlParams] = useState('')
  const navigate = useNavigate()

  const handleDownload = useCallback(handleDownloadProp, [handleDownloadProp])

  useEffect(() => {
    const currentUrlParams = (location.pathname + location.search).slice(1)
    if (urlParams !== currentUrlParams) {
      setUrlParams(currentUrlParams)
      handleDownload(currentUrlParams)
    }
  }, [location.pathname, location.search, handleDownload, urlParams])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    navigate(`/${data.url}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Ingrese la URL del vídeo'
        name='url'
        type='url'
        register={register}
        defaultValue={urlParams}
        errors={errors}
      />
      <Button />
    </form>
  )
}
