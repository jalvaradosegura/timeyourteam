const Team = ({ members }) => {
  return (
    <div className="text-white">
      <h3 className="text-xl">Team</h3>
      {members.length > 0 ? (
        <ul className="mt-2">
          <p className="invisible h-0">
            You haven{"'"}t added any member yet :(
          </p>
          {members.map((member, idx) => {
            return (
              <li key={idx}>
                {idx + 1}. {member}
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="">You haven{"'"}t added any member yet :(</p>
      )}
    </div>
  )
}

export default Team
