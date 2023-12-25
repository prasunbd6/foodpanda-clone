

const Modal = ({ open, onClose, children }) => {


  return (
    <>
      {/*Modal*/}
      <div className=`${open ? 'fixed inset-0 flex items-center justify-center' : 'hidden'}`>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 max-w-md mx-auto z-10">
        <div className="relative">{children}</div>
        <button className="absolute top-0 right-0 p-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
      
    </>
  )
}

export default Modal;