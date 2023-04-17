import { useState, useEffect } from "react"

import Error from "./Error"

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [cedula, setCedula] = useState('')
  const [seguro, setSeguro] = useState('')
  const [fecha, setFecha] = useState('')
  const [medico, setMedico] = useState('')
  const [motivo, setMotivo] = useState('')

  

  //mensaje error
  const [error, setError] = useState(false)


  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setCedula(paciente.cedula)
      setNombre(paciente.nombre)
      setSeguro(paciente.cedula)
      setFecha(paciente.fecha)
      setMedico(paciente.medico)
      setMotivo(paciente.motivo)
    }
  }, [paciente])



  //Generamos el id unico 
  const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    
    const fecha = Date.now().toString(36)
    
    
    return random + fecha
  }
  


  //Validar Formulario 
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if([nombre, cedula, seguro, fecha, medico, motivo].includes('')){
      setError(true)
      return

    }
    
    setError(false)

    //objetos de paciente 
    const objetoPaciente = {
      nombre,
      cedula,
      seguro,
      fecha,
      medico,
      motivo
    }

    if(paciente.id) {
      //Editar el registro 
      objetoPaciente.id = paciente.id
      

      const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacienteActualizados)

      //regresando a un objeto
      setPaciente({})
    }

    else{
      //Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes,objetoPaciente ])
    }

    // console.log(objetoPaciente);

    

    //Reiniciar el formulario 
    setNombre('')
    setCedula('')
    setSeguro('')
    setFecha('')
    setMedico('')
    setMotivo('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>

      <p className='text-2xl mt-5 text-center'>Añade Pacientes y {''}
        <span className='text-cyan-500 font-bold '>Administralos</span>  
      </p>

      <form 
          onSubmit={handleSubmit}
          className=" mt-10 mb-10 bg-white shadow-md rounded-lg py-10 px-5"
      >
        {/*Si error es true imprime lo que hay en div*/}
        {
          error && <Error> <p>Todos los campos son obligatorios</p></Error>
        }

        {/*Nombre Paciente*/}    
        <div className="mb-5">
          
          <label htmlFor='paciente' className='block text-gray-700 uppercase font-bold'>Nombre Paciente</label>
          <input type="text" 
                 placeholder="Nombre Del Paciente"
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                 id="paciente"
                 value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
           />
        </div>


        {/*Cedula del Paciente*/}
        <div className="mb-5">
          <label htmlFor='ci' className='block text-gray-700 uppercase font-bold'>Cedula de Identidad</label>
          <input type="text" 
                 placeholder="Cedula Del Paciente"
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                 id="ci"
                 value={cedula}
                 onChange={(e) => setCedula(e.target.value)}
           />
        </div>

        {/*Seguro del Paciente*/}
        <div className="mb-5">
          <label htmlFor='seguro' className='block text-gray-700 uppercase font-bold'>Seguro medico</label>
          <input type="text" 
                 placeholder="Seguro Del Paciente"
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                 id="seguro"
                 value={seguro}
                 onChange={(e) => setSeguro(e.target.value)}
           />
        </div>


         {/*Fecha ingreso*/}
         <div className="mb-5">
          <label htmlFor='ingreso' className='block text-gray-700 uppercase font-bold'>Fecha de Ingreso</label>
          <input type="date" 
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                 id="ingreso"
                 value={fecha}
                 onChange={(e) => setFecha(e.target.value)}
           />
        </div>

        <div className="mb-5">

          {/*Doctor Asignado */}
          <label htmlFor='doctor' className='block text-gray-700 uppercase font-bold'>Doctor Asignado</label>
          <input type="text" 
                 placeholder="Doctor Asignado"
                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
                 id="doctor"
                 value={medico}
                 onChange={(e) => {setMedico(e.target.value)}} 
                 
           />
        </div>

       
         <div className="mb-5">

           {/*Motivo ingreso*/} 
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Motivo de Ingreso</label>
          <textarea
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            placeholder="Describe el motivo de Ingreso"
            id="sintomas"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </div>

        <input type="submit" 
               className='cursor-pointer bg-cyan-500 w-full p-3 text-2xl text-white font-bold uppercase
                         hover:bg-cyan-700 transition-all'
               value= {paciente.id ? 'Editar Paciente ' : 'Agregar Paciente'}
        />

        
      </form>
    </div>
  )
}

export default Formulario