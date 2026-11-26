import { useEffect, useState } from 'react';

export type DevicePlatform =
  | 'mobile-ios'
  | 'mobile-android'
  | 'tablet-ipad'
  | 'tablet'
  | 'desktop';

function detectDevice(): DevicePlatform {
  if (typeof window === 'undefined') return 'desktop';

  const ua = window.navigator.userAgent.toLowerCase();
  const maxTouchPoints = window.navigator.maxTouchPoints ?? 0;
  const width = window.innerWidth;

  const isIPhoneOrIPod = /iphone|ipod/.test(ua);
  const isIPad = /ipad/.test(ua) || (/macintosh/.test(ua) && maxTouchPoints > 1);
  const isAndroid = /android/.test(ua);

  if (isIPhoneOrIPod) return 'mobile-ios';
  if (isIPad) return 'tablet-ipad';
  if (isAndroid && width < 768) return 'mobile-android';
  if (width >= 1024) return 'desktop';
  if (width >= 640) return 'tablet';
  return 'mobile-android';
}

export function useDeviceType() {
  const [device, setDevice] = useState<DevicePlatform>(detectDevice);

  useEffect(() => {
    const updateDevice = () => {
      const next = detectDevice();
      setDevice(next);
      document.documentElement.dataset.device = next;
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    window.addEventListener('orientationchange', updateDevice);

    return () => {
      window.removeEventListener('resize', updateDevice);
      window.removeEventListener('orientationchange', updateDevice);
    };
  }, []);

  return {
    device,
    isIOS: device === 'mobile-ios' || device === 'tablet-ipad',
    isDesktop: device === 'desktop',
    isMobile: device === 'mobile-android' || device === 'mobile-ios',
  };
}
