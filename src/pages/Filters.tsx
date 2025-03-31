import React, { useState } from "react";
import { ImageIcon } from "lucide-react";
import ImageUpload from "../components/ImageUpload";

const FILTER_NAMES = {
  gaussian: "Gaussian Filter",
  median: "Median Filter",
  nlm: "Non-Local Means",
};

export default function Filters() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState<{
    [key: string]: string;
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      setOriginalImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    setIsProcessing(true);
    setError(null);
    setFilteredImages(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://4ed5-34-91-43-155.ngrok-free.app/filters/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "API error");
      }

      const data = await response.json();
      setFilteredImages(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Classical Image Filters
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Apply traditional denoising techniques like Gaussian, Median, and
            Non-Local Means.
          </p>
        </div>

        {!originalImage ? (
          <div className="max-w-lg mx-auto">
            <ImageUpload onImageUpload={handleImageUpload} />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Original Image
                </h3>
                <img
                  src={originalImage}
                  alt="Uploaded"
                  className="w-full rounded-lg shadow-sm object-contain h-[320px]"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Filtered Outputs
                </h3>
                {isProcessing ? (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-50 rounded-lg p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
                    <p className="text-gray-500">Applying filters...</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 p-4 rounded-lg text-red-600">
                    {error}
                  </div>
                ) : filteredImages ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    {Object.entries(filteredImages)
                      .filter(([key]) => key !== "original")
                      .map(([key, base64]) => (
                        <div key={key} className="text-center">
                          <img
                            src={`data:image/png;base64,${base64}`}
                            alt={key}
                            className="rounded-lg shadow-sm object-contain h-[320px] w-full"
                          />
                          <p className="mt-2 text-sm text-gray-700 font-medium">
                            {FILTER_NAMES[key as keyof typeof FILTER_NAMES]}
                          </p>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No filtered images yet.</p>
                )}
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => {
                  setOriginalImage(null);
                  setFilteredImages(null);
                  setIsProcessing(false);
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
  );
}
