import React from 'react'

import Tool from '../Tool'

function ToolList({ tools }) {
    return (
        <div>
            {tools.map(tool => (
                <Tool
                    key={tool.id}
                    tool={tool} />
            ))}
        </div>
    )
}

export default ToolList

