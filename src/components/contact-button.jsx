import { useEffect } from "react"
import { useState } from "react"

const encodedMailLink =
    "PGEgaHJlZj0ibWFpbHRvOmRvdWdsaTFzcXJkQGdtYWlsLmNvbT9zdWJqZWN0PVR1dG9yaW5nJTIwSW5xdWlyeSZib2R5PURlYXIlMjBFcmljJTJDJTBBJTBBSSdtJTIwaW50ZXJlc3RlZCUyMGluJTIweW91ciUyMHR1dG9yaW5nJTIwc2VydmljZXMhIj5kb3VnbGkxc3FyZEBnbWFpbC5jb208L2E+"
const encodedPhone = "OTcxLTM0NC00MjY0"

export const ContactButton = ({}) => {
    const decodedLink = atob(encodedMailLink)
    const decodedPhone = atob(encodedPhone)
    const emailLink = <span dangerouslySetInnerHTML={{ __html: decodedLink }} />
    const phoneText = (
        <span dangerouslySetInnerHTML={{ __html: decodedPhone }} />
    )

    const contactInfo = (
      <span className="border-2 rounded-2xl pb-1.5 pt-1.5 pr-1 pl-1"><strong>Eric Douglass</strong> | <strong>Email:</strong> {emailLink} | <strong>Phone:</strong> {phoneText} </span>
    )

    const [revealed, setRevealed] = useState(false)
    const [control, setControl] = useState(
        <a className="p-1.5 mb-4 mt-4 border-2 rounded-2xl" href="#!"
            onClick={() => {
                setRevealed(contactInfo)
            }}
        >
            Show Contact Info
        </a>
    )

    useEffect(() => {
        if (revealed) {
            setControl(contactInfo)
        }
    }, [revealed])

  return <div className="text-xl">{ control }</div>
}
