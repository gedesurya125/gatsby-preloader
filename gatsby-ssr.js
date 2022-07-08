exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: 'preloader_active'
  });

  return null;
};
