import { CSSTransition } from 'react-transition-group'

export function Backdrop({ onClick }) {
  return <div className="backdrop" onClick={onClick} />
}
export function ModalOverlay({
  className,
  children,
  headerClass,
  contentClass,
  footer,
  footerClass,
  header
}) {
  return (
    <div className={`modal ${className}`}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <div className={`modal__content ${contentClass}`}>{children}</div>
      <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
    </div>
  )
}

export default function Modal({ show, onCancel, ...props }) {
  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition in={show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}
