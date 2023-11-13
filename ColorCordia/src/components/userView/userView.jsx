/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import EditableField from "../utils/editableField"
import { deletePalette, getPalettesByCreator } from "../../services/palettes"
import CommunityPalette from "../communityView/CommunityPalette"


const UserView = ({ user, setUser, setMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [palettes, setPalettes] = useState([])
  const deleteConfirm = useRef()
  const [paletteForDelete, setForDelete] = useState(null)
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      (async () => {
        setPalettes(await getPalettesByCreator(user.id))
      })()
    }
  }, [user])

  if (!user) {
    return null
  }


  const countPaletteLikes = () => {
    let likes = 0
    palettes.forEach(palette => {
      likes = likes + palette.likes
    })
    return likes
  }

  const handlePaletteDelete = event => {
    event.preventDefault()
    deleteConfirm.current.showModal()
    setForDelete(event.target.id)

  }
  return (
    <div className="m-5">
      <dialog ref={deleteConfirm} className="rounded-lg">
        <div className="p-8 w-full">
          <div className="w-fit mb-4">
            Do you want to delete a palette?
            <br />
            This action cannot be undone
          </div>
          <div className="text-right w-full">
            <button className="pill-button-delete mr-2" onClick={() => {
              deletePalette(paletteForDelete)
              setPalettes(palettes.filter(palette => palette.id !== paletteForDelete))
              deleteConfirm.current.close()
            }}>Delete</button>
            <button className="pill-button" onClick={() => deleteConfirm.current.close()}>Cancel</button>
          </div>
        </div>
      </dialog>
      <h2 className="text-4xl font-normal">User Info</h2>
      <div className="w-fit p-5 mt-4 border border-gray-200 rounded-lg">
        <form>
          Username
          <br />
          <input className="text-input" type="text" disabled value={username} />
          <EditableField fieldLabel='Password' fieldValue={password} setNewState={setPassword} user={user} setUser={setUser} setMessage={setMessage}></EditableField>
        </form>
        <div>
          <ul>
            <li className="py-4">Shared palettes:<span className="ml-2">{palettes.length}</span></li>
            <li className="py-4">Received likes:<span className="ml-2">{countPaletteLikes()}</span></li>
          </ul>
        </div>
      </div>
      <h3 className="mt-4 text-2xl font-normal">Your palettes</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {palettes.map(palette => {
          return (
            <div key={Math.random()}>
              <CommunityPalette key={Math.random()} palette={palette}><button className="pill-button-delete" id={palette.id} onClick={event => handlePaletteDelete(event)}>Delete</button></CommunityPalette>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default UserView