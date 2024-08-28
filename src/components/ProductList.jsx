import { ProductItem } from './ProductItem'
import {data} from '../data'

export const ProductList = () => {
  return (
    <>
      <div className='flex flex-wrap'>
       {
        data.map((item,index)=>{
          return (
            <div className='w-1/4 p-5' key={index}>
              <ProductItem dataShoe={item}/>
            </div>
          )
        })
       }
      </div>
    </>
  )
}
