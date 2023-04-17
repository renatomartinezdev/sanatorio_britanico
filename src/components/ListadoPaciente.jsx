import Paciente from "./Paciente"

const Listadoaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      
        
        
        {pacientes && pacientes.length ? (
          <>
            <h2 className='text-center text-3xl font-black'>Listado Paciente</h2>

            <p className='text-2xl mt-5 text-center mb-10'>Administra tus {''}
              <span className='text-cyan-500 font-bold '>Pacientes y Citas</span>  
            </p>

            {pacientes.map((paciente)=>
                <Paciente
                  key={paciente.id}
                  paciente={paciente}

                  setPaciente={setPaciente}

                  eliminarPaciente={eliminarPaciente}
                />
            )} 
          </>
        ) : (
          <>
              <h2 className='text-center text-3xl font-black'>No hay Pacientes</h2>

              <p className='text-2xl mt-5 text-center mb-10'>Comienza agregando pacientes {''}
                <span className='text-cyan-500 font-bold '>y apareceran en este lugar</span>  
              </p>
          </>
        )}
      
      

      
     
     
      

    </div>
  )
}

export default Listadoaciente
