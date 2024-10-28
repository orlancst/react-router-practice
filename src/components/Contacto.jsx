import React, { useState } from 'react'

const Contacto = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const [valores, setValores] = useState({
    nombre: "",
    email: "",
    telefono: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado: ", valores);

  }

  const handleValores = (e) => {
    setValores({
      ...valores, [e.target.name]: e.target.value
    })
  }

  return (
    <div className='container'>
      <h1 className='main-title'>
        Contacto
      </h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <input type="text" placeholder='tu nombre' value={valores.nombre} name='nombre' onChange={handleValores} />
        <input type="email" placeholder='tu email' value={valores.email} name='email' onChange={handleValores} />
        <input type="tel" placeholder='tu telefono' value={valores.telefono} name='telefono' onChange={handleValores} />
        <button className='enviar' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto