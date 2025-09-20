export type Member = {
  id: string  
  name: string
  image: string
  role: string
  instagram: string
}

export type Division = {
  id: string  
  name: string
  description: string
  members: Member[]
}
