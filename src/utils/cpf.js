export function validateCPF(cpf) {
  const type = typeof cpf
  if (type !== 'string' && type !== 'number') throw new Error('Invalid type')

  const normalizedCpf = (type === 'number' ? cpf.toString() : cpf).replace(/[^0-9]+/g, '')
  const cpfDigits = Array.from(normalizedCpf).map(i => +i)
  if (cpfDigits.includes(NaN)) throw new Error('Invalid digit in the CPF')
  if (cpfDigits.length !== 11) throw new Error('Please enter a CPF with a valid size')

  const repeatedDigitTester = cpfDigits.reduce(
    (verifier, d) => verifier && cpfDigits[0] === d,
    true
  )
  if (repeatedDigitTester) throw new Error('A CPF cannot be a sequence of a single number')

  const parse10Or11As0 = num => (num === 10 || num === 11 ? 0 : num)
  const cpfReducer = constant =>
    (cpfDigits.reduce((sum, d, i) => sum + d * (constant - i), 0) * 10) % 11

  const secondActualValidator = cpfDigits.pop()
  const secondValidator = parse10Or11As0(cpfReducer(11))

  const firstActualValidator = cpfDigits.pop()
  const firstValidator = parse10Or11As0(cpfReducer(10))

  if (firstActualValidator !== firstValidator)
    return "Invalid CPF, the first validator doesn't add up"
  if (secondActualValidator !== secondValidator)
    return "Invalid CPF, the second validator doesn't add up"
  return 'Valid CPF'
}

export function validateCPFAsync(cpf) {
  return new Promise((resolve, reject) => {
    try {
      const validator = validateCPF(cpf)
      resolve(validator)
    } catch (_e) {
      reject(_e)
    }
  })
}
