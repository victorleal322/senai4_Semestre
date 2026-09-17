import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
   <div className='flex flex-col items-center gap-4'>
    <h1 className='text-3x1 font-bold
    text-white'>Home</h1>
    <Link to="/sobre" className="rounded-lg bg-indigo-500 px-4 py-2 text-white">
    ir para sobre
    </Link>
    </div>
  )
}
function Sobre() {
  return (
   <div className='flex flex-col items-center gap-4'>
    <h1 className='text-3x1 font-bold
    text-emerald-400'>Sobre</h1>
    <Link to="/" className="routnded-lg bg-indigo-500 px-4 py-2 text-white">
    voltar
    </Link>
    </div>
  )
}
export default function App() {
  return (
    <BrowserRouter>
   <div className='flex min-h-screen items-center justify-center bg-slate-950'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
