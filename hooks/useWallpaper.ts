//import WAVES from '@/public/libs/vanta.waves.min';
import RINGS from '@/public/libs/vanta.rings.min';

import type { WallpaperEffect } from '@/types/components/System/Wallpaper';

import * as THREE from 'three';
import Color from 'color';
import { MILLISECONDS_IN_SECOND } from '@/utils/constants';
import { useEffect } from 'react';

const wallpaperColor = (h: number): number =>
  Color(`hsl(${h}, 40%, 15%)`).rgbNumber();

const fps = 20;
const updateIntervalInMilliseconds = MILLISECONDS_IN_SECOND / fps;
const initialColor = 200;
const vantaJsSettingsWaves = {
  gyroControls: false,
  mouseControls: false,
  touchControls: false,
  color: wallpaperColor(initialColor),
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.25,
  zoom: 0.95
};
const vantaJsSettingsRings = {
  gyroControls: false,
  mouseControls: false,
  touchControls: false,
  color: wallpaperColor(initialColor),
  backgroundColor: '#202428',
  scale: 0.95
};

const initRainbowEffect = (wallpaperEffect: WallpaperEffect): (() => void) => {
  let then = Date.now();
  let base = initialColor;
  let colorUpdateAnimationId: number;

  const updateColor = () => {
    const now = Date.now();
    const delta = now - then;

    if (delta > updateIntervalInMilliseconds) {
      base = base > 360 ? 0 : base + 1;
      then = now - (delta % updateIntervalInMilliseconds);
      /* eslint no-param-reassign: off */
      wallpaperEffect.options.color = wallpaperColor(base);
    }

    colorUpdateAnimationId = requestAnimationFrame(updateColor);
  };

  colorUpdateAnimationId = requestAnimationFrame(updateColor);

  return () => {
    cancelAnimationFrame(colorUpdateAnimationId);
  };
};

const renderWallpaperEffect = ({
  current: renderElement
}: React.RefObject<HTMLElement>): WallpaperEffect => {
  const wallpaperEffect = RINGS({
    el: renderElement,
    THREE,
    ...vantaJsSettingsRings
  });
  const cancelRainbowEffect = initRainbowEffect(wallpaperEffect);

  wallpaperEffect.onDestroy = cancelRainbowEffect;

  return wallpaperEffect;
};

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  useEffect(() => {
    const wallpaperEffect = renderWallpaperEffect(desktopRef);

    return () => {
      wallpaperEffect?.destroy();
    };
  }, []);
};

export default useWallpaper;