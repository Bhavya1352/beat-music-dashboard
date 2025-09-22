import React from 'react';
import TrackForm from '../../../components/TrackForm';

const UploadPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Upload Track</h1>
      <TrackForm />
    </div>
  );
};

export default UploadPage;