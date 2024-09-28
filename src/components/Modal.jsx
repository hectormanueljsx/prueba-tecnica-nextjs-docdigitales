'use client';

export const Modal = ({ handleCloseModal }) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-2'>
      <div className='bg-white p-6 rounded-xl relative w-full max-w-6xl'>
        <button
          className='flex justify-center items-center text-lg transition-colors text-gray-500 hover:text-red-600 absolute top-2 right-2'
          onClick={handleCloseModal}
        >
          <i className='fa-solid fa-xmark'></i>
        </button>

        <section className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 transition-all'>
          <article className='bg-[#0d66ce50] flex flex-col items-center justify-between gap-2 rounded-xl p-3'>
            <h4 className='text-[#0d66ce] font-semibold text-center border-b-[1px] border-b-[#0d66ce]'>Emprendedor</h4>

            <p className='font-bold text-2xl text-center'>
              <span className='font-normal text-xs'>$</span> 1,000{' '}
              <span className='font-semibold text-xs'>+IVA/mes</span>
            </p>

            <p className='text-xs font-semibold'>1 - 30 movimientos bancarios al mes</p>

            <button className='bg-[#0d66ce] text-white font-medium w-max px-6 py-1 rounded-full'>Elegir</button>
          </article>

          <article className='bg-[#0d66ce50] flex flex-col items-center justify-between gap-2 rounded-xl p-3'>
            <h4 className='text-[#0d66ce] font-semibold text-center border-b-[1px] border-b-[#0d66ce]'>
              Emprendedor Plus
            </h4>

            <p className='font-bold text-2xl text-center'>
              <span className='font-normal text-xs'>$</span> 2,000{' '}
              <span className='font-semibold text-xs'>+IVA/mes</span>
            </p>

            <p className='text-xs font-semibold'>31 - 100 movimientos bancarios al mes</p>

            <button className='bg-[#0d66ce] text-white font-medium w-max px-6 py-1 rounded-full'>Elegir</button>
          </article>

          <article className='bg-[#0d66ce50] flex flex-col items-center justify-between gap-2 rounded-xl p-3'>
            <h4 className='text-[#0d66ce] font-semibold text-center border-b-[1px] border-b-[#0d66ce]'>Empresarial</h4>

            <p className='font-bold text-2xl text-center'>
              <span className='font-normal text-xs'>$</span> 3,000{' '}
              <span className='font-semibold text-xs'>+IVA/mes</span>
            </p>

            <p className='text-xs font-semibold'>101 - 300 movimientos bancarios al mes</p>

            <button className='bg-[#0d66ce] text-white font-medium w-max px-6 py-1 rounded-full'>Elegir</button>
          </article>

          <article className='bg-[#0d66ce50] flex flex-col items-center justify-between gap-2 rounded-xl p-3'>
            <h4 className='text-[#0d66ce] font-semibold text-center border-b-[1px] border-b-[#0d66ce]'>Select</h4>

            <p className='font-bold text-base text-center'>Contactanos para hacer un paquete a tus necesidades</p>

            <button className='bg-[#0d66ce] text-white font-medium w-max px-6 py-1 rounded-full'>Elegir</button>
          </article>
        </section>
      </div>
    </div>
  );
};
