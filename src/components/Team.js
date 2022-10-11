const Team = ({ members }) => {
  return (
    <div className="text-white md:h-[284px] h-72">
      <h3 className="text-xl">Team</h3>
      <div className="h-64 overflow-auto">
        {members.length > 0 ? (
          <ul className="mt-2">
            {members.map((member, idx) => {
              return (
                <li key={idx}>
                  {idx + 1}. {member}
                </li>
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
