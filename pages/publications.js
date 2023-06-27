import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import publicationData from '@/data/publication/publications.json'
import PublicationLayout from '@/layouts/PublicationLayout'
export const PUBLICATIONS_PER_PAGE = 15

export async function getStaticProps() {
  const publicationsGroupedByYear = {}
  publicationData.publications.forEach((publication) => {
    if (!(publication.year in publicationsGroupedByYear)) {
      publicationsGroupedByYear[publication.year] = []
    }
    publicationsGroupedByYear[publication.year].push(publication)
  })
  return { props: { publicationsGroupedByYear } }
}

export default function Publications({ publicationsGroupedByYear }) {
  return (
    <>
      <PageSEO title={`Publication`} description={siteMetadata.description} />
      <PublicationLayout publicationsGroupedByYear={publicationsGroupedByYear} />
    </>
  )
}
