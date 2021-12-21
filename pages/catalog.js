import Layout from '../components/Layout';
import next from 'next';
import Image from 'next/image';
import defense from '../public/Img/defense.jpeg';
import echarpe from '../public/Img/echarpe.jpeg';
import europe from '../public/Img/europe.jpeg';
import legion from '../public/Img/legion.jpeg';
import nationale from '../public/Img/nationale.jpeg';
import medaille from '../public/Img/medaille.jpg';
import coupe1 from '../public/Img/coupe1.jpg';
import trophée from '../public/Img/trophée.jpeg';

export default function Catalog() {
  return (
    <Layout>
      <h1 className='text-center text-2xl m-1'>CATALOGUE</h1>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={defense}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Médaille</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>
                Défense Nationale
              </span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                30€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={echarpe}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Echarpe</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Nation</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                35€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={europe}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Médaille</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Européenne</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                40€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={legion}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Médaille</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>
                Légion d{"'"}honneur
              </span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                60€
              </span>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={nationale}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Médaille</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Défense</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                35€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={medaille}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Médaille</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Vainqueur</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                45€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={coupe1}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Coupe</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Champion</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                70€
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-gray-300 rounded-lg max-w-xs shadow-lg'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='#f3c06b'
            ></rect>
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='#f3c06b'
            ></rect>
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'></div>
            <picture>
              <source srcSet='/images/object/5.webp' type='image/webp' />
              <source srcSet='/images/object/5.png' />
              <Image
                className='relative w-40'
                src={trophée}
                alt=''
                width={200}
                height={200}
              />
            </picture>
          </div>
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>Coupe</span>
            <div className='flex justify-between'>
              <span className='block font-semibold text-xl'>Champion</span>
              <span className='bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center'>
                75€
              </span>
            </div>
          </div>
        </div>

        <div className='w-80 flex justify-center items-center'>
          <div className='w-full p-4'>
            <div className='card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl'>
              <div className='prod-title'>
                <p className='text-2xl uppercase text-gray-900 font-bold'>
                  Médaille
                </p>
                <p className='uppercase text-sm text-gray-400'>
                  Légion d{"'"}honneur
                </p>
              </div>
              <div className='prod-img'>
                <Image
                  src={legion}
                  alt=''
                  width={200}
                  height={300}
                  className='w-full object-cover object-center'
                />
              </div>
              <div className='prod-info grid gap-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                  <p className='font-bold text-xl'>35€</p>
                  <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-80 flex justify-center items-center'>
          <div className='w-full p-4'>
            <div className='card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl'>
              <div className='prod-title'>
                <p className='text-2xl uppercase text-gray-900 font-bold'>
                  Médaille
                </p>
                <p className='uppercase text-sm text-gray-400'>Championnat</p>
              </div>
              <div className='prod-img'>
                <Image
                  src={medaille}
                  alt=''
                  width={200}
                  height={300}
                  className='w-full object-cover object-center'
                />
              </div>
              <div className='prod-info grid gap-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                  <p className='font-bold text-xl'>35€</p>
                  <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-80 flex justify-center items-center'>
          <div className='w-full p-4'>
            <div className='card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl'>
              <div className='prod-title'>
                <p className='text-2xl uppercase text-gray-900 font-bold'>
                  Médaille
                </p>
                <p className='uppercase text-sm text-gray-400'>Européenne</p>
              </div>
              <div className='prod-img'>
                <Image
                  src={europe}
                  alt=''
                  width={200}
                  height={300}
                  className='w-full object-cover object-center'
                />
              </div>
              <div className='prod-info grid gap-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                  <p className='font-bold text-xl'>35€</p>
                  <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-80 flex justify-center items-center'>
          <div className='w-full p-4'>
            <div className='card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl'>
              <div className='prod-title'>
                <p className='text-2xl uppercase text-gray-900 font-bold'>
                  Coupe
                </p>
                <p className='uppercase text-sm text-gray-400'>Champion</p>
              </div>
              <div className='prod-img'>
                <Image
                  src={trophée}
                  alt=''
                  width={200}
                  height={300}
                  className='w-full object-cover object-center'
                />
              </div>
              <div className='prod-info grid gap-10'>
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                  <p className='font-bold text-xl'>35€</p>
                  <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
