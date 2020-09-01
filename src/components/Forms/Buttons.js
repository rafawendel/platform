export const SubmitButton = ({ isSubmitting, children }) => {
  return (
    <div className="text-center mt-6">
      <button
        className="bg-dark text-lighter active:opacity-75 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg"
        type="submit"
        disabled={isSubmitting}
      >
        {children}
      </button>
    </div>
  )
}

export const NextButton = ({ children, className, ...props }) => {
  return (
    <div className={`${className} text-center mt-6`}>
      <button
        className="bg-dark text-lighter active:opacity-75 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg"
        type="button"
        {...props}
      >
        {children}
      </button>
    </div>
  )
}
