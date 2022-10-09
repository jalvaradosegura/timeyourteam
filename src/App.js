import { AddMemberInput, Stopwatch, Team } from "./components"

const App = () => {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-r from-[#FCD04C] to-[#F97416]">
      <h1 className="fixed top-6 text-4xl font-medium select-all text-white">
        Time Your Team
      </h1>
      <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-5">
        <div className="self-center sm:col-span-3">
          <Stopwatch />
        </div>
        <div className="sm:col-span-2 sm:border-l p-4 space-y-4">
          <AddMemberInput />
          <Team />
        </div>
      </div>
    </div>
  )
}

export default App
