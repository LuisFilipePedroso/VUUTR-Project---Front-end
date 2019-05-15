import React, { useState, useEffect } from 'react'
import './styles.css'

import api from '../../services/api'

import ToolList from '../../components/ToolList'

function Main() {
    const [tools, setTools] = useState({})
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        fetchInitialData()
    }, [])

    async function fetchInitialData() {
        const result = await api.get('/tools')
        setTools(result.data)
        setIsReady(true)
    }

    if (isReady === true) {
        return (
            <div className="container h-100 d-flex justify-content-center flex-column">
                <h2 className="page-title mb-4">VUUTTR</h2>
                <h3 className="page-subTitle mb-4">Very Useful Tools To Remember</h3>
                <ToolList
                    tools={tools} />
            </div>
        )
    } else {
        return <h3>Loading...</h3>
    }
}

export default Main