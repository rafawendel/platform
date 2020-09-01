export const ErrorMessage = ({ children }) => {
  return (
    <>
      <div className="error text-red-600 text-xs mt-1 w-auto">{children}</div>
      <style jsx>{`
        .error::before {
          content: '⚠️ '; /* ❌ */
          font-size: 1rem; /* 0.5rem */
          /* vertical-align: 0.2em; */
        }
      `}</style>
    </>
  )
}
