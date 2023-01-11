import { useState } from 'react'
import './App.css'
import QRCode from 'qrcode'
import { useForm } from './UseForm'

function App() {
  const [imgQR, setImgQR] = useState('')
  // const [value, setValue] = useState<any>()

  async function Click(value: any): Promise<void> {
    const result = await QRCode.toDataURL(value.product)
    setImgQR(result)
  }

  const initialState = {
    product: "",
    price: "",
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  function Console() {
    return console.log('log')
  }

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    try {
      Click(values)
    } catch (error) {
      console.error(error)
    }
    // setValue(values)
    // send "values" to database
  }

  return (
    <div className="App">
      {/* <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Qr Genereate</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name='product'
            id='product'
            type='text'
            placeholder='Producto'
            onChange={onChange}
            required
          />

          <input
            name='price'
            id='price'
            type='text'
            placeholder='Precio'
            onChange={onChange}
            required
          />

          <button type='submit'>Login</button>
        </div>
      </form> */}
      {/* <button onClick={() => Click}>QRGen</button> */}
      {/* <div>
        {
          imgQR ?
            <img src={imgQR} alt="" /> :
            <div></div>
        }
        {imgQR && <a href={imgQR} download="qr.png">Descargar QR</a>}
      </div> */}
    </div >
  )
}

export default App
