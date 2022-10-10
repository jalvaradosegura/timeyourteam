import { useFormik } from "formik"

const AddMemberInput = ({ members, setMembers }) => {
  const formik = useFormik({
    initialValues: {
      member: "",
    },
    onSubmit: (values) => {
      setMembers([...members, values.member])
    },
  })

  return (
    <div className="relative">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <input
          id="member"
          name="member"
          type="text"
          className="outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-300 focus:border-orange-300 "
          placeholder="John Doe"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-orange-400 hover:bg-orange-500 font-medium rounded-lg text-sm px-4 py-2"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddMemberInput
