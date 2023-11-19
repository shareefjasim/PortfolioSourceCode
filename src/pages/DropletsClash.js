// EchoPage.js
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const DropletsClashPage = () => {
  return (
    <div>
        <Header />
        <h1>DropletsClash</h1>
        {/* Add your page content here */}
        <div class="flex justify-between">
  <div class="bg-blue-500 p-4">
    Box 1
  </div>
  <div class="bg-blue-500 p-4">
    Box 3
  </div>
</div>

<div class="grid grid-rows-3 gap-40">
  <div class="bg-blue-500 p-4">
    Box 1
  </div>
  
  <div class="bg-blue-500 p-4">
    Box 3
  </div>
</div>

        <Footer />
    </div>
  );
};

export default DropletsClashPage;