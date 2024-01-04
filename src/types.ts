import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  name: keyof Inputs
  register: UseFormRegister<Inputs>
  defaultValue?: string
  label: string
  type: string
  errors: FieldErrors<Inputs>
}

export type Inputs = {
  url: string
}

export interface FormatName extends Inputs {
  mimeType: string
  hasVideo: boolean
  height: number
}

export interface Data extends Inputs {
  info: FormatName[]
  title: string
}

export interface FormProps {
  handleDownload: (url: string) => Promise<void>
  loading: boolean
}

export interface ButtonProps {
  loading: boolean
}
