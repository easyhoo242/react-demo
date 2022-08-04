import styled from 'styled-components'
import Header from '~/components/Header'

const TopWrapper = styled.div`
  color: #191919;

  height: 480px;
  padding-top: 0;
  background-image: image-set(
    url(https://mianbaoduo.com/img/m-top-bg@2x.d7d7050e.png) 1x,
    url(https://mianbaoduo.com/img/m-top-bg@2x.d7d7050e.png) 2x
  );
  background-position: top;
  background-size: 100% 100%;

  .content {
    margin: 55px 0 28px;

    > div {
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
      text-align: center;
    }
  }

  .desc {
    text-align: center;
    margin-bottom: 48px;
    padding: 0 48px;

    font-size: 16px;
    line-height: 24px;

    strong {
      color: #ff5c00;
    }
  }

  .btns {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      padding: 8px 20px;
      border: 1px solid #ccc;
      border-radius: 1.5rem 0 1.5rem 0;
      font-weight: bold;

      &:first-child {
        margin-right: 30px;
      }

      &.active {
        background-color: #fec31a;
        color: #fff;
      }
    }
  }
`

export default function Top() {
  return (
    <TopWrapper>
      <Header />

      <div className='content'>
        <div>你专心创作</div>
        <div>面包多帮你获得更多收入</div>
      </div>

      <div className='desc'>
        <strong>20000+</strong>
        创作者在面包多，通过出售课程，文章，绘画，创意作品，软件，电子书，音乐，
        <strong>数百万元</strong>
        现在已支持全球支付 🎉
      </div>

      <div className='btns'>
        <div className='active'>开始创作</div>
        <div>探索更多</div>
      </div>
    </TopWrapper>
  )
}
