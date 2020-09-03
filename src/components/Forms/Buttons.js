import { useKeyPress } from '../../hooks/useKeyPress'

export const PrimaryActionButton = ({
  children,
  className,
  type,
  onClick,
  clickOnKey,
  disabled,
  isActive,
  ...props
}) => {
  useKeyPress(clickOnKey, () => {
    if (typeof onClick !== 'function') return
    if (!isActive) return
    if (!disabled) onClick()
  })

  return (
    <div className={`${className} text-center`}>
      <button
        className="bg-dark text-lighter text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg"
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export const SecondaryActionButton = ({ children, className, type, ...props }) => {
  return (
    <div className={`${className} text-center`}>
      <button
        className="bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-light text-xs font-bold uppercase rounded px-3 py-3"
        type={type || 'button'}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}
