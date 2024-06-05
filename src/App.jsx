
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Nav from './componenets/Nav'
import Quizzes from './componenets/quizzes'
import TV from './componenets/TV & Movies'
import Shopping from './componenets/Shopping'
import Videos from './componenets/Vidoes'
import News from './componenets/News'
import Tasty from './componenets/Tasty'
import MakeAQuiz from './componenets/Make-a-Quiz'
import Signin from './componenets/signin'


function App() {
 return (
  <div className='news-container'>
    <Nav />
            <Routes>
<Route path='/' element={<Home />} />
<Route path='/quizzes' element={<Quizzes/>} />
<Route path='/TV & Movies' element={<TV/>} />
<Route path='/Shopping' element={<Shopping/>} />
<Route path='/Videos' element={<Videos/>} />
<Route path='/News' element={<News/>} />
<Route path='/Tasty' element={<Tasty/>} />
<Route path='/Make a QUiz' element={<MakeAQuiz/>} />
<Route path='/signin' element={<Signin />}/>

        </Routes>
  </div>
 )
}

export default App
