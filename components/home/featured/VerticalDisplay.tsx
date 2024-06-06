import ps5 from '@/public/assets/ps5.svg'
import Image from 'next/image'
import Description from './Description'

const Vertical = () => {
  return (
    <div className="bg-black row-span-2 col-span-2 relative flex justify-center items-end">
      <Image src={ps5} alt='play station 5'/>
      <Description description='Black and White version of the PS5 coming out on sale.'
      title='Play Station 5' addedClass="w-1/2"/>
    </div>
  )
}

export default Vertical
 