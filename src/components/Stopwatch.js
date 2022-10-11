import { useEffect, useState } from "react"

const Stopwatch = ({ members, setMembers }) => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [newStart, setNewStart] = useState(true)

  const [memberIdx, setMemberIdx] = useState(0)

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

  const startButtonPressed = () => {
    setTimerOn(true)
    setNewStart(false)
  }

  const resetButtonPressed = () => {
    setTime(0)
    setMemberIdx(0)
    setNewStart(true)

    let newMembers = [...members]
    newMembers = newMembers.map((member, idx) => {
      return {...member, time: null}
    })
    setMembers(newMembers)
  }

  const lapButtonPressed = () => {
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let hundredths = ("0" + Math.floor((time / 10) % 100)).slice(-2)
    let memberTime = `${minutes}:${seconds}:${hundredths}`

    let newMembers = [...members]
    if (memberIdx > newMembers.length - 1) {
      newMembers[memberIdx] = { name: `Member ${memberIdx + 1}`, time: memberTime }
    } else {
      newMembers[memberIdx] = { ...newMembers[memberIdx], time: memberTime }
    }

    setMembers(newMembers)
    setMemberIdx(() => memberIdx + 1)
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-8xl md:text-9xl flex-1 font-bold text-white flex justify-center">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span className="relative">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          <span className="absolute bottom-3 text-xl ml-2">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-1 mt-2">
        {timerOn ? (
          <>
            <button
              className="bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold hover:bg-gray-500"
              onClick={lapButtonPressed}
            >
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
            {newStart ? (
              <button className="focus:outline-none disabled bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold cursor-not-allowed">
                Lap
              </button>
            ) : (
              <button
                className="bg-gray-400 px-4 py-2 w-full rounded-xl text-white font-bold hover:bg-gray-500"
                onClick={resetButtonPressed}
              >
                Reset
              </button>
            )}
            <button
              className="bg-green-400 hover:bg-green-500 px-4 py-2 w-full rounded-xl text-white font-bold"
              onClick={startButtonPressed}
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
