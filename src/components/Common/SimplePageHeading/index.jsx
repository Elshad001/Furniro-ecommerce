import leftIcon from 'assets/icons/leftIcon.svg'

const SimplePageHeading = ({pageName , contentName}) => {
  return (
    <div className='w-full flex gap-5 justify-start items-center h-24 bg-[#F9F1E7] px-8 md:px-12 lg:px-24'>
      <p className='flex gap-2 text-lg'>Home  <img src={leftIcon} alt='' /></p>
      <p className='flex gap-2 text-lg'>{pageName}<img src={leftIcon} alt='' /></p>
      <p className='text-lg font-semibold'>{contentName}</p>
    </div>
  )
}

export default SimplePageHeading
