async function teste(bool) {
  if (bool) {
    await teste(false);
  }
}
