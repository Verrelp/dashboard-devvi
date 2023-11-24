// components/Product.js
import React, { useState } from "react";
import Modal from "react-modal";

const Product = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-6 overflow-scroll px-0">
      <h1 className="text-2xl font-semibold mb-4">Add Product Page</h1>
      <div className="flex justify-between items-center mb-4">
        <div></div> {/* Empty div for spacing */}
        <button
          className="p-2 bg-blue-500 text-white rounded-md"
          onClick={openModal}
        >
          Add Product
        </button>
      </div>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                No
              </p>
            </th>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Product
              </p>
            </th>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Category
              </p>
            </th>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Quantity
              </p>
            </th>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Price
              </p>
            </th>
            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
              <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                Actions
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <div className="text-blue-gray-900">
                  <p className="font-semibold">1.</p>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="text-blue-gray-900">
                <p className="font-semibold">
                  {/* Gambar Product */}
                </p>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="text-blue-gray-900">
                <p className="font-semibold">Category</p>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="text-blue-gray-900">
                <p className="font-semibold">1</p>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="text-blue-gray-900">
                <p className="font-semibold">Rp.1000.000</p>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <button className="p-2 bg-red-500 text-white rounded-md">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          {/* ... Repeat for other rows ... */}
        </tbody>
      </table>

      {/* Modal for Add Product form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Product Modal"
        className="modal"
        overlayClassName="overlay"
        style={{
          content: {
            width: '375px',
            height: '667px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            border: '2px solid #ccc',
            borderRadius: '8px',
            background: '#fff',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <div className="mx-auto my-auto max-w-screen-sm">
          <h2 className="text-2xl mb-4">Add Product</h2>
          <form>
            {/* Your form fields go here */}
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            {/* ... Add more form fields as needed ... */}
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
          <button
            onClick={closeModal}
            className="mt-4 p-2 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
