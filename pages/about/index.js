import Link from 'next/link'
import 'isomorphic-unfetch'

const About = ({ stars }) => (
  <div>
    <Link href="/blog"><a>去博客</a></Link>
    <div>Next stars: {stars}</div>
  </div>
)

About.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default About