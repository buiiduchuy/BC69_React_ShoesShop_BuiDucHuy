import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Button, Modal } from 'antd';
import { btShoeAction } from '../store/BTShoe/slice';

export const ModalDetail = () => {
  const {modalDetail,isModalDetail} = useSelector((state)=> state.btShoeReducer)
  const dispatch = useDispatch()
  
  const handleOk = () => {
    dispatch(btShoeAction.isModalDetail(false))
  };

  const handleCancel = () => {
    dispatch(btShoeAction.isModalDetail(false))
  };
  return (
    <>
      <Modal title={<h3 className='text-center mb-6 text-3xl'>Shoe Detail</h3>} open={isModalDetail} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        cancelButtonProps={{
          style: { display: 'none' }
        }}
      >
        <div className='flex'>
          <div className='w-1/3'>
            <img src={modalDetail.image} alt={modalDetail.name}/>
          </div>
          <div className='w-2/3 ps-4'>
              <h3 className='mb-2 text-xl'><strong>{modalDetail.name}</strong></h3>
              <p className='mb-2 text-lg'><strong>${modalDetail.price}</strong></p>
              <p>{modalDetail.description}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
