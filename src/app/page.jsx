'use client';

import { useState } from 'react';

import { Modal } from '@/components/Modal';

export default function Page() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='w-[90%] mx-auto my-10 transition-all md:w-4/5'>
      <header className='flex flex-col items-center gap-8 mb-10 transition-all md:mb-16'>
        <div className='flex flex-col items-end w-max'>
          <h1 className='text-[#0d66ce] font-extrabold text-4xl transition-all md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
            <span className='text-black font-normal'>tu</span> Conta
          </h1>
          <span className='text-xs lg:text-sm 2xl:text-base'>Tu Contador en línea</span>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-black text-sm md:text-base lg:text-lg'>¡Nuevo servicio!</p>
          <p className='text-black text-sm md:text-base lg:text-lg'>
            Encárgate de tu negocio, nosotros de tu contabilidad.
          </p>
        </div>
      </header>

      <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-10 transition-all md:gap-12 md:mb-16'>
        <article className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl p-8'>
          <span className='block text-center text-[#2aeaa5] text-4xl mb-4 transition-all md:text-5xl'>
            <i className='fa-solid fa-calculator'></i>
          </span>
          <p className='text-center text-sm md:text-base lg:text-lg'>Hacemos tu contabilidad mensual</p>
        </article>

        <article className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl p-8'>
          <span className='block text-center text-[#2aeaa5] text-4xl mb-4 transition-all md:text-5xl'>
            <i className='fa-solid fa-percent'></i>
          </span>
          <p className='text-center text-sm md:text-base lg:text-lg'>Calculamos tus impuestos</p>
        </article>

        <article className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl p-8'>
          <span className='block text-center text-[#2aeaa5] text-4xl mb-4 transition-all md:text-5xl'>
            <i className='fa-solid fa-file-invoice-dollar'></i>
          </span>
          <p className='text-center text-sm md:text-base lg:text-lg'>Presentamos tus declaraciones SAT</p>
        </article>

        <article className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl p-8'>
          <span className='block text-center text-[#2aeaa5] text-4xl mb-4 transition-all md:text-5xl'>
            <i className='fa-solid fa-hand-holding-dollar'></i>
          </span>
          <p className='text-center text-sm md:text-base lg:text-lg'>Cálculo, timbrado y envío de nómina</p>
        </article>
      </section>

      <main className='grid grid-cols-1 place-items-center gap-8 mb-10 transition-all md:grid-cols-2 md:gap-10 md:mb-16 xl:gap-16'>
        <iframe
          className='w-full aspect-video'
          src='https://www.youtube.com/embed/Hqv50Qd_jR0?si=ZdFKyswhf9K69n6g'
          title='Tu nuevo contador en línea'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
          allowFullScreen
        ></iframe>

        <section className='flex flex-col gap-4 md:gap-6'>
          <h2 className='text-black font-semibold text-lg transition-all md:text-xl lg:text-2xl xl:text-3xl'>
            Beneficios
          </h2>

          <section className='flex flex-col gap-2 md:gap-4'>
            <article className='flex gap-2'>
              <span className='text-[#0d66ce] text-base'>
                <i className='fa-solid fa-circle-check'></i>
              </span>

              <div>
                <h3 className='font-medium'>Automático</h3>
                <p>Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador ¡El proceso es automático!</p>
              </div>
            </article>

            <article className='flex gap-2'>
              <span className='text-[#0d66ce] text-base'>
                <i className='fa-solid fa-circle-check'></i>
              </span>

              <div>
                <h3 className='font-medium'>Servicio Oportuno</h3>
                <p>Comunicación más fácil y efectiva con tu contador personal.</p>
              </div>
            </article>

            <article className='flex gap-2'>
              <span className='text-[#0d66ce] text-base'>
                <i className='fa-solid fa-circle-check'></i>
              </span>

              <div>
                <h3 className='font-medium'>Simplicidad</h3>
                <p>Información contable en tiempo real.</p>
              </div>
            </article>

            <article className='flex gap-2'>
              <span className='text-[#0d66ce] text-base'>
                <i className='fa-solid fa-circle-check'></i>
              </span>

              <div>
                <h3 className='font-medium'>Confiable</h3>
                <p>Cálculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio.</p>
              </div>
            </article>
          </section>
        </section>
      </main>

      <section className='flex flex-col items-center gap-8 transition-all md:gap-10 md:mb-16'>
        <section className='bg-[#0d66ce] w-full grid grid-cols-1 gap-8 transition-all p-8 md:grid-cols-2 lg:grid-cols-3'>
          <article className=''>
            <span className='block text-center text-white text-4xl mb-4 transition-all md:text-5xl'>
              <i className='fa-solid fa-signature'></i>
            </span>

            <div>
              <p className='text-[#2aeaa5] font-semibold uppercase text-center md:text-lg lg:text-xl'>Paso 1</p>
              <p className='text-white text-center'>Agrega tu FIEL</p>
            </div>
          </article>

          <article>
            <span className='block text-center text-white text-4xl mb-4 transition-all md:text-5xl'>
              <i className='fa-solid fa-database'></i>
            </span>

            <div>
              <p className='text-[#2aeaa5] font-semibold uppercase text-center md:text-lg lg:text-xl'>Paso 2</p>
              <p className='text-white text-center'>Sincroniza tus cuentas bancarias</p>
            </div>
          </article>

          <article>
            <span className='block text-center text-white text-4xl mb-4 transition-all md:text-5xl'>
              <i className='fa-solid fa-file-arrow-down'></i>
            </span>

            <div>
              <p className='text-[#2aeaa5] font-semibold uppercase text-center md:text-lg lg:text-xl'>Paso 3</p>
              <p className='text-white text-center'>Recibe mensualmente tu declaración de impuestos</p>
            </div>
          </article>
        </section>

        <p className='max-w-2xl text-center text-sm md:text-base lg:text-lg'>
          ¿Quieres cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la transición de toda tu contabilidad
          hasta el día de hoy.
        </p>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 transition-all'>
          <button
            className='bg-[#2aeaa5] w-full py-2 px-6 rounded-full text-white text-center text-sm font-medium md:px-12 md:text-base lg:text-lg'
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            Ver paquetes
          </button>

          <button className='bg-[#0d66ce] w-full py-2 px-6 rounded-full text-white text-sm font-medium md:px-12 md:text-base lg:text-lg'>
            Agenda una cita con un contador experto
          </button>
        </div>
      </section>

      {isOpenModal && <Modal handleCloseModal={() => setIsOpenModal(false)} />}
    </div>
  );
}
