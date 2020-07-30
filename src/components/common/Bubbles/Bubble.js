export default function Bubble({ size, faIconClass, bubbleColor }) {
  return (
    <button
      // bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2
      // text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300
      // text-darker p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full
      // mr-1 mb-1
      className={`bg-${bubbleColor} ${
        size === 'lg' ? 'w-16 h-16 my-6 p-3' : size === 'md' ? 'w-12 h-12 my-4' : 'w-8 h-8 text-xs'
      } rounded-full outline-none focus:outline-none shadow-lg text-center inline-flex items-center justify-center`}
      type="button"
    >
      <i className={`${faIconClass}`} />
    </button>
  )
}
