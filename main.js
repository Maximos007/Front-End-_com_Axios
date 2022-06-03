const url = 'http://localhost:5500/api'

async function getUsers() {

  try {
    const response = await axios.get(url)
    apiResult.textContent = JSON.stringify(response.data)
  } catch (error) {
    console.log(error)
  }

}

async function getUser(id) {

  try {
    const response = await axios.get(`${url}/${id}`)
    const data = response.data

    userName.textContent = data.name
    userCity.textContent = data.city
    userID.textContent = data.id
    userAvatar.src = data.avatar

  } catch (error) {
    console.log(error)
  }
}

async function createUser(newUser) {

  try {
    const response = await axios.post(url, newUser)
    console.log(response)
  } catch (error) {
    console.log(error)
  }

}

async function updateUser(id, updatedUser) {
  try {
    const response = await axios.put(`${url}/${id}`,updatedUser)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

async function deleteUser(id) {
  try {
    const response = await axios.delete(`${url}/${id}`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const newUser ={
  name: 'Wasley Araújo',
  avatar: 'https://avatars.githubusercontent.com/u/18080063?v=4',
  city: 'New York'
}

const userUpated = {
  name: 'Wanessa Santos',
  avatar: 'https://avatars.githubusercontent.com/u/18080063?v=4',
  city: 'Brasília'
}

function main() {
  return {
    getUsers: getUsers(),
    getUser: getUser(1),
    // createUser: createUser(newUser),
    // updateUser: updateUser(2, userUpated),
    deleteUser: deleteUser(1)
  }
}

main()

