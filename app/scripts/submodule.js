(function() {
  const cloneBacon = () => {
    const baconImg = [...document.getElementsByTagName('img')]
      .find((img) => img.alt === 'Bacon');
    const baconContainer = baconImg.parentElement;
    const newBaconImgElement = baconImg.cloneNode(false);
    baconContainer.appendChild(newBaconImgElement);
  };

  const isOnSubmodule = window.location.pathname.includes('submodule.html');

  const addMoreBaconBtn = isOnSubmodule
    ? [...document.getElementsByTagName('button')]
      .find((btn) => btn.textContent === 'Yeah, I want more bacon!')
    : null;

  if (addMoreBaconBtn) addMoreBaconBtn.addEventListener('click', cloneBacon);
})();
