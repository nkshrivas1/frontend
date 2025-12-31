import './App.css'
import Card from './components/ui/Card'

function App() {
   const user1 = {
        details: { name: 'ABC', age: 12, id: 1 },
        address: {
            city: 'Nagpur', zipcode: 441501,
            state: 'Maharastra', country: "India"
        },
        Contact: {
            email: 'Ghi@gmail.com',
            phone: 9876543210
        },
    }
    const user2 = {
        details: { name: 'XYZ', age: 22, id: 2 },
        address: {
            city: 'Mumbai', zipcode: 440501,
            state: 'Maharastra', country: "India"
        },
        Contact: {
            email: 'Ghi1w21@gmail.com',
            phone: 9096543210
        },
    }
    const users = [user1, user2,user1, user2]


  return (
    <div className='cards'>
      <Card users={users} heading={'Hello! I am card'} />
    </div>
  )
}
export default App
