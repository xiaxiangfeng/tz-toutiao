const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const { parse } = require('url')
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const rootStatic = async (req, res) => {
  const parsedUrl = parse(req.url, true)
  const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico']
  if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
    const path = join(__dirname, 'static', parsedUrl.pathname)
    await app.serveStatic(req, res, path)
    return true
  }
  return false
}

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('*', async ctx => {
    const root = await rootStatic(ctx.req, ctx.res)

    if (!root) {
      await handle(ctx.req, ctx.res)
    }
    
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})