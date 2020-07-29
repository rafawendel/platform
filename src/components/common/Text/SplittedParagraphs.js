export default function SplittedParagraphs({ text, textTailwindColor }) {
  return text.split('\n').map((paragraph, i) => (
    <p
      key={`paragraph-${i + 1}`}
      className={`text-${textTailwindColor} text-lg leading-relaxed ${i || 'mt-4'} mb-4`}
    >
      {paragraph}
    </p>
  ))
}
