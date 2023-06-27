import MembersGroup from '@/components/MembersGroup'

export default function MembersLayout({ faculty, phd, masters, honours, alumni }) {
  return (
    <div className="">
      <MembersGroup members={faculty} group="Faculty" />
      <MembersGroup members={phd} group="PhD Students" />
      <MembersGroup members={masters} group="Masters Students" />
      <MembersGroup members={honours} group="Honours Students" />
      <MembersGroup members={alumni} group="Alumni" />
    </div>
  )
}
