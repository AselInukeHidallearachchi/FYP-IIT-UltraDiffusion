import React, { useState } from "react";
import { Download, BarChart3, ImageIcon } from "lucide-react";
import ImageUpload from "../components/ImageUpload";
import MetricsLoader from "../components/MetricsLoader";
import { API_ENDPOINTS } from "../config";

interface EvaluationMetrics {
  psnr: number;
  ssim: number;
  lpips: number;
}

export default function Denoise() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [metrics, setMetrics] = useState<EvaluationMetrics | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    try {
      // Read the file as data URL for preview
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageDataUrl = e.target?.result as string;
        setOriginalImage(imageDataUrl);
        setIsProcessing(true);
        setError(null);

        const strength = 0.3;
        const steps = 150;

        // Create form data to send to API
        const formData = new FormData();
        formData.append("image", file);
        formData.append("original_image", file); // Send original for metrics calculation
        formData.append("strength", String(strength));
        formData.append("steps", String(steps));
        formData.append("return_json", "true"); // Request JSON response with metrics

        try {
          // Send to the denoiser API endpoint
          const response = await fetch(API_ENDPOINTS.denoiser, {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API error: ${response.status}`);
          }

          // Process JSON response containing image and metrics
          const responseData = await response.json();

          // Convert base64 image to URL for display
          const base64Image = responseData.image;
          const processedImageUrl = `data:image/png;base64,${base64Image}`;
          setProcessedImage(processedImageUrl);

          // Set metrics if available
          if (responseData.metrics) {
            setMetrics(responseData.metrics);
          }
        } catch (apiError) {
          console.error("Error processing image:", apiError);
          setError(
            `Failed to process image: ${
              apiError instanceof Error ? apiError.message : "Unknown error"
            }`
          );
        } finally {
          setIsProcessing(false);
        }
      };

      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Error handling image:", err);
      setError("Error uploading image. Please try again.");
      setIsProcessing(false);
    }
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
                    <div className="flex flex-col items-center justify-center h-full bg-gray-50 rounded-lg p-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
                      <p className="text-gray-500">Processing your image...</p>
                    </div>
                  ) : error ? (
                    <div className="flex items-center justify-center h-full bg-red-50 rounded-lg p-8">
                      <p className="text-red-500">{error}</p>
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
              <div className="mt-16 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Evaluation Results
                  </h3>
                </div>

                {isProcessing ? (
                  <MetricsLoader />
                ) : error ? (
                  <div className="text-red-500">Unable to display metrics.</div>
                ) : metrics ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">
                        PSNR (Peak Signal-to-Noise Ratio)
                      </div>
                      <div className="mt-2 flex items-baseline">
                        <span className="text-3xl font-semibold text-gray-900">
                          {metrics.psnr.toFixed(2)}
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
                          {metrics.ssim.toFixed(3)}
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
                          {metrics.lpips.toFixed(3)}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        Lower values indicate better perceptual similarity
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500">
                    No evaluation metrics available.
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <button
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => {
                    setOriginalImage(null);
                    setProcessedImage(null);
                    setIsProcessing(false);
                    setMetrics(null);
                    setError(null);
                  }}
                >
                  Process Another Image
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
