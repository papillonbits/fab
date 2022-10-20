export const getRandomDogImageByBreed = async (breed) => {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`
  const response = await window.fetch(url)

  return response.json()
}
