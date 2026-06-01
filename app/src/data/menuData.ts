export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  status: string
  rating: number
  reviews: number
  image: string
  isBestSeller?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Matcha Latte',
    description:
      'Perpaduan premium matcha Jepang autentik dengan kelembutan susu segar pilihan. Memberikan sensasi rasa creamy dan menenangkan di setiap seruputan.',
    price: '25.000',
    category: 'Milkshake',
    status: 'Tersedia',
    rating: 5.0,
    reviews: 128,
    image: '/menu-matcha.jpeg',
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Butterscotch Coffee',
    description:
      'Espresso double shot premium dipadukan dengan lelehan gurih mentega cair (melted butter) dan saus karamel panggang yang manis nan creamy.',
    price: '25.000',
    category: 'Kopi Dingin',
    status: 'Tersedia',
    rating: 5.0,
    reviews: 96,
    image: '/menu-butterscoth.png',
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Nasi Goreng Spesial Ar\'Seven',
    description:
      'Nasi goreng wangi khas rempah pilihan dengan topping telur mata sapi, suwiran ayam gurih, potongan ampela, sayuran segar, dan kerupuk renyah.',
    price: '24.000',
    category: 'Makanan',
    status: 'Tersedia',
    rating: 5.0,
    reviews: 85,
    image: '/menu-nasgor.png',
  },
  {
    id: 4,
    name: 'Pisang Goreng Resep Keluarga',
    description:
      'Pisang uli pilihan digoreng renyah keemasan dengan adonan rahasia keluarga. Disajikan hangat, menjadikannya dessert pendamping kopi paling sempurna.',
    price: '18.000',
    category: 'Cemilan',
    status: 'Tersedia',
    rating: 5.0,
    reviews: 112,
    image: '/menu-pisgor.png',
    isBestSeller: true,
  },
]
