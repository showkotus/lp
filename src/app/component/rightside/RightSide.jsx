import React from "react";

const RightSide = () => {
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              
              <th>Hide</th>
              <th>Test</th>
              <th>Investigation Atribute</th>
              <th>Result</th>
              <th>Unit</th>
              <th>Reference Range</th>
              <th>Note</th>
              <th>Machine</th>
              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
              
                <br />
                <span className="badge badge-ghost badge-sm">
                 
                </span>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                   
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
              
                <br />
                <span className="badge badge-ghost badge-sm">
                  
                </span>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
              
                <br />
                <span className="badge badge-ghost badge-sm">
                
                </span>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
           
                <br />
                <span className="badge badge-ghost badge-sm">
                  
                </span>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
             
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RightSide;
