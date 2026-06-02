export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  created_at: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  image_url: string
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: number
  user_id: number
  status: string
  total: number
  created_at: string
}
