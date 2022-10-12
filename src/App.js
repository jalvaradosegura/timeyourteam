import { useEffect, useState } from "react"

import { AddMemberInput, Footer, Navbar, Stopwatch, Team } from "./components"

const App = () => {
  const [memberIdx, setMemberIdx] = useState(0)
  const [members, setMembers] = useState(() => {
    const membersSaved = localStorage.getItem("members")
    let initialValue = JSON.parse(membersSaved)

    if (initialValue != null) {
      initialValue = initialValue.map((member, idx) => {
        return { ...member, time: null, membersTime: null }
      })
    }

    return initialValue || []
  })

  const [newStart, setNewStart] = useState(true)

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members))
  }, [members])

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-[#FCD04C] to-[#F97416]">
      <Navbar />
      <div className="grid place-items-center p-4">
        <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-5 w-full">
          <div className="sm:col-span-3 w-full self-center">
            <Stopwatch
              members={members}
              setMembers={setMembers}
              memberIdx={memberIdx}
              setMemberIdx={setMemberIdx}
              newStart={newStart}
              setNewStart={setNewStart}
            />
          </div>
          <div className="sm:col-span-2 sm:border-l p-4 space-y-4 w-full flex flex-col justify-center">
            <AddMemberInput members={members} setMembers={setMembers} />
            <Team
              newStart={newStart}
              members={members}
              memberIdx={memberIdx}
              setMembers={setMembers}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
