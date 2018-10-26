import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from '../../component/clock'
import { serverRenderClock } from '../../actions/blog'

const Blog = (obj) => (
  <div>
    <div><Link href="/"><a>home</a></Link></div>
    <div><Link href="/about"><a>去关于我们</a></Link></div>
    <Clock lastUpdate={obj.lastUpdate} light={obj.light}/>
  </div>
)

Blog.getInitialProps = ({ reduxStore, req }) => {
  const isServer = !!req
  reduxStore.dispatch(serverRenderClock(isServer))

  return {}
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state.blog
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Blog)