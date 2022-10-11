import { useState } from "react"

import { AddMemberInput, Stopwatch, Team } from "./components"

const App = () => {
  const [members, setMembers] = useState([])

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-[#FCD04C] to-[#F97416]">
      <nav className="p-4">
        <h1 className="text-4xl text-white text-center sm:text-left">Time Your Team</h1>
      </nav>
      <div className="grid place-items-center p-4">
        <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-5 w-full h-full">
          <div className="sm:col-span-3 w-full self-center">
            <Stopwatch />
          </div>
          <div className="sm:col-span-2 sm:border-l p-4 space-y-4 w-full h-full flex flex-col justify-center">
            <AddMemberInput members={members} setMembers={setMembers} />
            <Team members={members} />
          </div>
        </div>
      </div>
      <footer className="p-4 text-center text-white text-sm">
        Made with ❤️ by <a className="hover:text-slate-200" href="https://jorgealvarado.me/" target="_blank">Jorge Alvarado</a>
      </footer>
    </div>
  )
}

export default App
