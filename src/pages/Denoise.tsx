import React, { useState } from "react";
import { Download, Zap, Clock, Cpu, BarChart3 } from "lucide-react";
import ImageUpload from "../components/ImageUpload";

interface EvaluationMetrics {
  psnr: number;
  ssim: number;
  mse: number;
}

export default function Denoise() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [metrics, setMetrics] = useState<EvaluationMetrics | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setIsProcessing(true);

      // Simulate processing
      setTimeout(() => {
        setProcessedImage(e.target?.result as string);

        // Set dummy evaluation metrics after processing
        setMetrics({
          psnr: 35.2,
          ssim: 0.92,
          mse: 0.01,
        });

        setIsProcessing(false);
      }, 2000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Image Denoising Technology
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Advanced noise reduction powered by stable diffusion.
          </p>
        </div>

        <div className="mt-12">
          {!originalImage ? (
            <div className="max-w-lg mx-auto">
              <ImageUpload onImageUpload={handleImageUpload} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Original Image
                  </h3>
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Processed Image
                  </h3>
                  {isProcessing ? (
                    <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                    </div>
                  ) : (
                    processedImage && (
                      <div>
                        <img
                          src={processedImage}
                          alt="Processed"
                          className="w-full rounded-lg shadow-sm"
                        />
                        <button
                          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = processedImage;
                            link.download = "denoised-image.png";
                            link.click();
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Result
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Evaluation Results Section */}
              {metrics && !isProcessing && (
                <div className="mt-16">
                  <div className="bg-gray-50 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <BarChart3 className="h-6 w-6 text-indigo-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Evaluation Results
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="text-sm font-medium text-gray-500">
                          PSNR (Peak Signal-to-Noise Ratio)
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-3xl font-semibold text-gray-900">
                            {metrics.psnr}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">dB</span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Higher values indicate better quality
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="text-sm font-medium text-gray-500">
                          SSIM (Structural Similarity Index)
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-3xl font-semibold text-gray-900">
                            {metrics.ssim}
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Values closer to 1 indicate better similarity
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="text-sm font-medium text-gray-500">
                          LPIPS (Learned Perceptual Image Patch Similarity)
                        </div>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-3xl font-semibold text-gray-900">
                            {metrics.mse}
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Lower values indicate better results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
