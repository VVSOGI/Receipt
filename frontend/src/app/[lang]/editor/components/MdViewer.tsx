'use client'

import MDEditor from '@uiw/react-md-editor'
import React, { useEffect, useState } from 'react'

export default function MdViewer() {
    const [mdSource, setMdSource] = useState('')
    useEffect(() => {
        fetch('http://localhost:3000/api/editor?editorId=62541f98-e8f7-46de-9e76-176d07b66fa8', {
            method: 'GET'
        }).then(async (res) => {
            const data = await res.json()
            const source = JSON.parse(data[0].contents)

            setMdSource(source.contents)
        })
    }, [])

    return <MDEditor.Markdown style={{ padding: 10 }} source={mdSource} />
}
