import React from 'react'

const BannerOption = ({onChange}) => {
    
  return (
  <>
   <label className="banner_form-label" htmlFor="color">
                    Color
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="color"
                    name="exterior_color"
                    onChange={onChange}
                  >
                    <option value="">Color</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Gray">Gray</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                    <option value="Moon">Moon</option>
                    <option value="Blueprint">Blueprint</option>
                    <option value="Black Stone">Black Stone</option>
                    <option value="Monsoon Gray Metallic">
                      Monsoon Gray Metallic
                    </option>
                    <option value="Q Cosmos Orange">Q Cosmos Orange</option>
                    <option value="Carrara White">Carrara White</option>
                    <option value="Obsidian Black">Obsidian Black</option>
                    <option value="Kings Red">Kings Red</option>
                    <option value="Night Blue Metallic">
                      Night Blue Metallic
                    </option>
                    <option value="Mojave Silver Metallic">
                      Mojave Silver Metallic
                    </option>
                  </select>
  </>
  )
}

export default BannerOption