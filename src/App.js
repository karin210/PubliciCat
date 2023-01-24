import './App.css';
import Header from './components/Header';
import SectionH1 from './components/SectionH1';
function App() {
 

  return (
    // home page
    <div className="App">
     <Header />
     <div className='slides'></div>
    {/* Activaciones Empresariales page */}
     <div className='ActEmp'>
      <SectionH1 
        text = "Activaciones Empresariales"
      />
     </div>
    </div>
  );
}

export default App;


// Modify the tittle