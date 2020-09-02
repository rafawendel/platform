export const ErrorMessage = ({ children }) => {
  return (
    <>
      <div className="error text-red-600 text-xs pt-1 w-full h-full overflow-hidden">
        {children}
      </div>
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
