export type Links = {
  github?: string
  slide?: string
  product?: string
  qiita?: string
}

export type Product = {
  name: string
  description: string
  image?: string
  popularity: number
  role: string
  date: string
  techs: string[]
  links?: Links
  logo?: string
}
