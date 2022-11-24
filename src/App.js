import './App.css';

function App() {
  return (
    <div className="App">
      <ProductCards />
    </div>
  );
}

function ProductCards() {
  return (
    <div className='product-cards'>
      <div className='list-items'>
        <div className='p-image'>
          <h1>450 x 300</h1>
        </div>
        <h3>Fancy Product</h3>
        <p>$40.00 - $80.00</p>
        <br></br><br></br>
        <button>View Options</button>
      </div>
    </div>
  )
}

export default App;
