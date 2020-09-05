import PlainModal from '../../common/Modals/PlainModal'

export default function GroupModal({
  title,
  leaders,
  specialty,
  description,
  weekDay,
  startsAt,
  endsAt,
  preferenceByYear,
  show,
  setActive
}) {
  const preference = (() => {
    const prefers =
      preferenceByYear[5].length >= 3 || preferenceByYear[4].length >= 3
        ? preferenceByYear[5]
        : [...preferenceByYear[5], ...preferenceByYear[4]]

    return prefers[0]
      ? `Preferível ${prefers
          .sort((a, b) => a - b)
          .map(i => `${i}°`)
          .join(', ')
          .replace(/(.+)(, )(.+)$/, '$1 e $3')} ano${prefers.length > 1 ? 's' : ''}`
      : 'Qualquer interessado'
  })()

  return (
    <PlainModal title={title} subtitle={leaders} show={show} setActive={setActive}>
      <div className="mb-3">
        <h6>Horários</h6>
        <p>
          {weekDay}: {startsAt} - {endsAt}
        </p>
      </div>
      <div className="mb-3">
        <h6>Público-alvo</h6>
        <p>{preference}</p>
      </div>
      <div className="mb-3">
        <h6>Especialidade</h6>
        <ul>
          {specialty.map((spec, i) => (
            <li key={`specialty-${i + 1}`}>
              <p>{spec}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <h6>Descrição</h6>
        <p>{description}</p>
      </div>
    </PlainModal>
  )
}
