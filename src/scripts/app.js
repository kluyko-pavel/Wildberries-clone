import { addBannerEventListeners, renderCard, addSearchListener } from '../scripts/modules/index.js'

const cards = [
  {
    image: 'https://basket-09.wb.ru/vol1311/part131142/131142918/images/c516x688/1.jpg',
    price: 10,
    oldPrice: 20,
    productsBrand: 'Xiaomi',
    productsName: 'Планшет Redmi Pad 4GB+128GB '
  },
  {
    image: 'https://basket-01.wb.ru/vol76/part7689/7689884/images/c516x688/2.webp',
    price: 10,
    oldPrice: 20,
    productsBrand: 'Garnier',
    productsName: 'Комплексный несмываемый крем-уход 10 в 1'
  },
  {
    image: 'https://basket-09.wb.ru/vol1222/part122205/122205202/images/c516x688/1.jpg',
    price: 160,
    oldPrice: 240,
    productsBrand: 'LED',
    productsName: 'Светильник напольный светодиодный неон'
  },
  {
    image: 'https://basket-05.wb.ru/vol1007/part100796/100796346/images/c516x688/3.jpg',
    price: 120,
    oldPrice: 220,
    productsBrand: 'City Мебель',
    productsName: 'Бескаркасное Кресло Эссен'
  }
]

export function initApp () {
  renderCard(cards)
  addBannerEventListeners()
  addSearchListener()
}
