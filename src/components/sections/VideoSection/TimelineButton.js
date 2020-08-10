import Link from 'next/link'

export default function TimelineButton({ title, date, isPast, isActive, ...linkProps }) {
  return (
    <>
      <li className="flex-auto md:m-1">
        <Link {...linkProps}>
          <button
            type="button"
            className={`bg-transparent rounded-md ${
              isActive && 'bg-opacity-25 bg-black'
            } hover:bg-opacity-25 hover:bg-black active:text-light w-full h-full`}
          >
            <div
              className={`flex flex-col justify-start items-center lg:flex-row-reverse lg:justify-between w-full h-full lg:h-20 p-1 md:p-3 lg:p-6 overflow-hidden ${
                isActive && 'border-b-2 md:border-b-0'
              } border-primary`}
            >
              <h6 className={`md:text-xl ${isActive && 'text-primary'}`}>{date}</h6>
              <p
                className={`hidden md:inline font-semibold mt-1 lg:m-0 lg:w-1/2 lg:text-left ${
                  isActive && 'text-lighter'
                } opacity-100`}
              >
                {title}
              </p>
            </div>
            <div className="line__container hidden md:block lg:absolute">
              <div className={`line ${isPast && 'bg-primary'} bg-gray-500 h-1/2 lg:h-full`} />
              <div
                className={`bubble ${
                  isActive ? 'bg-darker border-primary' : 'bg-transparent border-transparent'
                } border-2 h-4 w-4 rounded-full`}
              >
                <div
                  className={`bullet ${isPast && 'bg-primary'} bg-current h-2 w-2 rounded-full`}
                />
              </div>
            </div>
          </button>
        </Link>
      </li>
      <style jsx>{`
        .line__container {
          width: 110%;
          margin-left: 50%;
        }

        .bubble {
          margin-top: calc(-0.5rem - 1px);
          margin-left: -0.5rem;
        }

        .bullet {
          transform: translate(2px, 2px);
        }

        li:last-child .line {
          visibility: hidden;
        }

        button:hover h6 {
          color: var(--color-main-primary);
        }

        @media screen and (min-width: 1024px) {
          .line__container {
            width: 0.125rem;
            margin-left: -0.125rem;
            height: 5.5rem;
            margin-top: calc(-5.5rem / 2 + 0.5rem / 2);
            transform: rotate(180deg);
          }

          .bubble {
            margin-left: calc(-0.375rem - 1px);
          }
        }
      `}</style>
    </>
  )
}
