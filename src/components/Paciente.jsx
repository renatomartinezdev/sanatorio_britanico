

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, cedula, seguro, fecha, medico, motivo, id } = paciente

  const handleEliminar = () =>{
    const respuesta = confirm('¿Deseas eliminar este paciente?')

    if(respuesta ){
      eliminarPaciente(id)

    }
  }
  
  return (
    
       <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
          </p>


          <p className='font-bold mb-3 text-gray-700 uppercase'>
            CI: {''}
            <span className='font-normal normal-case'>{cedula}</span>
          </p>


          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Seguro Medico: {''}
            <span className='font-normal normal-case'>{seguro}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Ingreso: {''}
            <span className='font-normal normal-case'>{fecha}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Medico: {''}
            <span className='font-normal normal-case'>{medico}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Motivo de Ingreso: {''}
            <span className='font-normal normal-case'>{motivo}</span>
          </p>

          <div className="flex justify-between mt-5">
            <button
              type="button"
              className="py-2 px-10 bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase rounded-sm"
              onClick={() => setPaciente(paciente)}
              >
                Editar
            </button>

            <button
              type="button"
              className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-sm"
              onClick={handleEliminar}
              >
                Eliminar
            </button>
          </div>

          

      </div>
    
   
  )
}

export default Paciente
