import PublicationGroup from '@/components/PublicationGroup'

export default function PublicationLayout({ publicationsGroupedByYear }) {
  return Object.keys(publicationsGroupedByYear)
    .sort((a, b) => b - a)
    .map((year) => {
      return (
        <PublicationGroup
          year={year}
          key={year}
          publications={publicationsGroupedByYear[year]}
        ></PublicationGroup>
      )
    })
}
