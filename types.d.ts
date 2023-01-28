interface IPost {
  id: number
  title: string
  body: string
  comments: IComment[]
}

interface IComment {
  id: number
  name: string
  email: string
  body: string
}

interface IImage {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
