import React from 'react'
import QuillEditor from './components/QuillEditor'
import { commonStyles } from '@/app/common/resource'

export default function page() {
    return (
        <section>
            <div className={commonStyles.divider} />
            <div className={commonStyles.title}>Editor</div>
            <QuillEditor />
            <div className={commonStyles.divider} />
            <div className={commonStyles.title}>Viewer</div>
            {/* <MdViewer /> */}
        </section>
    )
}
