class Games {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  system: string
  category: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    category: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    this.category = category
  }
}

export default Games
