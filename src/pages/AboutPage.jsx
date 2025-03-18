import SectionDivider from '../components/divider/SectionDivider'
import PropTypes from 'prop-types'

export default function AboutPage() {
  return (
    <section className="h-full flex flex-col items-center my-8 gap-4">
      <div className="text-center w-[50%] mx-auto">
        <h1 className="text-6xl font-medium text-(--primary-color)">About</h1>
        <h3 className="text-lg font-thin text-gray-600">
          More Information About Our Project
        </h3>
      </div>
      <SectionDivider className="w-[80%] mb-8" />

      <div className="w-[50%] mx-auto">
        <div className="flex flex-col gap-y-8">
          <AboutSection
            label="PROJECT"
            text="Wikipedia Powered with Fuzzy Search"
          />
          <AboutSection
            label="DESCRIPTION"
            text="A Distributed Search Engine which utilizes EC2 Compute Nodes that
            allow us to provide efficient and reliable fuzzy search capabilities. Our 
            application is split into three phases: Indexing, Searching, and Serving.
            The Wikipedia dump is first index, converted to JSONL, then stored at HDFS.
            The next phase occurs when users search. The index shard is distributed among the nodes.
            Additionally, shards are replication in the nodes. Lastly, the application is hosted by a 
            React frontend client. The client makes request which interacts a load-balancer that distributes
            the request amoung our server group. The server then directly interacts with the Lucene Compute Nodes
            and awaits a response to send back to the client">
            <span className="block mt-4">
              For more information,{' '}
              <a
                className="text-blue-500"
                href="https://docs.google.com/presentation/d/14_jKemhpoe4TN59FV7WQbxNJIt6aeSChYAxVz05cjK4/edit#slide=id.g339e6244082_0_0">
                vist our slides
              </a>
            </span>
          </AboutSection>
          <AboutSection label="ARCHITECTURE">
            <div className="flex flex-col gap-8">
              <ImageSection
                label="Application Flow"
                img="/src/assets/images/app-architecture.svg"
              />
              <ImageSection
                label="Lucene EC2 Compute Nodes "
                img="/src/assets/images/lucene-architecture.svg"
              />
            </div>
          </AboutSection>
        </div>
      </div>
    </section>
  )
}

function AboutSection({label, text, children}) {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">{label}</h1>
      <p className="text-lg font-light text-gray-600">{text}</p>
      {children}
    </div>
  )
}

function ImageSection({label, img}) {
  return (
    <div>
      <h4 className="text-lg text-gray-600">{label}</h4>
      <img src={img} alt={label} />
    </div>
  )
}

AboutSection.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node
}

ImageSection.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
