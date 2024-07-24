
function Navbar() {
  return (
    <div className='flex flex-row w-full justify-between px-10 py-5 shadow-xl'>
        <h2 className=''>Pranata Yudistira Hermansyah</h2>
        <div className='flex flex-row gap-12'>
            <a href='#'>Home</a>
            <a href='#summary'>Summary</a>
            <a href='#project'>Project</a>
            <a href='#education'>Education</a>
        </div>
    </div>
  )
}

export default Navbar