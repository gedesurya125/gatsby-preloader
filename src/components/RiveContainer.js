import React from 'react';

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { Box } from '@thepuzzlers/pieces';

export const RiveContainer = ({ src, sx, onLoop = () => {} }) => {
  const { setCanvasRef, setContainerRef } = useRive({
    src,
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center
    }),
    onLoop
  });

  return (
    <Box
      className="rive--wraper"
      sx={{
        position: 'relative',
        overflow: 'hidden',
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
