export default function Timeline() {
  const buttons = [
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null,
      isPast: true,
      isActive: false
    },
    {
      title: 'Dia 2',
      date: '11/08',
      handler: () => null,
      isPast: true,
      isActive: false
    },
    {
      title: 'Dia 4',
      date: '12/08',
      handler: () => null,
      isPast: false,
      isActive: true
    },
    {
      title: 'Dia 5',
      date: '13/08',
      handler: () => null,
      isPast: false,
      isActive: false
    },
    {
      title: 'Dia 6',
      date: '14/08',
      handler: () => null,
      isPast: false,
      isActive: false
    }
  ]
  return (
    <>
      <section className="px-4 pb-8 lg:py-0 lg:pl-8">
        <div className="grid gap-2 max-w-screen-md">
          {buttons.map(({ title, date, handler, isPast, isActive }, i) => (
            <button
              key={`btn-${i + 1}`}
              type="button"
              className={`bg-transparent rounded-md ${
                isActive && 'bg-opacity-25 bg-black'
              } hover:bg-opacity-25 hover:bg-black active:text-light `}
            >
              <div
                className={`flex flex-col justify-start items-center lg:flex-row-reverse lg:justify-between h-full lg:h-20 p-3 overflow-hidden ${
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
          ))}
        </div>
      </section>
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

        button:last-child .line {
          visibility: hidden;
        }

        button:hover h6 {
          color: var(--color-main-primary);
        }

        .grid {
          grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
        }

        @media screen and (min-width: 1024px) {
          .grid {
            grid-template-columns: minmax(12rem, 1fr);
          }

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
