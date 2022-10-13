import { CopyMembersStats } from "."
import { XMark } from "./Svgs"

const formatStopwatchTime = (timeStr) => {
  if (timeStr == null) {
    return null
  }

  let time = timeStr.split(":")
  return (
    <div className="text-center">
      <span>{time[0]}:</span>
      <span>{time[1]},</span>
      <span>{time[2]}</span>
    </div>
  )
}

const Team = ({ memberIdx, members, newStart, setMembers }) => {
  const deleteRow = (memberIdx) => {
    let newMembers = members.filter((member, idx) => idx !== memberIdx)
    setMembers(newMembers)
  }

  return (
    <div className="text-white md:h-[284px] h-[172px]">
      <div className="flex items-center space-x-2">
        <h3 className="text-xl">Team</h3>
        <CopyMembersStats members={members} />
      </div>
      <div className="md:h-64 h-36 overflow-auto">
        {members.length > 0 ? (
          <ul className="mt-2">
            {members.map((member, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    "grid grid-cols-10 gap-4" +
                    (memberIdx === idx
                      ? " px-2 bg-green-400 bg-opacity-20 rounded"
                      : "")
                  }
                >
                  <div className="overflow-hidden truncate col-span-3">
                    {idx + 1}. {member.name}
                  </div>
                  <div className="col-span-3 text-center">
                    {member.time
                      ? formatStopwatchTime(member.membersTime)
                      : "-"}
                  </div>
                  <div className="col-span-3 text-center">
                    {member.time ? formatStopwatchTime(member.time) : "-"}
                  </div>
                  <div className="col-span-1 flex items-center justify-center space-x-1">
                    {newStart ? (
                      <span onClick={() => deleteRow(idx)}>
                        <XMark />
                      </span>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </ul>
        ) : (
          <p className="mt-2">You haven{"'"}t added any member yet :(</p>
        )}
      </div>
    </div>
  )
}

export default Team
