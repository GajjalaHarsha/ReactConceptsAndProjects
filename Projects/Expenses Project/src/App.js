import './App.css';
import {useState} from "react";



function App() {
 
  const [listOfExpenses, setListOfExpenses]=useState([])
  const [expenseType, setExpenseType]=useState("")
  const [expensePrice, setExpensePrice]=useState(0)
  const [counter, setCounter]=useState(0);
  const [total, setTotal]=useState(0);

  

  function expenseString(event) {
    setExpenseType(event.target.value);
  }

  function expenseValue(event) {
    setExpensePrice(event.target.value);
  }

  function submit() {
    
    if(expenseType!=='' && expensePrice!==0) {
      setCounter(counter+1);
      let expenses={
        id:counter,
        expenseType:expenseType,
        expensePrice:expensePrice,
        edit:false
      }
      let expenseList=[...listOfExpenses, expenses];
      setTotal(total+parseInt(expensePrice))
      setListOfExpenses(expenseList);
      setExpenseType("")
      setExpensePrice(0)
    }   
  }

  function editExpense(item){
    let res=listOfExpenses.map((expense) => {
      if(expense.id===item.id) {
        expense.edit=true;
        return expense;
      }
      else {
        return expense;
      }
    });

    setListOfExpenses(res);
    console.log(listOfExpenses);
  }

  function deleteExpense(value) {
    var newList=listOfExpenses.filter(item=> {
      return value.id!==item.id;
    })
    let totalVal=0;
    newList.map((expense) => {
      totalVal+=parseInt(expense.expensePrice);
    });
    setTotal(totalVal);
    setListOfExpenses(newList);
  }

  const editExpenseString= (value)=> 
    (e)=>{
      let res=listOfExpenses.map((expense) => {
        if(expense.id===value.id) {
          return {...expense, [e.target.name]: e.target.value};
        }
        else {
          return expense;
        }
      });
      console.log(res);
      setListOfExpenses(res);
    }   
  

  const editExpenseValue=(value)=> 
    (e)=>{
      let total=0;
      let res=listOfExpenses.map((expense) => {
        if(expense.id===value.id) {
          total+=parseInt(e.target.value);         
          return {...expense, [e.target.name]: e.target.value};
        }
        else {
          total+=parseInt(expense.expensePrice);
          return expense;
        }
      });
      setTotal(total);
      setListOfExpenses(res);
    }    
  

  function saveElement(value) {
    console.log(listOfExpenses);
    let res=listOfExpenses.map((expense) => {
      if(expense.id===value.id) {
        expense.edit=false;
        return expense;
      }
      else {
        return expense;
      }
      
    });
    setListOfExpenses(res);
  }
  
  return (
   
    <div className="App">
      <h1>Harsha</h1>
      
      Expense Type: <input type="text" onChange={expenseString}></input>
      Price : <input type="number" onChange={expenseValue}></input>
      Submit : <button onClick={submit}>Add Expense</button>
      <div className='top'>
      {listOfExpenses.map((value, key)=>{
        if(value.edit===false) {
         
          return (<div key={key} className='item'>
            <p className="expense">{value.expenseType}</p>
            <p className="price">{value.expensePrice}</p>
            <button type="edit" name="expenseType" onClick={()=>{editExpense(value)}}>edit</button>
            <button type="delete" name="expensePrice" onClick={()=>{deleteExpense(value)}}>delete</button>
          </div>);
        }
        else {
          return (
            <div className='item' key={key}>
              <input type="text" name="expenseType" onChange={editExpenseString(value)} value={value.expenseType} ></input>
              <input type="number" name="expensePrice" onChange={editExpenseValue(value)} value={value.expensePrice}></input>
              <button onClick={()=>saveElement(value)}>Edit</button>
            </div>
          )
        }
      })}
       <div>
        Total Expenses: {total}   
      </div>
      </div>
    </div>
  );
}

export default App;
