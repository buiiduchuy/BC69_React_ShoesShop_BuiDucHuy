import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd'
import { useDispatch } from 'react-redux';
import { btShoeAction } from '../store/BTShoe/slice';

export const ProductItem = ({dataShoe}) => {
  const { Meta } = Card;
  const dispatch = useDispatch()
  return (
    <>
      <Card
        hoverable
        cover={<img alt={dataShoe.name} src={dataShoe.image} />}
      >
        <Meta title={dataShoe.name} description={(dataShoe.description).substring(0,100)+"..."} />
        <Button 
          onClick={
            ()=>{
              dispatch(btShoeAction.modalDetail(dataShoe))
              dispatch(btShoeAction.isModalDetail(true))
            }
          }
          size='large' 
          className='mt-4 bg-blue-400 w-full' 
          type='primary'
        >
          Detail
        </Button>
        <Button 
          onClick={
            ()=>{
              dispatch(btShoeAction.addToCart(dataShoe))
              dispatch(btShoeAction.isModalCart(true))
            }
          }
          size='large' 
          className='mt-4 bg-green-400 w-full' 
          type='primary'
        >
          Add To Cart {<ShoppingCartOutlined />}
        </Button>
      </Card>
    </>
  )
}
