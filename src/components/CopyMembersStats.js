import { useState } from "react"

import { CopiedSvg, CopySvg } from "./Svgs"

const CopyMembersStats = ({ members }) => {
  const [showCopy, setShowCopy] = useState(true)

  const copyPressed = () => {
    setShowCopy(false)
    copyToClipboard()
    setTimeout(() => {
      setShowCopy(true)
    }, 1500)
  }

  const copyToClipboard = () => {
    let message = getClipboardMessage()
    navigator.clipboard.writeText(message)
  }

  const getClipboardMessage = () => {
    const messageHeader = "Time Your Team\n\n"

    let messageBody = ""
    let totalTime = "00:00:00"
    members.map((member, idx) => {
      let membersTime = member.membersTime ? member.membersTime : null
      if (membersTime) {
        let membersTimeSplitted = membersTime.split(":")
        membersTime = `${membersTimeSplitted[0]}:${membersTimeSplitted[1]},${membersTimeSplitted[2]}`
      } else {
        membersTime = "-"
      }
      messageBody += `${member.name}: ${membersTime}\n`

      if (member.time) {
        totalTime = member.time
        let totalTimeSplitted = totalTime.split(":")
        totalTime = `${totalTimeSplitted[0]}:${totalTimeSplitted[1]},${totalTimeSplitted[2]}`
      }

      if (idx === members.length - 1) {
        messageBody += `\nTotal time: ${totalTime}`
      }
    })

    const footerMessage = `https://${window.location.hostname}`

    let finalMessage = `${messageHeader}${messageBody}\n${footerMessage}`

    return finalMessage
  }

  return (
    <>
      {showCopy ? (
        <div
          className="flex items-center cursor-pointer hover:text-gray-100"
          onClick={copyPressed}
        >
          <CopySvg>Copy</CopySvg>
        </div>
      ) : (
        <div className="flex items-center hover:text-gray-100">
	  <CopiedSvg>Copied!</CopiedSvg>
        </div>
      )}
    </>
  )
}

export default CopyMembersStats
