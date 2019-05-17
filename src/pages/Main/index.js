import React, { useState, useEffect } from "react"
import "./styles.css"

import api from "../../services/api"

import ToolList from "../../components/ToolList"
import Toolbar from "../../components/Toolbar"

function Main() {
  const [tools, setTools] = useState({})
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  //Method responsible to fetch the data from api
  async function fetchData(action = {}) {
    let result = {}
    switch (action.type) {
      case "SEARCH":
        result = await api.get(`/tools?q=${action.query}`)
        break
      case "SEARCH_TAG":
        result = await api.get(`/tools?tags_like=${action.query}`)
        break
      default:
        result = await api.get("/tools")
    }

    setTools(result.data.reverse())
    setIsReady(true)
  }

  //Method responsible to delete a tool
  async function deleteTool(id) {
    await api.delete(`/tools/${id}`)
    fetchData()
  }

  //Method responsible to create a tool
  async function createTool({ title, link, description, tags }) {
    await api.post("/tools", {
      title,
      link,
      description,
      tags
    })
    fetchData()
  }

  if (isReady === true) {
    return (
      <div className="container h-100 d-flex justify-content-center flex-column main-wrapper">
        <h2 className="page-title mb-4">VUUTTR</h2>
        <h3 className="page-subtitle mb-4">Very Useful Tools To Remember</h3>
        <Toolbar createTool={createTool} handleSearch={fetchData} />
        <ToolList tools={tools} deleteTool={deleteTool} />
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default Main
