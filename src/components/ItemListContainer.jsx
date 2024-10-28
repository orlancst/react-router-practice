import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] =useState("Productos")
  const category = useParams().categoria

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (category) {
          setProductos(res.filter((prod) => prod.categoria === category))
          setTitulo(category)
        } else {
          setProductos(res)
          setTitulo("Productos")
        }

      })
  }, [category])
  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}
