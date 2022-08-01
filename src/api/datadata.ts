interface IDataType {
  data: {
    createdAt: number
    updatedAt: number
    id: string
    name: string
    lang: string
    person: string
  }[]

  createdAt: number
  updatedAt: number
  id: string
}

export interface IMovieDetail {
  data: {
    createdAt: number
    updatedAt: number
    id: string
    poster: string
    name: string
    genre: string
    description: string
    language: string
    country: string
    lang: string
    shareImage: string
    movie: string
  }[]
  writer: IDataType[]
  actor: IDataType[]
  director: IDataType[]

  updatedAt: number
  createdAt: number
  id: string
  originalName: string
  imdbVotes: number
  imdbRating: string
  rottenRating: string
  rottenVotes: number
  year: string
  imdbId: string
  alias: string
  doubanId: string
  type: string
  doubanRating: string
  doubanVotes: number
  duration: number
  dateReleased: string
}

export const movieDetail = {
  data: [
    {
      createdAt: 1603703565846,
      updatedAt: 1603703565846,
      id: '5f9687a5ee3680299115b979',
      poster:
        'https://wmdb.querydata.org/movie/poster/1603700644142-bfg461.jpg',
      name: '喜剧之王',
      genre: '喜剧/剧情/爱情',
      description:
        '尹天仇（周星驰 饰）一直醉心戏剧，想成为一名演员，平时除了做跑龙套以外，还会在街坊福利会里开设演员训练班。此时舞小姐柳飘飘在妈妈桑的带领下来到这里要求学做戏，原来柳飘飘有一段非常不愉快的经历，在尹天仇...',
      language: '粤语',
      country: '中国香港',
      lang: 'Cn',
      shareImage:
        'https://wmdb.querydata.org/movie/poster/1603703565838-5f9687a4ee3680299115b936.png',
      movie: '5f9687a4ee3680299115b936',
    },
    {
      createdAt: 1603968983150,
      updatedAt: 1603968983150,
      id: '5f9687a5ee3680299115b97a',
      poster:
        'https://wmdb.querydata.org/movie/poster/1603700645577-984a39.jpg',
      name: 'King of Comedy',
      genre: 'Art House & International/Comedy/Drama/Romance',
      description:
        'A bar girl hires a struggling actor to give her acting lessons so that she can feign a greater interest in her customers. The longer they work together, the more they find they have in common.',
      language: 'Cantonese',
      country: 'Hong Kong',
      lang: 'En',
      shareImage:
        'https://wmdb.querydata.org/movie/poster/1603968983134-5f9687a4ee3680299115b936.png',
      movie: '5f9687a4ee3680299115b936',
    },
  ],
  writer: [
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b937',
          name: '周星驰',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b963',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b938',
          name: 'Stephen Chow',
          lang: 'En',
          person: '5f9687a4ee3680299115b963',
        },
      ],
      createdAt: 1603700644078,
      updatedAt: 1603700644078,
      id: '5f9687a4ee3680299115b963',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93b',
          name: '曾瑾昌',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b965',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93c',
          name: 'Kan-Cheung Tsang',
          lang: 'En',
          person: '5f9687a4ee3680299115b965',
        },
      ],
      createdAt: 1603700644082,
      updatedAt: 1603700644082,
      id: '5f9687a4ee3680299115b965',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93d',
          name: '李敏',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b966',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93e',
          name: 'Erica Lee',
          lang: 'En',
          person: '5f9687a4ee3680299115b966',
        },
      ],
      createdAt: 1603700644084,
      updatedAt: 1603700644084,
      id: '5f9687a4ee3680299115b966',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93f',
          name: '郑文辉',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b967',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b940',
          name: 'Man-Fai Cheng',
          lang: 'En',
          person: '5f9687a4ee3680299115b967',
        },
      ],
      createdAt: 1603700644085,
      updatedAt: 1603700644085,
      id: '5f9687a4ee3680299115b967',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b941',
          name: '冯勉恒',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b968',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b942',
          name: 'Min Hun Fung',
          lang: 'En',
          person: '5f9687a4ee3680299115b968',
        },
      ],
      createdAt: 1603700644090,
      updatedAt: 1603700644090,
      id: '5f9687a4ee3680299115b968',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b943',
          name: '梁嘉杰',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b969',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b944',
          name: 'Ka-Kit Leung',
          lang: 'En',
          person: '5f9687a4ee3680299115b969',
        },
      ],
      createdAt: 1603700644092,
      updatedAt: 1603700644092,
      id: '5f9687a4ee3680299115b969',
    },
  ],
  actor: [
    {
      data: [
        {
          createdAt: 1603700184823,
          updatedAt: 1603700184823,
          id: '5f9685d8ee3680299115b841',
          name: '吴孟达',
          lang: 'Cn',
          person: '5f9685d8ee3680299115b853',
        },
        {
          createdAt: 1603700184823,
          updatedAt: 1603700184823,
          id: '5f9685d8ee3680299115b842',
          name: 'Man Tat Ng',
          lang: 'En',
          person: '5f9685d8ee3680299115b853',
        },
      ],
      createdAt: 1603700184866,
      updatedAt: 1603700184866,
      id: '5f9685d8ee3680299115b853',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b937',
          name: '周星驰',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b963',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b938',
          name: 'Stephen Chow',
          lang: 'En',
          person: '5f9687a4ee3680299115b963',
        },
      ],
      createdAt: 1603700644078,
      updatedAt: 1603700644078,
      id: '5f9687a4ee3680299115b963',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93f',
          name: '郑文辉',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b967',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b940',
          name: 'Man-Fai Cheng',
          lang: 'En',
          person: '5f9687a4ee3680299115b967',
        },
      ],
      createdAt: 1603700644085,
      updatedAt: 1603700644085,
      id: '5f9687a4ee3680299115b967',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b941',
          name: '冯勉恒',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b968',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b942',
          name: 'Min Hun Fung',
          lang: 'En',
          person: '5f9687a4ee3680299115b968',
        },
      ],
      createdAt: 1603700644090,
      updatedAt: 1603700644090,
      id: '5f9687a4ee3680299115b968',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b945',
          name: '张柏芝',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96a',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b946',
          name: 'Cecilia Cheung',
          lang: 'En',
          person: '5f9687a4ee3680299115b96a',
        },
      ],
      createdAt: 1603700644093,
      updatedAt: 1603700644093,
      id: '5f9687a4ee3680299115b96a',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b947',
          name: '莫文蔚',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96b',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b948',
          name: 'Karen Mok',
          lang: 'En',
          person: '5f9687a4ee3680299115b96b',
        },
      ],
      createdAt: 1603700644094,
      updatedAt: 1603700644094,
      id: '5f9687a4ee3680299115b96b',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b949',
          name: '林子善',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96c',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94a',
          name: 'Chi-Sing Lam',
          lang: 'En',
          person: '5f9687a4ee3680299115b96c',
        },
      ],
      createdAt: 1603700644095,
      updatedAt: 1603700644095,
      id: '5f9687a4ee3680299115b96c',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94b',
          name: '田启文',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96d',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94c',
          name: 'Kai Man Tin',
          lang: 'En',
          person: '5f9687a4ee3680299115b96d',
        },
      ],
      createdAt: 1603700644098,
      updatedAt: 1603700644098,
      id: '5f9687a4ee3680299115b96d',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94d',
          name: '李兆基',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96e',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94e',
          name: 'Siu-Kei Lee',
          lang: 'En',
          person: '5f9687a4ee3680299115b96e',
        },
      ],
      createdAt: 1603700644100,
      updatedAt: 1603700644100,
      id: '5f9687a4ee3680299115b96e',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b94f',
          name: '成龙',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b96f',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b950',
          name: 'Jackie Chan',
          lang: 'En',
          person: '5f9687a4ee3680299115b96f',
        },
      ],
      createdAt: 1603700644101,
      updatedAt: 1603700644101,
      id: '5f9687a4ee3680299115b96f',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b951',
          name: '李思捷',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b970',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b952',
          name: 'Sze-Chit Lee',
          lang: 'En',
          person: '5f9687a4ee3680299115b970',
        },
      ],
      createdAt: 1603700644102,
      updatedAt: 1603700644102,
      id: '5f9687a4ee3680299115b970',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b953',
          name: '陈宝骏',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b971',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b954',
          name: 'Po-Chun Chan',
          lang: 'En',
          person: '5f9687a4ee3680299115b971',
        },
      ],
      createdAt: 1603700644104,
      updatedAt: 1603700644104,
      id: '5f9687a4ee3680299115b971',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b955',
          name: '戴龙',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b972',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b956',
          name: 'Lung Dai',
          lang: 'En',
          person: '5f9687a4ee3680299115b972',
        },
      ],
      createdAt: 1603700644105,
      updatedAt: 1603700644105,
      id: '5f9687a4ee3680299115b972',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b957',
          name: '袁富华',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b973',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b958',
          name: 'Fu-wah Yuen',
          lang: 'En',
          person: '5f9687a4ee3680299115b973',
        },
      ],
      createdAt: 1603700644106,
      updatedAt: 1603700644106,
      id: '5f9687a4ee3680299115b973',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b959',
          name: '胡立成',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b974',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95a',
          name: 'Licheng Hu',
          lang: 'En',
          person: '5f9687a4ee3680299115b974',
        },
      ],
      createdAt: 1603700644107,
      updatedAt: 1603700644107,
      id: '5f9687a4ee3680299115b974',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95b',
          name: '叶竞生',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b975',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95c',
          name: 'Bobby Yip Kin Sang',
          lang: 'En',
          person: '5f9687a4ee3680299115b975',
        },
      ],
      createdAt: 1603700644108,
      updatedAt: 1603700644108,
      id: '5f9687a4ee3680299115b975',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95d',
          name: '徐志雄',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b976',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95e',
          name: 'Terence Tsui',
          lang: 'En',
          person: '5f9687a4ee3680299115b976',
        },
      ],
      createdAt: 1603700644109,
      updatedAt: 1603700644109,
      id: '5f9687a4ee3680299115b976',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b95f',
          name: '侯焕玲',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b977',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b960',
          name: 'Woon Ling Hau',
          lang: 'En',
          person: '5f9687a4ee3680299115b977',
        },
      ],
      createdAt: 1603700644110,
      updatedAt: 1603700644110,
      id: '5f9687a4ee3680299115b977',
    },
    {
      data: [
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b961',
          name: '郑祖',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b978',
        },
        {
          createdAt: 1603700644045,
          updatedAt: 1603700644045,
          id: '5f9687a4ee3680299115b962',
          name: 'Joe Cheng',
          lang: 'En',
          person: '5f9687a4ee3680299115b978',
        },
      ],
      createdAt: 1603700644111,
      updatedAt: 1603700644111,
      id: '5f9687a4ee3680299115b978',
    },
  ],
  director: [
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b937',
          name: '周星驰',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b963',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b938',
          name: 'Stephen Chow',
          lang: 'En',
          person: '5f9687a4ee3680299115b963',
        },
      ],
      createdAt: 1603700644078,
      updatedAt: 1603700644078,
      id: '5f9687a4ee3680299115b963',
    },
    {
      data: [
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b939',
          name: '李力持',
          lang: 'Cn',
          person: '5f9687a4ee3680299115b964',
        },
        {
          createdAt: 1603700644044,
          updatedAt: 1603700644044,
          id: '5f9687a4ee3680299115b93a',
          name: 'Lik-Chi Lee',
          lang: 'En',
          person: '5f9687a4ee3680299115b964',
        },
      ],
      createdAt: 1603700644081,
      updatedAt: 1603700644081,
      id: '5f9687a4ee3680299115b964',
    },
  ],
  createdAt: 1603700645617,
  updatedAt: 1603700645617,
  id: '5f9687a4ee3680299115b936',
  originalName: '喜劇之王',
  imdbVotes: 6198,
  imdbRating: '7.3',
  rottenRating: 'null',
  rottenVotes: 0,
  year: '1999',
  imdbId: 'tt0188766',
  alias: 'King of Comedy',
  doubanId: '1302425',
  type: 'Movie',
  doubanRating: '8.8',
  doubanVotes: 716023,
  duration: 5340,
  dateReleased: '1999-02-13',
}
