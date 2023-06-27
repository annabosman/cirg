function Doi({ doi }) {
  return (
    <span>
      {' '}
      |{' '}
      <a
        href={doi}
        target="_blank"
        className="text-base leading-6 text-primary-750 underline-offset-4 hover:text-primary-400 hover:underline"
        rel="noreferrer"
      >
        DOI
      </a>
    </span>
  )
}

function Publication({ title, authors, year, publishedIn, doi, url }) {
  return (
    <div className="md p-4 md:w-full">
      <div className={`overflow-hidden border-0 border-gray-200 border-opacity-60`}>
        <div className="leading-8">
          {url ? (
            <a
              href={url}
              target="_blank"
              className="text-base leading-6 text-primary-750 underline 	  underline-offset-2 hover:text-primary-400"
              rel="noreferrer"
            >
              {title}
            </a>
          ) : (
            { title }
          )}
          <p className=" max-w-none text-gray-300">
            {`${authors.join(', ')} | ${publishedIn} | ${year}`}
            {doi && <Doi doi={doi}></Doi>}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Publication
