export const getRandomCatImageByBreed = async (breed) => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`

  const getRequestOptions = {
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.CAT_API_KEY,
    },
    method: 'GET',
    mode: 'cors',
  }

  const response = await window.fetch(url, getRequestOptions)

  return response.json()
}
