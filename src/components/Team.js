const formatStopwatchTime = (timeStr) => {
  if (timeStr == null) {
    return null
  }

  let time = timeStr.split(":")
  return (
    <div className="flex">
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
                    "flex grid grid-cols-2 w-full gap-2 " +
                    (memberIdx == idx
                      ? "px-2 bg-green-400 bg-opacity-20 rounded"
                      : "")
                  }
                >
                  <p className="col-span-1 overflow-hidden truncate">
                    {idx + 1}. {member.name}
                  </p>
                  {member.time ? (
                    <div className="flex items-center col-span-1 justify-start grid grid-cols-2 gap-2 md:gap-1">
                      <div className="">{formatStopwatchTime(member.membersTime)}</div>
                      <div className="text-[12px] flex">
                        ({formatStopwatchTime(member.time)})
                      </div>
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
