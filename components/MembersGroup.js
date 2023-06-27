import Member from './Member'

export default function MembersGroup({ members, group }) {
  return (
    <div className="mx-auto mt-20 grid max-w-screen-2xl gap-x-8 gap-y-20 border-b border-slate-100 px-6 pb-20 lg:px-8 xl:grid-cols-6">
      <div className="max-w-2xl">
        <h2 className="text-3 first-letter:xl font-bold tracking-tight underline decoration-primary-750 sm:text-4xl">
          {group}
        </h2>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-6">
        {members.map((member, index) => (
          <Member key={index} member={member}></Member>
        ))}
      </ul>
    </div>
  )
}
