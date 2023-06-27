import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Contact() {
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="mt-10">
        <h3 className="text-l font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Contact
        </h3>
        <div className="mt-10">
          <p>TODO</p>
        </div>
      </div>
    </>
  )
}
