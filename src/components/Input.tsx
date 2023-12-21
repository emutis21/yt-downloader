export const Input = ({ ...props }) => {
  return (
    <div className='input-container'>
      <input
        id={props.name}
        {...props.register(props.name)}
        defaultValue={props.defaultValue}
        placeholder='https://www.youtube.com/watch?v=9bZkp7q19f0'
        className='input-field'
        autoFocus
      />
      <label htmlFor={props.name} className='input-label'>
        {props.label}
      </label>
      <span className={props.errors[props.name] ? 'input-highlight-error' : 'input-highlight'}></span>
      {props.errors[props.name] && <span className='input-error'>{props.errors[props.name].message}</span>}
    </div>
  )
}
