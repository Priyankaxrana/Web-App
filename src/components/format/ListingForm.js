import React, { useState } from 'react';
import Axios from 'axios';


function ListingForm() {
  // State variables to manage form inputs
//   const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:4000/insert', {
        thumbnailTitle: title,
        thumbnailAddress: address,
        thumbnailDescription: description,
        thumbnailPrice: price
    })

            // Clear the form fields after submission
            // // setImage('');
            // setTitle('');
            // setAddress('');
            // setDescription('');
            // setPrice('');
}

  // Event handler for handling image file input
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);


//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const formData = {
//       image,
//       title,
//       address,
//       description,
//       price,
//     };
  
//     // Export form data as JSON
//     exportDataAsJSON(formData);

//     // Example: fetch('/api/createListing', { method: 'POST', body: formData });

//     // Clear the form fields after submission
//     setImage('');
//     setTitle('');
//     setAddress('');
//     setDescription('');
//     setPrice('');
//   };

  return (
    <div className='thumbnail-container'>
      <h1>Create a New Listing</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className='form-fields'> */}
        {/* {image && (
            <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="listingThumbnail"
            />
        )} */}
        {/* <input type="file" onChange={handleImageChange} />
        </div> */}
        <div className='form-fields'>
          <label className='form-text'>Title:</label>
          <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className='form-fields'>
          <label className='form-text'>Address:</label>
          <input type="text" value={address}onChange={(e) => {setAddress(e.target.value)}} />
        </div>
        <div className='form-fields'>
          <label className='form-text'>Description:</label>
          <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} />
        </div>
        <div className='form-fields'>
          <label className='form-text'>Price:</label>
          <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default ListingForm;
