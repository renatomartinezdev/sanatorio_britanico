import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"


function App() {

  const [pacientes, setPacientes] = useState([])
  //Este state fue creado para la edicion
  const [paciente, setPaciente] = useState({}) 

  useEffect(()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, []);


  //LocaleStorage 
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
 
  

  //Eliminar paciente 
  const eliminarPaciente = (id) =>{
    const pacientesActualizaos = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizaos)

  }

  

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}

          //objeto de paciente
          paciente={paciente}


          setPaciente={setPaciente}
          
        />
        <ListadoPaciente
          pacientes={pacientes}

          setPaciente= {setPaciente}

          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
