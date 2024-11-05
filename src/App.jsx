import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Collection from './components/Collection';
import Offer from './components/Offer';
import TopItem from './components/TopItem';
import Feedback from './components/Feedback';
import NewsLetter from './components/NewsLetter';
import Jumbotron from './components/Jumbotron';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const API_URL = 'https://658d9af17c48dce9473979f2.mockapi.io/products'
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error))
  }, [])
  return (
    <>
      <Header/>
      <Jumbotron/>
      <Offer/>
      <Collection />
      <TopItem />
      <Feedback/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
