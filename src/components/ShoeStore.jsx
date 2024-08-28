import { ModalDetail } from './ModalDetail'
import {ProductList} from './ProductList'
import { ModalCart } from './ModalCart'

export const ShoeStore = () => {
  return (
    <div>
      <div className='relative'>
          <h2 className='text-center my-10 text-5xl font-medium'>Shoe Shop</h2>
          <ProductList/>
        </div>
        <ModalDetail/>
        <ModalCart/>
    </div>
  )
}
