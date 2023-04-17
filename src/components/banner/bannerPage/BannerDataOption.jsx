import React from 'react'
import BannerOption from './BannerOption';

const BannerDataOption = ({onChange,options}) => {
  return (
    <>
              <div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lt">
                  <BannerOption onChange={onChange} />
                </div>
                <div className="col-12 col-md-4 banner_form_input">
                  <label className="banner_form-label" htmlFor="year">
                    Year
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="year"
                    name="year"
                    onChange={onChange}
                  >
                    <option value="">Year</option>
                    {options.map((year) => {
                      return (
                        <option value={year} key={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lb">
                  <label className="banner_form-label" htmlFor="transmission">
                    Transmission
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="transmission"
                    name="transmission"
                    onChange={onChange}
                  >
                    <option value="">Transmission</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Automatic CVT">Automatic CVT</option>
                    <option value="Automatic CVT">Electric</option>
                    <option value="6-Speed Automatic with Auto-Shift">
                      6-Speed Automatic with Auto-Shift
                    </option>
                    <option value="8-Speed Automatic">8-Speed Automatic</option>
                    <option value="7-Speed Automatic with Auto-Shift">
                      7-Speed Automatic with Auto-Shift
                    </option>
                    <option value="6-Speed Automatic with Auto-Shift">
                      6-Speed Automatic with Auto-Shift
                    </option>
                    <option value="9-Speed Automatic">9-Speed Automatic</option>
                    <option value="10-Speed Automatic">
                      10-Speed Automatic
                    </option>
                  </select>
                </div>
              </div>

    
    </>
  )
}

export default BannerDataOption