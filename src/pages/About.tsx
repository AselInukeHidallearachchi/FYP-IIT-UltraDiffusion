import React from "react";
import { Lightbulb, Target, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About UltraDiffusion
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Enhancing ultrasound image quality using Denoising Diffusion
            Probabilistic Models
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Background */}
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Background
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Ultrasound imaging suffers from speckle noise and low contrast,
                affecting diagnostic precision. UltraDiffusion addresses this by
                leveraging fine-tuned diffusion models trained on medical
                datasets, significantly improving visual clarity without losing
                anatomical detail.
              </p>
            </div>

            {/* Objectives */}
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Objectives
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our goal is to create a lightweight, real-time denoising
                pipeline that integrates Denoising Diffusion Probabilistic
                Models with clinically relevant ultrasound data, providing
                clear, high-quality imaging for healthcare professionals.
              </p>
            </div>

            {/* Innovation */}
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                Innovation
              </h3>
              <p className="mt-2 text-base text-gray-500">
                UltraDiffusion fine-tunes a Stable Diffusion backbone using a
                UNet2DConditionModel, LPIPS perceptual loss, AutoencoderKL, and
                speckle noise augmentation. This prototype demonstrates the
                feasibility of applying diffusion models to ultrasound
                denoising.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
              alt="Medical research laboratory"
            />
            <p className="mt-4 text-sm text-gray-500 text-center">
              Our prototype system is trained and evaluated using ultrasound
              datasets enhanced with realistic noise patterns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
