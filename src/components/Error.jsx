

const Error = ({children}) => {
  return (
    <div className="bg-red-700 rounded-lg text-white text-center p-3 mb-3 uppercase font-bold">
              <p>{children}</p>
    </div>
  )
}

export default Error