import styled from 'styled-components'

const Header = styled.div`
  .m-header-l {
    cursor: pointer;
    > a {
      display: block;
      padding: 0;
      background-image: url(https://mianbaoduo.com/img/logo.4ed37255.svg);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }

    > div {
      color: #191919;
      line-height: 20px;
    }
  }

  .m-header-r {
    cursor: pointer;
    width: 33px;
    height: 33px;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    > img {
      height: 26px;
      width: 26px;
      display: inline-block;
    }
  }
`

export default function MHeader() {
  return (
    <Header className='px-21px py-17px flex items-center justify-between'>
      <div className='m-header-l'>
        <a href='/'></a>
        <div>面包多</div>
      </div>

      <div className='m-header-r'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAADkUlEQVRIS72WXWhbZRjHf89Jctol7TH7KFtb0k2HCE7XRY2w4ZW6gVjtFJGW4piIXojKEMUPRARBhl4Ik924WRRmQRFW/LzxwgvddFldHVu1il0712x2TductuY7jyRp2mX5ah14rg7v+f+f3/s8z3k/hP/pkWvhWJb1IfCpbdtf14qzYpB+TyOricsWEo2Njb8D+2dnZ3uzIB2ggwRnZDujV4NrgvQ4m3DSA+xCZRuCBfq8BHjXsqx9IvJ5JBIZ0SAPgnwGuksCfLdskP5MC2n2g3QDziKj6BAJ7pAdRAvjGuSJ7LsE+KBcGctmpAM8QFo+QlhdufZ6FvgSZYQAh0TQan0qAekAe0nLYQRHrQYvfhc9DfSjTANbgdtROuRO/ipoikAaZCcq36wIUnE2ehqTHdLOfK6kizU+hZeUDAHNy86kplDfkwDPFYOCuca/VNO7MkEK9BYJMJzLSI+xCpeEAO/K4ixHrQclwDN5UJBOkP6atlXtsG4vONfB3HGY7AWNVbcpfxPQ5jzoBO8g8kJVh3c3bP4ExLUkm/sJhu8GXVxOJSEyaQfzc96bChkdBdldGWTA1vNgtpRKzu+DiQMVreFLG4na3vsLGX2LyD0V1S4ftI+V/xw+Auf2VLSGRm+GlLOrAPoCkY6KaqkH/yQY7lJJ6C0IvVbReuHPW1F1dOZBJzmAyrNVe9TyBrS8XixJTsKQH5LjZa3plJPQ6BZEjfY8aIAeMnKk5l/X9DQ0PQXOtTD3I4y/CvE/ytqSiTqmJnwkYg22b8OptYV1tGZhHdXVhFURqMLMZCvR+etIp8ycUkT7fF2DPUtbUJBekMevBRSPepgYv3ExRHZHN1Tvau0ePLYE+oGNmJLd+j3/FWZPNxEJty6B0KO+7sGHc5ldGVRP8CQi71cDZcuTiLlxmXEMR7pIejl0A7F/rMLYpUwqdtumx369WALKDkx91fZ2POZ+USSD04zj9sxQ77GRhSlFws3Y0+sRSeOxwnisKVxmjHi0gcuhzfm5CxGcyXvbHjlzskAte8KO9flfNgzeVM0f4U5XDHfDDNk/KTpf7tDNLBQne8zqWL0kO9d3nf3lynQrXk4u9Pm3q+hBRfzL7FnKMNKHk6b9yvUPjc5c7al6C1KQsY+33WcYsgd0J8ia4gDZjvEbRqbflPihDY8On6s0qZrXrYJRFbnY529LGNrqANOQjJ2os0fKzb4c7F/DXT3Z4fQorQAAAABJRU5ErkJggg=='
          alt=''
        />
      </div>
    </Header>
  )
}
