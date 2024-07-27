import { Link } from 'react-router-dom';
import bg from '../../assets/bg1.jpg'
import Ai_agri from '../../assets/ai_agri.jpeg'
import smt_organic from '../../assets/smt_organic.jpeg'
import reforming from '../../assets/reforming.jpg'
import service_02 from '../../assets/service-02.jpg'
import agri_prd from '../../assets/agri_prd.jpeg'
import orn_prd from '../../assets/orn_prd.jpeg'
import Fresh from '../../assets/fresh.jpeg'
import Dairy from '../../assets/Dairy.jpeg'
import Thuman from '../../assets/Thuman.jpeg'
import adhitya from '../../assets/adhitya.png'
import Eco from '../../assets/eco.jpeg'
import AboutFramer from '../../assets/AboutFramer.jpg'
import Organic from '../../assets/org.jpeg'
import Bgk from '../../assets/Bgk.jpeg'
import AgriFarming from '../../assets/agri_Farm.jpeg'
import Easy from '../../assets/easy.jpeg'
const Home = () => {
  return (
    <div  className='bg-white'>
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold text-white"> WELCOME TO KISAN SEVAK </h1>
          <p className="mt-4 text-3xl">Agriculture & Eco Farming</p>
          <p className="mt-4 max-w-2xl">
          Farmer is the most healthful, most useful and most noble employment of man
          </p>
          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
           <Link to='/About'> Discover More</Link>
          </button>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 01</h2>
              <p className="mt-2 text-lg">We are using a new technology</p>
              <img src={Ai_agri} alt="Feature 01" className="mt-4 mx-auto h-48 w-50" />
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 02</h2>
              <p className="mt-2 text-lg">Good in smart organic services</p>
              <img src={smt_organic} alt="Feature 02" className="mt-4 mx-auto h-48 w-50" />
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 03</h2>
              <p className="mt-2 text-lg">Reforming in the systems</p>
              <img src={reforming} alt="Feature 03" className="mt-4 mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img
                src={smt_organic}
                alt="Agriculture"
                className="rounded-full w-96 h-96 object-cover"
              />
              <img
                src={service_02}
                alt="Organic"
                className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <div  className="lg:w-1/2 lg:pl-12  ">
            <h2 className="text-3xl font-bold text-green-700">Our Introductions</h2>
            <h1 className="text-5xl font-bold mt-4">Agriculture & Organic Product Farm</h1>
            <p className="text-lg text-gray-700 mt-4">Agrios is the largest global organic farm.</p>
            <p className="text-lg text-gray-700 mt-4">
              There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.
            </p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">✔</span> Growing fruits vegetables
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Tips for ripening your fruits
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Lorem ipsum is not simply random text
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Making this the first true generator on the internet
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-white text-white rounded-lg hover:bg-green-600">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Our Services</h2>
          <h1 className="text-5xl font-bold mt-4">What We Offer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={agri_prd} alt="Agriculture Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={orn_prd} alt="Organic Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Fresh} alt="Fresh Vegetables" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Dairy} alt="Dairy Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Recently Completed</h2>
          <h1 className="text-5xl font-bold mt-4">Explore Pojects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Easy} alt="Agriculture Products" className="h-96 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={AgriFarming} alt="Organic Products" className="h-96 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Eco} alt="Fresh Vegetables" className="h-96 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <img src={Organic} alt="Dairy Products" className="h-96 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
      </section>
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
          <div className="relative bg-green-100 p-4 shadow rounded">
            <img
              src={Thuman}
              alt="Organic"
              className="absolute bottom-0 right-11 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <p>There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which dont look even.</p>
            <p className="font-bold mt-2">Tuman</p>
            <p className='text-yellow-400'>★★★★<span className='text-black'>★</span> </p>
          </div>
          {/* Add more testimonial cards as needed */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
          <div className="relative bg-green-100 p-4 shadow rounded">
            <img
              src={adhitya}
              alt="Organic"
              className="absolute bottom-0 right-11 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <p>There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which dont look even.</p>
            <p className="font-bold mt-2">Adithya.M.Bharade</p>
            <p className='text-yellow-400'>★★★★★</p>
          </div>
          </div>
          {/* Add more testimonial cards as needed */}
          </div>
      </div>
    </section>
    <section className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img src={AboutFramer} alt="Agriculture Professional Leader" className="w-full md:w-1/3" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Why Choose Agrios Market</h2>
          <ul className="list-disc ml-4">
            <li>Quality Organic Food</li>
            <li>Professional Farmers</li>
            <li>Quality Products</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">From the Blog</h2>
      <h3 className="text-xl mb-6">News & Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 shadow rounded">
          <img src="path/to/image1.jpg" alt="Article 1" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">1 Comment</span>
            </div>
          </div>
          <h4 className="font-bold">Bringing Food Production Back To Cities</h4>
        </div>
        <div className="bg-green-100 p-4 shadow rounded">
          <img src="path/to/image2.jpg" alt="Article 2" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">The Future of Farming, Smart Irrigation Solutions</h4>
        </div>
        <div className="bg-green-100 p-4 shadow rounded">
          <img src="path/to/image3.jpg" alt="Article 3" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">Agronomy and relation to Other Sciences</h4>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
