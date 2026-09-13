export interface Character {
  id: string
  name: string
  hanzi: string
  title: string
  color: string
  blurb: string
  imageUrl?: string
}

export interface Chapter {
  number: number
  title: string
  text?: string
}
