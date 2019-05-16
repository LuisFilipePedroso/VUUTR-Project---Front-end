import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa"

function NewTool() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const tool = {
            title: name,
            link,
            description,
            tags: tags.split(" ")
        }

        setName("")
        setLink("")
        setDescription("")
        setTags("")

        //createTool(tool)
    }
    return (
        <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            <FaPlus className="mr-2" />
                            Add new tool
              </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="name">Tool name</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control w-100"
                                        value={name}
                                        onChange={({ target }) => setName(target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="link">Tool link</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        name="link"
                                        className="form-control w-100"
                                        value={link}
                                        onChange={({ target }) => setLink(target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="description">Tool description</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control w-100"
                                        value={description}
                                        onChange={({ target }) => setDescription(target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="tags">Tags</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        name="tags"
                                        className="form-control w-100"
                                        value={tags}
                                        onChange={({ target }) => setTags(target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-3 d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-light-grey mr-2"
                                    data-dismiss="modal"
                                >
                                    Close
                  </button>
                                <button
                                    type="submit"
                                    className="btn btn-success btn-dark-green"
                                >
                                    Save changes
                  </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default NewTool