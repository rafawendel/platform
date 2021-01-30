import { useCallback } from 'react'
import { useKeyPress } from '../../hooks/useKeyPress'

const ButtonWrapper = ({ children, onClick, clickOnKey, disabled, isActive }) => {
  useKeyPress(
    clickOnKey,
    useCallback(() => {
      if (typeof onClick !== 'function') return
      if (!isActive) return
      if (disabled) return
      onClick()
    }, [disabled, isActive, onClick])
  )

  return <>{children}</>
}

export const PrimaryActionButton = ({ children, className, type, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <div className={`${className} text-center`}>
        <button
          className="bg-dark text-lighter text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg"
          type={type || 'button'}
          {...props}
        >
          {children}
        </button>
      </div>
    </ButtonWrapper>
  )
}

export const SecondaryActionButton = ({ children, className, type, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <div className={`${className} text-center`}>
        <button
          className="bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-light text-xs font-bold uppercase rounded px-3 py-3"
          type={type || 'button'}
          {...props}
        >
          {children}
        </button>
      </div>
    </ButtonWrapper>
  )
}
