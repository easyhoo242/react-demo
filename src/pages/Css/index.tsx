import './index.less'

const movies = [
  {
    name: '#追梦人#',
    value: '1亿',
  },
  {
    name: '#醉拳舞#',
    value: '3亿',
  },
  {
    name: '#余年MV#',
    value: '5亿',
  },
  {
    name: '#css新世界#',
    value: '666',
  },
]

export default function Css() {
  return (
    <>
      <div>
        <ul className='initial-ul'>
          {movies.map((item) => {
            return (
              <li key={item.name}>
                <span>{item.name}</span>
                <small>{item.value}</small>
              </li>
            )
          })}
        </ul>
      </div>

      <hr />

      <div className='mb-1'>
        <div className='cw-box'>
          <div className='cw-content-1'>谢谢大家。</div>
        </div>
        <div className='cw-box'>
          <div className='cw-content-1'>
            谢谢大家购买我的书籍，如果你觉得内容还不错，欢迎推荐给同事或朋友。
          </div>
        </div>
      </div>

      <div className='cw-box'>
        <div className='cw-content-2'>谢谢大家。</div>
      </div>
      <div className='cw-box'>
        <div className='cw-content-2'>
          谢谢大家购买我的书籍，如果你觉得内容还不错，欢迎推荐给同事或朋友。
        </div>
      </div>

      <hr />
    </>
  )
}
