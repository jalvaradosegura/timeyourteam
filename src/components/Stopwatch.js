import { useState } from "react"

const Stopwatch = () => {
  const [started, setStarted] = useState(false)

  return (
    <div className="flex flex-col">
      <h1 className="text-8xl md:text-9xl flex-1 font-bold text-white text-center">00:00</h1>
      <div className="grid grid-cols-2 gap-1 mt-2">
        {started ? (
          <>
            <button className="bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold hover:bg-gray-500">
              Lap
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 px-4 py-2 w-full rounded-xl text-white font-bold"
              onClick={() => setStarted(false)}
            >
              Stop
            </button>
          </>
        ) : (
          <>
            <button className="bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold hover:bg-gray-500">
              Reset
            </button>
            <button
              className="bg-green-400 hover:bg-green-500 px-4 py-2 w-full rounded-xl text-white font-bold"
              onClick={() => setStarted(true)}
            >
              Start
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Stopwatch
