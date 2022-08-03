import './index.less'
import { useState } from 'react'

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

let preIndex = 0
const ARR_LEN = 5

export default function Css() {
  const [_index, setIndex] = useState(0)

  function init(index: number) {
    const box = document.querySelector('.box')!
    const items = box.children as HTMLCollection

    if (!!(preIndex - _index)) {
      items[index - 1].style.transform = 'translateX(0vw)'
      items[index].style.transform = 'translateX(85vw)'
    } else {
      items[index].style.transform = 'translateX(-85vw)'
      items[index + 1].style.transform = 'translateX(0vw)'
    }
  }

  function handlePre() {
    if (_index === 0) {
      preIndex = 0
      setIndex(ARR_LEN - 1)
      init(ARR_LEN - 1)
      return
    }

    preIndex = _index
    setIndex(_index - 1)

    console.log(preIndex, _index)

    init(_index - 1)
  }

  function handleNext() {
    if (_index === ARR_LEN - 1) {
      preIndex = ARR_LEN - 1
      setIndex(0)
      init(0)

      console.log(preIndex, _index)

      return
    }

    preIndex = _index
    setIndex(_index + 1)

    console.log(preIndex, _index)

    init(_index)
  }

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
      <div className='cw-book'>
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
      </div>
      <hr />

      <div className='lb-wrap'>
        <div className='box'>
          {new Array(ARR_LEN).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className={`item ${index === _index ? 'active' : ''}`}
              >
                {index}
              </div>
            )
          })}
        </div>

        <div className='click'>
          <button className='pre-btn' onClick={handlePre}>
            上一张
          </button>
          <button className='nex-btn' onClick={handleNext}>
            下一张
          </button>
        </div>
      </div>
    </>
  )
}
