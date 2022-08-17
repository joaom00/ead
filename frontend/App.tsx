import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [customers, setCustomers] = useState<any>([])

  useEffect(() => {
    const loadData = () => {
      fetch('http://127.0.0.1:8000/api/customers/')
      .then(response => response.json())
      .then(data => setCustomers(data))
    }
    loadData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {customers.map(customer => (
          <h1 key={customer.id}>{customer.first_name} {customer.last_name}</h1>
        ))}
      </header>
    </div>
  )
}

export default App
