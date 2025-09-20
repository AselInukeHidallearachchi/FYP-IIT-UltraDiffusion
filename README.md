# UltraDiffusion: Advanced Ultrasound Image Denoising with Diffusion Models

A Final Year Project (FYP) focusing on enhancing ultrasound imaging quality through state-of-the-art Denoising Diffusion Probabilistic Models (DDPMs). This project combines cutting-edge deep learning techniques with medical imaging to improve diagnostic precision and image clarity.

![Project Banner](https://img.shields.io/badge/Project-Final%20Year%20Project-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20+%20Python%20+%20PyTorch-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)

## 🎯 Project Overview
UltraDiffusion addresses the critical challenge of noise in ultrasound imaging, particularly speckle noise and low contrast issues that affect diagnostic accuracy. By leveraging fine-tuned Stable Diffusion models with specialized architectures, this project delivers real-time image enhancement suitable for clinical applications.
<p align="center">
  <img src="https://github.com/user-attachments/assets/4fb618e2-0e23-49af-890b-71c6290bdcf2" width="45%" />
  <img src="https://github.com/user-attachments/assets/96253583-594f-49b3-b523-cdf04814b0a5" width="45%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/70140641-f625-4b3a-80a3-889a73c0fceb" width="45%" />
  <img src="https://github.com/user-attachments/assets/2e5e6852-2cd5-4bfe-901c-92c7c118d3f0" width="45%" />
</p>

### Key Features

- **🧠 AI-Powered Denoising**: Fine-tuned Stable Diffusion with UNet2DCondition architecture
- **⚡ Real-time Processing**: Optimized with mixed-precision training (FP16) and Hugging Face Accelerate
- **📊 Comprehensive Metrics**: PSNR, SSIM, and LPIPS evaluation metrics
- **🔧 Classical Filters**: Gaussian, Median, and Non-Local Means filters for comparison
- **🌐 Interactive Web Interface**: Modern React-based frontend for easy image processing
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices

## 🏗️ Architecture

### Frontend (React + TypeScript)

- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM for navigation
- **Styling**: Tailwind CSS for modern UI design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds

### Backend (Python + PyTorch)

- **Deep Learning**: PyTorch with Diffusers library
- **Model Architecture**: Stable Diffusion v1.5 with custom fine-tuning
- **API Framework**: Flask with CORS support
- **Image Processing**: PIL, scikit-image, OpenCV
- **Metrics**: LPIPS, PSNR, SSIM for quantitative evaluation

### Model Components

- **UNet2DConditionModel**: Core denoising architecture
- **AutoencoderKL**: Latent space compression
- **CLIPTextModel & Tokenizer**: Text conditioning (if applicable)
- **DDPMScheduler**: Diffusion process scheduling

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **CUDA-compatible GPU** (recommended for optimal performance)
- **Git** for version control

### Frontend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AselInukeHidallearachchi/FYP-IIT-UltraDiffusion.git
   cd UltraDiffusionFE(V2)
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to the API directory**

   ```bash
   cd api
   ```

2. **Install Python dependencies**

   ```bash
   pip install flask flask-cors diffusers transformers torch pillow pyngrok py7zr lpips scikit-image scipy
   ```

3. **Download the trained model**

   - The notebook includes automatic model download from MediaFire
   - Alternatively, manually download and extract the model files to `./models/trainedModel/`

4. **Run the Jupyter notebook**
   ```bash
   jupyter notebook "difapi-version-4-0 (1).ipynb"
   ```

## 📖 Usage

### Web Interface

1. **Home Page**: Overview of the project and technology features
2. **Denoise Images**: Upload ultrasound images for AI-powered denoising
3. **Filters**: Apply classical denoising filters (Gaussian, Median, Non-Local Means)
4. **About**: Learn more about the project objectives and methodology

### API Endpoints

- **POST `/denoiser/`**: Upload image for diffusion-based denoising

  - Parameters: `image`, `strength` (0.1-1.0), `steps` (50-200)
  - Returns: Enhanced image with evaluation metrics

- **POST `/filters/`**: Apply classical filters to uploaded image
  - Parameters: `image`
  - Returns: Filtered images (Gaussian, Median, NLM)

### Evaluation Metrics

- **PSNR (Peak Signal-to-Noise Ratio)**: Higher values indicate better quality
- **SSIM (Structural Similarity Index)**: Values closer to 1 indicate better similarity
- **LPIPS (Learned Perceptual Image Patch Similarity)**: Lower values indicate better perceptual similarity

## 🧪 Testing

### Frontend Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Structure

- **Unit Tests**: Component-level testing with Jest and React Testing Library
- **Integration Tests**: Full application flow testing
- **Coverage Reports**: Generated in `/coverage` directory

## 🔧 Configuration

### Frontend Configuration

- **Vite Config**: `vite.config.ts` - Build and development settings
- **TypeScript**: `tsconfig.json` - Type checking configuration
- **Tailwind CSS**: `tailwind.config.js` - Styling framework setup
- **ESLint**: `eslint.config.js` - Code linting rules

### API Configuration

- **Model Settings**: Adjustable strength and diffusion steps
- **Device Selection**: Automatic CUDA/CPU detection
- **CORS Settings**: Configured for cross-origin requests

## 📁 Project Structure

```
UltraDiffusionFE(V2)/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ImageUpload.tsx   # File upload component
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   └── MetricsLoader.tsx # Loading state for metrics
│   ├── pages/                # Page components
│   │   ├── Home.tsx          # Landing page
│   │   ├── Denoise.tsx       # AI denoising interface
│   │   ├── Filters.tsx       # Classical filters interface
│   │   └── About.tsx         # Project information
│   ├── __tests__/            # Test files
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── config.ts             # API configuration
├── api/
│   └── difapi-version-4-0 (1).ipynb  # Backend API notebook
├── notebook/
│   └── Denoicer V5.1 (6).ipynb       # Model training notebook
├── coverage/                 # Test coverage reports
├── package.json              # Node.js dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## 🔬 Research & Methodology

### Dataset

- Ultrasound images with realistic noise patterns
- Speckle noise augmentation for robust training
- Validation on clinical-quality imaging data

### Model Training

- **Base Model**: Stable Diffusion v1.5
- **Fine-tuning**: Custom UNet2D architecture
- **Loss Functions**: LPIPS perceptual loss + L2 reconstruction
- **Optimization**: Mixed-precision training with gradient scaling

### Evaluation Metrics

- **Quantitative**: PSNR, SSIM scores
- **Perceptual**: LPIPS distance measurements
- **Clinical**: Visual quality assessment by domain experts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Hugging Face for the Diffusers library
- OpenAI for Stable Diffusion methodology
- Medical imaging community for dataset insights
- Academic supervisors and mentors

## get new link to ARCHIVE_DOWNLOAD_URL copy api to API_BASE_URL (only to .app) npm run dev

**Note**: This project is for academic and research purposes. For clinical applications, please ensure proper validation and regulatory compliance.
