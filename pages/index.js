import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, 4)
  return { props: { posts: initialDisplayPosts } }
}

export default function Home({ posts }) {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="lg:py-50 mx-auto py-20 sm:py-48">
          <div className="text-center">
            <div className="rounded-lg border-8 border-primary-750 bg-primary-700 bg-opacity-0  p-12 shadow-sm">
              <h1 className="text-4xl font-bold tracking-tight  md:text-6xl">
                Computational Intelligence
              </h1>
              <h1 className="text-4xl font-bold tracking-tight  md:text-6xl">Research Group</h1>
              <p className="text-md mt-6 leading-8 sm:text-lg">@ UNIVERSITY OF PRETORIA</p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#about"
                className="rounded-md border-2  px-3.5 py-2.5 text-sm font-semibold  shadow-sm  hover:border-4 hover:border-primary-750 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
        <div className="py-24 sm:py-32" id="about">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight underline decoration-primary-750 underline-offset-8 sm:text-4xl">
                About
              </p>
              <p className="text-md mt-6 text-justify leading-8 ">
                The Computational Intelligence Research Group (CIRG) focuses on various aspects of
                fundamental and applied computational intelligence and machine learning research.
                Nature-inspired algorithms such as artificial neural networks, deep learning
                methods, self-organizing maps, particle swarm optimization and evolutionary
                computing are studied both theoretically and practically. Real-life applications
                include computer vision, data mining and anomaly detection.
              </p>
              <div>
                <div className="max-w-4xl px-6 sm:px-0">
                  <p className="mt-20 text-3xl font-bold tracking-tight underline decoration-primary-750 underline-offset-8 sm:text-4xl">
                    Research Fields
                  </p>
                  <div className="mt-10 grid grid-cols-1 dark:border-gray-600 lg:grid-cols-2	lg:place-items-center">
                    <div>
                      <ul className="w-1/2 sm:w-full">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Deep Learning
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Swarm Intelligence
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Evolutionary Computation
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Machine Learning
                        </li>
                        <li className="w-full py-4">Anomaly Detection</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="w-1/2 sm:w-full">
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Self-Organizing Maps
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Computer Vision
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Data and Text Mining
                        </li>
                        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                          Fitness Landscape Analysis
                        </li>
                        <li className="w-full py-4">Artificial Neural Networks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto px-0 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight underline decoration-primary-750 underline-offset-8 sm:text-4xl">
              Lastest news
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-x-20">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="border-l-1 flex max-w-xl flex-col items-start justify-between p-2   leading-8"
                >
                  {/* <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={`/blog/${post.slug}`}
                      className="relative z-10 rounded-full  px-3 py-1.5 font-medium "
                    >
                      {post.title}
                    </a>
                    <p>{post.summary}</p>
                  </div> */}
                  <div className="group relative">
                    <time className="text-xs text-gray-500">{`${post.date.split('T')[0]}`}</time>
                    <span>
                      {' '}
                      <h3 className="text-lg font-semibold leading-6 text-primary-750">
                        <a href={`/blog/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                    </span>
                    <p>{post.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-4 mt-20 mb-0 flex flex-col items-center">
          <img src="/static/images/faculty_logo.png" className="max-w-sm"></img>
        </div>
      </div>
    </div>
  )
}
