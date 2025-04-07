import React from "react";
import { ArrowRight, Zap, Clock, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative" data-testid="home-page">
      {/* Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Enhancing Ultrasound Imaging</span>
            <span className="block text-indigo-600">
              with Denoising Diffusion Models
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Advancing medical imaging quality through state-of-the-art deep
            learning techniques. Our research focuses on improving ultrasound
            image clarity using Denoising Diffusion Probabilistic Models.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/denoise"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Start Using Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mt-20">
          {" "}
          {/* Reduced margin-top from 32 to 20 */}
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
            Advanced Image Denoising Technology
          </h2>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-8">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Noise-Adaptive Denoising
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Our system uses fine-tuned diffusion models with a
                  UNet2DCondition architecture to effectively reduce speckle and
                  Gaussian noise in ultrasound images while preserving fine
                  anatomical structures.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-8">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Real-time Processing
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Enabled by mixed-precision training (FP16) and model
                  optimization with Hugging Face Accelerate, our solution
                  delivers real-time enhancement suitable for clinical
                  applications.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-8">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Deep Learning Optimized
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Leverages Stable Diffusion fine-tuning, LPIPS-based loss
                  metrics, and AutoencoderKL compression for superior perceptual
                  quality. Automatically adapts to varying image quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group  rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1691933880037-ce9d151ab922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical ultrasound machine"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">
                    State-of-the-art Technology
                  </h4>
                  <p className="text-sm">
                    Advanced ultrasound imaging technology
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-lg ">
              <img
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                src="https://plus.unsplash.com/premium_photo-1665203550521-3281e4a07c29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital medical display"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Digital Processing</h4>
                  <p className="text-sm">Real-time image enhancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Experience the Difference
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Try our interactive demo to see how our technology can enhance your
            ultrasound images.
          </p>
        </div>
      </div>
    </div>
  );
}
