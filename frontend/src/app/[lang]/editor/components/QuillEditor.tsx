'use client'

import 'react-quill/dist/quill.snow.css'
import { useMemo, useState } from 'react'
import React from 'react'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function QuillEditor() {
    const [value, setValue] = useState<string | undefined>('')

    const imageHandler = () => {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()

        input.addEventListener('change', async () => {
            if (input.files) {
                const file = input.files[0]

                try {
                    const formData = new FormData()
                    formData.append('file', file)

                    fetch('/api/test', {
                        method: 'POST',
                        body: formData
                    })

                    // const stats = fs.statSync(file)
                    // editor.insertEmbed(range.index, 'image', '/favicon.ico')
                    // editor.setSelection(range.index + 1)
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: '1' }, { header: '2' }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
                    ['image']
                ],
                handlers: { image: imageHandler }
            },
            clipboard: {
                matchVisual: false
            }
        }),
        []
    )

    const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'align', 'image']

    return (
        <ReactQuill
            id="quill"
            modules={modules}
            formats={formats}
            value={value}
            onChange={(value) => setValue(value)}
            placeholder={''}
            theme="snow"
        />
    )
}
