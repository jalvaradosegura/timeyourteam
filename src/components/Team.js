const formatStopwatchTime = (timeStr) => {
  if (timeStr == null) {
    return null
  }

  let time = timeStr.split(":")
  return (
    <div className="flex items-center">
      <span>{time[0]}:</span>
      <span>{time[1]},</span>
      <span>{time[2]}</span>
    </div>
  )
}

const Team = ({ memberIdx, members }) => {
  return (
    <div className="text-white md:h-[284px] h-[172px]">
      <h3 className="text-xl">Team</h3>
      <div className="md:h-64 h-36 overflow-auto">
        {members.length > 0 ? (
          <ul className="mt-2">
            {members.map((member, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    "flex grid grid-cols-2 w-full " +
                    (memberIdx == idx
                      ? "px-2 bg-green-400 bg-opacity-20 rounded"
                      : "")
                  }
                >
                  <p className="col-span-1 overflow-hidden truncate">
                    {idx + 1}. {member.name}
                  </p>
                  {member.time ? (
                    <div className="ml-2 flex space-x-2 items-center col-span-1 justify-start">
                      <b>{formatStopwatchTime(member.membersTime)}</b>
                      <span className="text-xs flex">
                        ({formatStopwatchTime(member.time)})
                      </span>
                    </div>
                  ) : null}
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
