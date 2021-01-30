import { PrimaryActionButton, SecondaryActionButton } from '../Buttons'

export const ButtonSet = ({
  showSubmitButton,
  isActive,
  advanceForm,
  recedeForm,
  isSubmitting,
  showRecedeButton,
  isTransition,
  isStepped,
  value,
  error
}) => {
  const shouldButtonBeDisabled = isTransition
    ? false
    : value === null || value === undefined || value === '' || error
  return (
    <div className="flex justify-between items-center mt-3 w-full">
      {showSubmitButton ? (
        <PrimaryActionButton type="submit" disabled={shouldButtonBeDisabled || isSubmitting}>
          Enviar
        </PrimaryActionButton>
      ) : (
        isStepped && (
          <PrimaryActionButton
            onClick={advanceForm}
            clickOnKey="Enter"
            isActive={isActive}
            disabled={shouldButtonBeDisabled}
          >
            Ok
          </PrimaryActionButton>
        )
      )}
      {showRecedeButton && isStepped && (
        <SecondaryActionButton onClick={recedeForm}>Voltar</SecondaryActionButton>
      )}
    </div>
  )
}
