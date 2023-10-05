import { cinzDec } from '@styles/fonts'

const SubHero = () => {
  return (
    <div className={cinzDec.className}>
      <div className='text-[40px] font-bold lowercase'>
          <div className='flex'>
          <h3 className='pl-[325px] uppercase pr-[20px]'>ui / ux</h3>
          <h3>designer</h3>
          </div>
          <h3 className='text-[22px] font-normal pl-[760px] -mt-[26px]'>full stack</h3>
          <h3 className='pl-[575px]'>software developer</h3>
      </div>
    </div>
  )
}
export default SubHero
