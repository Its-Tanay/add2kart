import './styles/App.css';
import Header from './components/page/header';
import Footer from './components/page/footer';
import Content from './components/page/content';

function App() {
  return (
    <div className='grid grid-rows-page'> 
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;