import './App.css';
import ActEmItems from './components/ActEmItems';
import Header from './components/Header';
import SectionH1 from './components/SectionH1';
function App() {
 

  return (
    // home page
    <div className="App">
     <Header />
     <div className='slides'></div>
    {/* Activaciones Empresariales page */}
     <div className='actEmp'>
      <SectionH1 
        text = "Activaciones Empresariales"
      />
      <ActEmItems 
        id = "actEmItem1"
      />
      <ActEmItems
      id = "actEmItem2"
       />
       <ActEmItems
      id = "actEmItem3"
       />
       <ActEmItems
      id = "actEmItem4"
       />
       <ActEmItems
      id = "actEmItem5"
       />
       <ActEmItems
      id = "actEmItem6"
       />
       <ActEmItems
      id = "actEmItem7"
       />
       <ActEmItems
      id = "actEmItem8"
       />
       <ActEmItems
      id = "actEmItem9"
       />
     </div>
     {/* Renta de audio page */}
     <div className="RentAudio">
     <SectionH1 
        text = "Renta de audio"
      />
     </div>
    </div>
  );
}

export default App;


// Modify the tittle