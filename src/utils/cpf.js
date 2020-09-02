export function validateCPF(cpf) {
  const type = typeof cpf
  if (type !== 'string' && type !== 'number') throw 'Invalid type'

  const normalizedCpf = (type === 'number' ? cpf.toString() : cpf).replace(/[^0-9]+/g, '')
  const cpfDigits = Array.from(normalizedCpf).map(i => +i)
  if (cpfDigits.includes(NaN)) throw 'Invalid digit in the CPF'
  if (cpfDigits.length !== 11) throw 'Please enter a CPF with a valid size'

  const repeatedDigitTester = cpfDigits.reduce(
    (verifier, d) => verifier && cpfDigits[0] === d,
    true
  )
  if (repeatedDigitTester) throw 'A CPF cannot be a sequence of a single number'

  const parse10Or11As0 = num => (num === 10 || num === 11 ? 0 : num)

  const secondActualValidator = cpfDigits.pop()
  const secondValidator = parse10Or11As0(
    (cpfDigits.reduce((sum, d, i) => sum + d * (11 - i), 0) * 10) % 11
  )

  const firstActualValidator = cpfDigits.pop()
  const firstValidator = parse10Or11As0(
    (cpfDigits.reduce((sum, d, i) => sum + d * (10 - i), 0) * 10) % 11
  )

  if (firstActualValidator !== firstValidator)
    return "Invalid CPF, the first validator doesn't add up"
  if (secondActualValidator !== secondValidator)
    return "Invalid CPF, the second validator doesn't add up"
  return 'Valid CPF'
}

export function validateCPFAsync(cpf) {
  return new Promise((resolve, reject) => {
    try {
      resolve(validateCPF(cpf))
    } catch (_e) {
      reject(_e)
    }
  })
}
