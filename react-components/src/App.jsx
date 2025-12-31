import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hello from "./components/Hello"
import "./App.css"
const App = () => {
  const users = [
    { username: 'Abc', age: 20, status: true, image: 'grinder.png' },
    { username: 'Xyz', age: 26, status: false, image: 'libra.png' },
    { username: 'QWERT', age: 27, status: true, image: 'robot.png' },
  ]
  return (
    <div>
      <Header />
      <div className="card-container">
        {
          users.map((user, index) => (
            <Hello
              username={user.username}
              age={user.age}
              image={user.image}
              status={user.status}
              color='bg-red'
              key={index} >
              <Button text={`Click! ${user.username} `}>
              </Button>
            </Hello>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default App