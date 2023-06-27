import Card from './Card'
import Publication from './Publication'

export default function PublicationGroup({ year, publications }) {
  return (
    <div className="mx-auto max-w-screen-2xl gap-x-8 gap-y-20 border-b border-slate-100 px-6 py-5 lg:px-8 xl:grid-cols-6">
      <div className="max-w-2xl">
        <h2 className="text-3 first-letter:xl font-bold tracking-tight underline decoration-primary-750 sm:text-4xl">
          {year}
        </h2>
        <div className="grid grid-cols-1 divide-y">
          {publications.map((publication, index) => {
            return (
              <Publication
                key={index}
                title={publication.title}
                publishedIn={publication.publishedIn}
                doi={publication.doi}
                url={publication.url}
                authors={publication.authors}
                year={publication.year}
              ></Publication>
            )
          })}
        </div>
      </div>
    </div>
  )
}
