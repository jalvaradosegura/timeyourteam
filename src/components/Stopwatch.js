import { useEffect, useState } from "react"

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div className="flex flex-col">
      <h1 className="text-8xl md:text-9xl flex-1 font-bold text-white flex items-center justify-center">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="relative">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          <span className="absolute text-xl ml-2">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-1 mt-2">
        {timerOn ? (
          <>
            <button className="bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold hover:bg-gray-500">
              Lap
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 px-4 py-2 w-full rounded-xl text-white font-bold"
              onClick={() => setTimerOn(false)}
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
              onClick={() => setTimerOn(true)}
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
