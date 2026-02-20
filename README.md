
# Free Bill - Cloud Billing & Desktop Manager

An elegant, secure, and cloud-synced billing management tool for small businesses.

## 🚀 Getting Started Locally

To run Free Bill as a standalone Windows app or on your local machine, follow these exact steps:

1. **Download Project**: 
2. **Extract**: Unzip the downloaded file into a dedicated folder (e.g., `C:\Projects\FreeBill`).
3. **Open Terminal**: Open your terminal (PowerShell or Command Prompt) and navigate to that folder:
   ```bash
   cd C:\Projects\FreeBill
   ```
4. **Install Dependencies**:
   ```bash
   npm install
   ```
5. **Run in Desktop Mode**:
   ```bash
   npm run desktop
   ```
6. **Build for Windows (.exe)**:
   ```bash
   npm run build:exe
   ```
   *Your portable .exe will be generated in the `dist` folder.*

## ✨ Features
- **Offline Persistence**: Data is saved to your computer first and synced to the cloud automatically.
- **7-Day Audit**: View history with "Reprinted" and "Cancelled" filters.
- **Financial Integration**: Real-time sales vs. expense profit calculation.
- **Thermal Ready**: Standard 80mm receipt generation.

## 🔒 Security
Your data is stored in Google Cloud Firestore and is private to your account. Local changes are synced only when you are signed in.
