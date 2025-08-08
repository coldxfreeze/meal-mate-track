import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a482ae4d5f81454ca9c615c13bfebc88',
  appName: 'Tiffin Track',
  webDir: 'dist',
  server: {
    url: "https://a482ae4d-5f81-454c-a9c6-15c13bfebc88.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ff6b35",
      showSpinner: false
    }
  }
};

export default config;