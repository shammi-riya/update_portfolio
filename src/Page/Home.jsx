import bgimg from '../assets/intro-bg.jpg';

const Home = () => {
    const heroStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover', // This will cover the entire container with the background image
        backgroundPosition: 'center',


        // This will center the background image
    };

    return (

        <div className="hero w-screen lg:absolute lg:right-0 lg:w-[85%] min-h-screen" style={heroStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome </h1>
                    <p className="mb-5 text-4xl">I am Front End Developer</p>
                    <button className="bg-transparent border-2 border-[#20c997] py-3 px-8 text-[#20c997] hover:bg-[#20c997] hover:text-white  duration-200 rounded-3xl font-bold transition">
                        Hire Me
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Home;
