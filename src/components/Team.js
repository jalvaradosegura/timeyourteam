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
                  <p>{idx + 1}. {member.name}</p>
		  <p className="ml-3">{member.time}</p>
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
