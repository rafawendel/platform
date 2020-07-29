export default function PictureVertical({ src, alt }) {
  return (
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img alt={alt} className="max-w-full rounded-lg shadow-lg" src={src} />
    </div>
  )
}
