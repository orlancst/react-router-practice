import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log('click');

    }

    window.addEventListener("click", clickear)
    
    return () => {
      window.removeEventListener("click",clickear)
    }
  }, [])

  return (
    <div className='container'>
        <h1 className='main-title'>Nosotros</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla illum eum, omnis minus molestiae provident nemo voluptas maiores atque doloremque recusandae ex magnam distinctio ducimus. Non est distinctio nulla.</p>
    </div>
  )
}

export default Nosotros