import { useFormik } from "formik"

import { MemberSvg } from "./Svgs"

const AddMemberInput = ({ members, setMembers }) => {
  const formik = useFormik({
    initialValues: {
      member: "",
    },
    onSubmit: (values) => {
      setMembers([...members, { name: values.member, time: null }])
      formik.resetForm()
    },
  })

  return (
    <div className="relative">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <MemberSvg />
        </div>
        <input
          id="member"
          name="member"
          type="text"
          className="outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-300 focus:border-orange-300 "
          placeholder="John Doe"
          onChange={formik.handleChange}
          value={formik.values.member}
          required
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
