import Graph from './Pages/Graph'
import PieChart from './Pages/PieCharts'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
      <Graph/>
      <PieChart/>
      </div>
    </div>
  )
}

export default App
