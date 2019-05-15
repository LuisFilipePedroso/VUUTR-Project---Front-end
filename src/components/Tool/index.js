import React from 'react'
import './styles.css'

function Tool({ tool }) {
    return (
        <div className="tool-wrapper">
            <div className="tool-header d-flex">
                <h4 className="col-10 d-flex justify-content-start tool-title">{tool.title}</h4>
                <button type="button" className="col-2  d-flex justify-content-end btn-remove">
                    x remove
                </button>
            </div>
            <div className="tool-body">
                <div className="col-12">
                    <p>{tool.description}</p>
                </div>
                <div className="col-12 d-flex flex-row">
                    {tool.tags.map(tag => (
                        <p key={tag} className="pr-2">
                            <b>#{tag}</b>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tool