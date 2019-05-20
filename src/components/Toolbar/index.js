import React, { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'

import "./styles.css"

function Toolbar({ createTool, handleSearch }) {
  const [query, setQuery] = useState('')
  const [checked, setChecked] = useState(false)
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')

  useEffect(() => {
    let action = {}
    if (query !== '') {
      action = {
        type: "SEARCH",
        query
      }
      handleSearch(action)
    }

    if (checked === true) {
      action = {
        type: 'SEARCH_TAG',
        query
      }
      handleSearch(action)
    }
  }, [query, checked, handleSearch])

  function handleSubmit(e) {
    e.preventDefault()
    const tool = {
      title: name,
      link,
      description,
      tags: tags.split(" ")
    }

    setName('')
    setLink('')
    setDescription('')
    setTags('')

    document.getElementById('modal').click()

    createTool(tool)
  }

  return (
    <div className="row">
      <div className="col-10">
        <div className="row d-flex flex-row align-items-center">
          <div className="col-4">
            <div className="input-group input-color br-5">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent border-0">
                  <IoIosSearch size={22} />
                </span>
              </div>
              <input
                name="searchText"
                type="text"
                className="form-control border-0"
                placeholder="Search"
                aria-label="Search"
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-4 form-check">
            <input
              type="checkbox"
              name="tags"
              id="tags"
              className="form-check-input"
              value={checked}
              onChange={e => setChecked(e.target.checked)}
            />
            <label htmlFor="tags" className="form-check-label">
              search in tags only
            </label>
          </div>
        </div>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <button
          className="btn btn-add d-flex justify-content-center align-items-center"
          data-toggle="modal"
          data-target="#modal"
        >
          <FaPlus className="mr-2" />
          Adicionar
        </button>
      </div>

      {/* Create new Tool */}
      <div
        className="modal fade show"
        id="modal"
        tabIndex="-1"
        role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <FaPlus className="mr-2" />
                Add new tool
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
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
                <div className="row mb-4">
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
                <div className="row mb-4">
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
                <div className="row mb-4">
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
                    Add tool
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
