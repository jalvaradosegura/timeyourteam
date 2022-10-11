const formatStopwatchTime = (timeStr) => {
  if (timeStr == null) {
    return null
  }

  let time = timeStr.split(":")
  return (
    <div className="flex items-center">
      <span>{time[0]}:</span>
      <span>{time[1]},</span>
      <span>
        {time[2]}
      </span>
    </div>
  )
}

const Team = ({ members }) => {
  return (
    <div className="text-white md:h-[284px] h-[172px]">
      <h3 className="text-xl">Team</h3>
      <div className="md:h-64 h-36 overflow-auto">
        {members.length > 0 ? (
          <ul className="mt-2">
            {members.map((member, idx) => {
              return (
                <div key={idx} className="flex">
                  <p>
                    {idx + 1}. {member.name}
                  </p>
                  <div className="ml-3">{formatStopwatchTime(member.time)}</div>
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
