import './App.css';
import HomeTest01 from './component/HomeTest01'
import HomeTest02 from './component/HomeTest02'
import HomeTest03 from './component/HomeTest03'
import HomeTest04 from './component/HomeTest04'
import HomeTest05 from './component/HomeTest05'
import AdvancedProject from './component/AdvancedProject'
import Test from './component/Test'
import User from './component/Test/User'

function App() {
  
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div class="container-fluid">
          <a class="navbar-brand ms-4">GReen AcaDemy</a>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./my-app/src/component/HomeTest05/index.js">Organization</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className='container'>
        <HomeTest04/>
        <HomeTest05/>
      </main>
      
      <footer></footer>
    </div>
  );
}

export default App;
