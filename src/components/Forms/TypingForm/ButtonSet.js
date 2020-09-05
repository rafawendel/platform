import { PrimaryActionButton, SecondaryActionButton } from '../Buttons'

export const ButtonSet = ({
  showSubmitButton,
  isActive,
  advanceForm,
  recedeForm,
  isSubmitting,
  showRecedeButton,
  isTransition,
  value,
  error
}) => {
  return (
    <div className="flex justify-between items-center mt-3 w-full">
      {showSubmitButton ? (
        <PrimaryActionButton
          type="submit"
          disabled={isTransition ? false : isSubmitting || !value || error}
        >
          Enviar
        </PrimaryActionButton>
      ) : (
        <PrimaryActionButton
          onClick={advanceForm}
          clickOnKey="Enter"
          isActive={isActive}
          disabled={isTransition ? false : !value || error}
        >
          Ok
        </PrimaryActionButton>
      )}
      {showRecedeButton && (
        <SecondaryActionButton onClick={recedeForm}>Voltar</SecondaryActionButton>
      )}
    </div>
  )
}
