const fetchData = () =>
  fetch('/time')
    .then((res) => res.json())
    .then((data) => data.time);

describe('/time', () => {
  it('successfully hits the /time endpoint', async () => {
    await expect(fetchData()).resolves.toBeGreaterThan(0);
  });
});
