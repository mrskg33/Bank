import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { actionCreators } from './State/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { depositMoney, withdrawMoney } from './State/action-creator';
const Shop = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)
 
  const handleChange = (event) => {
    setInputValue(event.target.value);
    
    
  };

  const handleDeposit = (event) => {
    event.preventDefault();
    dispatch(actionCreators.depositMoney(inputValue));
    
    toast.success(inputValue +" Successfully Deposited in Your Account!");
    
  };
  const handleWithdraw = (event) => {
    event.preventDefault();
    dispatch(actionCreators.withdrawMoney(inputValue));
    toast.success(inputValue +" Successfully Withdrawn from Your Account!");
  };



   
  return (
    <div className='div d-flex flex-column justify-content-center align-items-center mt-4 p-3'>
    <h2>Deposit/Withdraw Money</h2>
    <form className='form d-flex flex-column justify-content-center align-items-center w-50' >
    
    <input  className='input w-50'  type='number'  
    placeholder='Enetr A Money to Deposit or Withdraw' value={inputValue} onChange={handleChange}/> 
    <div className='container d-flex flex-row ' >
      <button id='with' className='btn btn-danger mx-auto mt-3' disabled={amount <= 0 || amount<inputValue}  onClick={handleWithdraw}>{`Withdraw ${inputValue}`}</button>
      
      <button id='depo' className='btn btn-primary mx-auto mt-3 ' disabled={inputValue <=0} 
      onClick={ handleDeposit}>{`Deposit ${inputValue}`}</button>
      <ToastContainer />
      </div>
      </form>
      
    </div>
  )
}

export default Shop
