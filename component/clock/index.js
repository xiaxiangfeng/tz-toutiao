export default ({ lastUpdate, light }) => {
  return (
    <div className={light ? 'light' : ''}>
      {format(new Date(lastUpdate))}
    </div>
  )
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n