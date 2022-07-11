import React from 'react';

import {
  useRive,
  Layout,
  Fit,
  Alignment
  // RuntimeLoader
} from '@rive-app/react-canvas';
import { Box } from '@thepuzzlers/pieces';

// RuntimeLoader.setWasmUrl('http://localhost:8000/rive.wasm');

export const RiveContainer = ({ src, sx }) => {
  const { setCanvasRef, setContainerRef } = useRive({
    src,
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center
    }),
    onLoop: () => {
      console.log('hi i am called');
      var body = document.querySelector('body');
      body.classList.add('preloader_ready');
      setTimeout(function () {
        body.classList.remove('preloader_active');
        body.classList.remove('preloader_ready');
      }, 500);
    }
  });

  return (
    <Box
      className="rive--wraper"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        // width: '200px',
        // height: '200px',
        ...sx
      }}>
      <Box
        ref={setContainerRef}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        <Box as="canvas" ref={setCanvasRef} />
      </Box>
    </Box>
  );
};
