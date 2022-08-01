import Mock from 'mockjs'
const {
  mock,
  Random: { date, cparagraph },
} = Mock

export const mockData = mock({
  'list|10': [
    {
      'id|+1': 1,
      'name|1': '',
      'date|1': mock('@date()'),
      'desc|2': mock('@cparagraph()'),
    },
  ],
})
