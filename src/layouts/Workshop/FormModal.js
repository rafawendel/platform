import { CSSTransition } from 'react-transition-group'
import PlainModal from '../../components/common/Modals/PlainModal'
import LoginForm from '../../components/forms/UserForm'

export default function FormModal(props) {
  return (
    <CSSTransition in mountOnEnter unmountOnExit timeout={200} classNames="modal">
      <PlainModal
        title="Faça Login"
        className="modal text-darker text-left w-full"
        footer={setActive => (
          <button
            className="opacity-50 hover:opacity-75 text-primary font-semibold background-transparent px-4 py-2 text-sm mr-1 mb-1"
            type="button"
            onClick={() => setActive(false)}
          >
            Agora não
          </button>
        )}
        {...props}
      >
        <LoginForm {...props} />
      </PlainModal>
    </CSSTransition>
  )
}
