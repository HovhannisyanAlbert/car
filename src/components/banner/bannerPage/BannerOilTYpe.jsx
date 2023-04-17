import React from 'react'

const BannerOilTYpe = ({onChange,onSubmit}) => {
  return (
   <>

<div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-bb">
                  <label className="banner_form-label" htmlFor="bodystyle">
                    Body Style
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="bodystyle"
                    name="bodystyle"
                    onChange={onChange}
                  >
                    <option value="">Body Style</option>
                    <option value="TRUCKS">TRUCKS</option>
                    <option value="SUV">SUV</option>
                    <option value="VANS">VANS</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Wagon">Wagon</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Pickup Truck">Pickup Truck</option>
                    <option value="Passenger Van">Passenger Van</option>
                    <option value="Convertible">Convertible</option>
                    <option value="4dr Car">4dr Car</option>
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rt">
                  <label className="banner_form-label" htmlFor="fuel_type">
                    Fuel Type
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="fuel_type"
                    name="fuel_type"
                    onChange={onChange}
                  >
                    <option value="">Fuel Type</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rb p-0">
                  <button className="banner_form_btn-red" onClick={onSubmit}>
                    Search
                  </button>
                </div>
              </div>
   </>
  )
}

export default BannerOilTYpe