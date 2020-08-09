export default function Timeline() {
  const buttons = [
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 2',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 1',
      date: '10/08',
      handler: () => null
    },
    {
      title: 'Dia 1 sadjfjsdj fsnkdf mnasad',
      date: '10/08',
      handler: () => null
    }
  ]
  return (
    <>
      <section className="px-4 pb-8 lg:py-0 lg:pl-8">
        <div className="grid gap-2 max-w-screen-md">
          {buttons.map(({ title, date, handler }, i) => (
            <button
              key={`btn-${i + 1}`}
              type="button"
              className="bg-transparent rounded-md hover:bg-opacity-25 hover:bg-black active:text-light"
            >
              <div className="flex flex-col justify-start items-center lg:flex-row-reverse lg:justify-between h-full lg:h-20 p-3 overflow-hidden">
                <h6 className="md:text-xl">{date}</h6>
                <p className="hidden md:inline font-semibold mt-1 lg:m-0 lg:w-1/2 lg:text-left">
                  {title}
                </p>
              </div>
              <div className="line__container hidden md:block lg:absolute">
                <div className="line bg-gray-500 h-1/2 lg:h-full" />
                <div className="bullet bg-current h-2 w-2 rounded" />
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

        .bullet {
          margin-top: calc(-0.25rem - 1px);
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

          .bullet {
            margin-left: -3px;
          }
        }
      `}</style>
    </>
  )
}
