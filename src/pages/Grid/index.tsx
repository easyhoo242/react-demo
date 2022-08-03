import { Divider } from 'react-vant'
import './index.less'

export default function Grid() {
  return (
    <>
      <div className='container'>
        {new Array(7)
          .fill(null)
          .map((_, index) => index)
          .map((item) => {
            return <div key={item}>KEY：{item + 1}</div>
          })}
      </div>

      <main>
        <section className='body'>
          <div className='banner center-center'>banner</div>

          {new Array(8)
            .fill(null)
            .map((_, index) => index)
            .map((item) => {
              return (
                <div key={item} className={`items item-${item} center-center`}>
                  KEY: {item + 1}
                </div>
              )
            })}
        </section>
      </main>
    </>
  )
}
