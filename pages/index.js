import asset from 'next/asset'
import Link from 'next/link'
import './styles.scss'

const logoPNG = require('../static/images/handler.png')

const Index = () => (
  <div>
    <p styleName="hello-next">Hello Next.js</p>
    <img src={logoPNG} />
    <div><Link href="/about"><a>去关于我们</a></Link></div>
  </div>
)

export default Index
