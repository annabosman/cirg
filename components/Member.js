export default function Member({ member }) {
  return (
    <li key={member.name}>
      <div className="flex items-center gap-x-6">
        {member.imageUrl ? (
          <img className="h-16 w-16 rounded-full" src={member.imageUrl} alt="" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeNinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        )}

        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight">{member.name}</h3>
          <p className="text-sm font-semibold leading-6 text-primary-750">
            {`${member.role}`}
            {member.orcid && (
              <p>
                <a href={member.orcid} className="font-bold underline">
                  ORCID
                </a>
              </p>
            )}
            {member.dissertation && (
              <p>
                <a
                  href={member.dissertation}
                  target="_blank"
                  className="font-bold underline"
                  rel="noreferrer"
                >
                  Disseration
                </a>
              </p>
            )}{' '}
          </p>
        </div>
      </div>
    </li>
  )
}
