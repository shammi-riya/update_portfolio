

const Sectiontitle = ({ title, subtitle }) => {
    return (
        <div className='flex text-[#ff014f]  justify-center items-center text-center'>
            <div>
                <h5 className='text-xl font-semibold uppercase'>{subtitle}</h5>
                <div className='flex justify-center gap-3 items-center text-[#f4f5f6]'>
                    <hr className="w-12 h-1 my-8 bg-gray-700 border-0 rounded dark:bg-gray-700" />
                    <div >

                        <h4 className="text-4xl font-bold"> {title}</h4>
                    </div>
                    <hr className="w-12 h-1 my-8 bg-gray-700 border-0 rounded dark:bg-gray-700" />
                </div>
            </div>

        </div>
    );
};

export default Sectiontitle;