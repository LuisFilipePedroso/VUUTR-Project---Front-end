import React from 'react'

import Tool from '../Tool'

function ToolList({ tools, deleteTool }) {
    return (
        <div>
            {tools.map(tool => (
                <Tool
                    key={tool.id}
                    tool={tool}
                    deleteTool={deleteTool} />
            ))}
        </div>
    )
}

export default ToolList

