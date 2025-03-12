import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/utils/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextInputProvider } from '../utils/TextInputProvider';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata = {
  title: 'Nexibles',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <TextInputProvider>
          <body className={poppins.className}>
            <div>
              {children}
            </div>
            <ToastContainer />
          </body>
        </TextInputProvider>
      </AuthProvider>
    </html>
  );
}
