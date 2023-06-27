import { PageSEO } from '@/components/SEO'
import membersData from '@/data/members/members.json'
import MembersLayout from '@/layouts/MembersLayout'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
  const faculty = []
  const phd = []
  const masters = []
  const honours = []
  const alumni = []
  membersData.members.forEach((member) => {
    switch (member.category) {
      case 'faculty':
        faculty.push(member)
        break
      case 'phd':
        phd.push(member)
        break
      case 'masters':
        masters.push(member)
        break
      case 'honours':
        honours.push(member)
        break
      case 'alumni':
        alumni.push(member)
        break
      default:
        break
    }
  })
  return { props: { faculty, phd, masters, honours, alumni } }
}
export default function Members({ faculty, phd, masters, honours, alumni }) {
  return (
    <>
      <PageSEO title={`Members`} description={siteMetadata.description} />
      <MembersLayout
        faculty={faculty}
        phd={phd}
        masters={masters}
        honours={honours}
        alumni={alumni}
      />
    </>
  )
}
