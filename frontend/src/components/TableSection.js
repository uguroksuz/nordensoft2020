import React from "react"
// import BlockContent from "@sanity/block-content-to-react"

const TableSection = ({
  headline,
  description,
  // customclass,
  rows
}) => (
    <div id="cases" className="container-fluid pt-5" >
      <div className="container text-center pt-5 ">
        <div className="row">
          <div className="col-md-12">
            <div className="h2"> — {headline} — </div>
            <div>{description}</div>
          </div>
        </div>
        <div id="generic_price_table">
          <div className="container">
            <table class="table">
              {/* <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead> */}
              <tbody>
                {rows.map((row, i) => (
                  <tr>
                    {row.cells.map((cell, i) => (
                      i == 0 ? <th scope="row">{cell}</th> :
                      <td>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );

export default TableSection



