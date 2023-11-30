import Navbar2 from '@/components/Navbar';
import Product from '@/components/Product';
import { ToastContainer } from 'react-toastify';

const Products = () => {
  return (

    <>
    <ToastContainer />
    <Navbar2/>
    {/* Container untuk mengatur konten di tengah */}
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Product />
    </div>
  </>
  );
};

export default Products;
