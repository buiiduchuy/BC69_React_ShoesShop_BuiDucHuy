import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'antd';
import { btShoeAction } from '../store/BTShoe/slice';
import { CloseOutlined } from '@ant-design/icons';

export const ModalCart = () => {
  const {cart,isModalCart} = useSelector((state)=> state.btShoeReducer)
  const dispatch = useDispatch()
  
  const handleOk = () => {
    dispatch(btShoeAction.isModalCart(false))
  };

  const handleCancel = () => {
    dispatch(btShoeAction.isModalCart(false))
  };
  return (
    <>
      <Modal title={<h3 className='text-center mb-6 text-3xl'>Shoe Detail</h3>} open={isModalCart} 
        onOk={handleOk} 
        okText="Check out"
        onCancel={handleCancel} 
        cancelButtonProps={{
          style: { display: 'none' }
        }}
        width={'50%'}
      >
        <table className='w-full text-sm text-left rtl:text-right'>
         <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr className='text-left'>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3">Total</th>
          </tr>
         </thead>
         <tbody>
          {
            cart.map((item,index)=> (
              <tr key={index} className='bg-white border-b'>
                <td><img src={item.image} alt={item.name} width={150}/></td>
                <td>{item.name}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>
                  <Button
                    onClick={
                      ()=>dispatch(btShoeAction.changeQuantityCart({idItem:item.id,quantity:-1}))
                    }
                  >-</Button>
                  <span className='inline-block mx-2'>{item.cartQuantity}</span>
                  <Button
                    onClick={
                      ()=>dispatch(btShoeAction.changeQuantityCart({idItem:item.id,quantity:1}))
                    }
                  >+</Button>
                </td>
                <td className='font-bold text-center'>{item.cartQuantity * item.price}</td>
                <td><CloseOutlined onClick={()=> dispatch(btShoeAction.deleteItemCart({idItem:item.id}))} className='text-red-400'/></td>
              </tr>
            ))
          }
         </tbody>
        </table>
      </Modal>
    </>
  )
}
