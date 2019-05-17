import React from 'react'
import swal from 'sweetalert'

import './styles.css'

function Tool({ tool, deleteTool }) {

  function handleDelete({ id, title }) {
    swal({
      title: "Remove tool",
      text: `Are you sure you want to remove ${title}?`,
      buttons: ["Cancel", "Yes, remove"]
    }).then((mustRemove) => {
      if(mustRemove === true) {
        deleteTool(id)
      }
    })
  }

  return (
    <div className="tool-wrapper">
      <div className="tool-header d-flex">
        <h4 className="col-10 d-flex justify-content-start tool-title">
          {tool.title}
        </h4>
        <button
          type="button"
          className="col-2  d-flex justify-content-end btn-remove"
          onClick={() => handleDelete(tool)}>
          x remove
        </button>
      </div>
      <div className="tool-body">
        <div className="col-12">
          <p>{tool.description}</p>
        </div>
        <div className="col-12 d-flex flex-row">
          {tool.tags.map(tag => {
            const random = Math.random()
            return (
              <p key={random} className="pr-2">
                <b>#{tag}</b>
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tool
