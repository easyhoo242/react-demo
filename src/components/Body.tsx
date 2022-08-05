import styled from 'styled-components'

const StyledBody = styled.div`
  .title {
    position: relative;
    z-index: 5;

    &:before {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      background: #ff5c00;
      top: 10px;
      left: 18%;
      border-radius: 7px;
      z-index: 3;
    }

    &:after {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      background: #ffcb01;
      border-radius: 7px;
      top: -5px;
      right: 18%;
      z-index: 3;
    }
  }
`

export default function Body() {
  return (
    <StyledBody className='mt-32px mb-70px'>
      <div className='title mx-auto text-18px flex justify-center'>
        创作者爱用的数字内容销售平台
      </div>

      <div className='tabs'></div>
    </StyledBody>
  )
}
