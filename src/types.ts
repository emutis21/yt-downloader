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
