import { Box } from '@thepuzzlers/pieces';
import { RiveContainer } from 'components/RiveContainer';
import { usePreloaderEnd } from 'context/PreloaderEndContext';

export const Preloader = () => {
  const { setIsPreloaderEnd } = usePreloaderEnd();
  return (
    <Box key="preloader" id="preloader">
      <RiveContainer
        src="/delivery.riv"
        // src="https://cdn.rive.app/animations/off_road_car_v7.riv"
        sx={{ width: '300px', height: '300px', overflow: 'hidden' }}
        onLoop={() => {
          var body = document.querySelector('body');
          body.classList.add('preloader_ready');
          setIsPreloaderEnd(true);
          setTimeout(function () {
            body.classList.remove('preloader_active');
            body.classList.remove('preloader_ready');
          }, 500);
        }}
      />
    </Box>
  );
};
