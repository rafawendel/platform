export default function SponsorCard({ logo, alt, href, stylingClass }) {
  return (
    <div className="h-20 flex items-center justify-center">
      <button
        className={`${stylingClass} w-full h-full bg-darker rounded-md overflow-hidden`}
        type="button"
      >
        <a href={href} rel="noreferrer" target="_blank">
          <div className="logo h-full" role="img" aria-label={alt} />
        </a>
      </button>
      <style jsx>{`
        .logo {
          opacity: 0.75;
          filter: grayscale(100%);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url(${logo});
        }
      `}</style>
    </div>
  )
}
