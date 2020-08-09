export default function SponsorCard({ logo, alt, href }) {
  return (
    <div className="h-20 flex items-center justify-center">
      <button className="w-full h-full p-2 bg-darker rounded-md overflow-hidden" type="button">
        <div className="logo h-full" role="img" aria-label={alt} />
      </button>
      <style jsx>{`
        .logo {
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url(${logo});
        }
      `}</style>
    </div>
  )
}
