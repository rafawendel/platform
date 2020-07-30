export default function SplittedParagraphs({ children }) {
  return children.split('\n').map((paragraph, i) => (
    <p key={`paragraph-${i + 1}`} className="text-lg leading-relaxed first:mt-2 mb-4">
      {paragraph}
    </p>
  ))
}
