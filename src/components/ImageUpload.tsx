import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  accept?: string;
  maxSize?: number;
}

export default function ImageUpload({ 
  onImageUpload, 
  accept = "image/*", 
  maxSize = 5 * 1024 * 1024 
}: ImageUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/') && file.size <= maxSize) {
      onImageUpload(file);
    }
  }, [onImageUpload, maxSize]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= maxSize) {
      onImageUpload(file);
    }
  }, [onImageUpload, maxSize]);

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors cursor-pointer"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop an image here, or click to select
        </p>
        <p className="mt-1 text-xs text-gray-500">
          PNG, JPG up to {Math.round(maxSize / 1024 / 1024)}MB
        </p>
      </label>
    </div>
  );
}