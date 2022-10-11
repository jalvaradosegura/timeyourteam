import { useState } from "react"

import { AddMemberInput, Stopwatch, Team } from "./components"

const App = () => {
  const [members, setMembers] = useState([])

  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-r from-[#FCD04C] to-[#F97416] p-4">
      <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-5 w-full">
        <div className="sm:col-span-3 w-full">
          <Stopwatch />
        </div>
        <div className="sm:col-span-2 sm:border-l p-4 space-y-4 w-full">
          <AddMemberInput members={members} setMembers={setMembers} />
          <Team members={members} />
        </div>
      </div>
    </div>
  )
}

export default App
