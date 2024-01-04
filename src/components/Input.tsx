import { InputProps } from '../types'

export const Input: React.FC<InputProps> = ({ name, register, defaultValue, label, errors }) => {
  return (
    <div className='input-container'>
      <input
        id={name}
        {...register(name)}
        defaultValue={defaultValue}
        placeholder='https://www.youtube.com/watch?v=9bZkp7q19f0'
        className='input-field'
        autoFocus
      />
      <label htmlFor={name} className='input-label'>
        {label}
      </label>
      <span className={errors[name] ? 'input-highlight-error' : 'input-highlight'}></span>
      {errors[name] && <span className='input-error'>{errors[name]?.message}</span>}
    </div>
  )
}
