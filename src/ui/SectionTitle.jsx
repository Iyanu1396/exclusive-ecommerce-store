function SectionTitle({title}) {
  return (
    <span className="flex items-center gap-2 font-mont font-medium text-red-600">
    <div className="w-[20px] rounded-sm bg-red-600 py-4"></div>
    <p>{title}</p>
  </span>
  )
}

export default SectionTitle
