import { type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
} satisfies UserConfig