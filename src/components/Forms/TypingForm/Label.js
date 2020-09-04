export const Label = ({ title, label, innerHTML, description, name }) => (
  <div className="mb-2">
    {title && <h4 className="my-3">{title}</h4>}
    {label && (
      <label htmlFor={name}>
        <h5>{label}</h5>
      </label>
    )}
    {innerHTML && (
      <p className="text-xl opacity-100 mb-12" dangerouslySetInnerHTML={{ __html: innerHTML }} />
    )}
    {description && <p>{description}</p>}
  </div>
)
