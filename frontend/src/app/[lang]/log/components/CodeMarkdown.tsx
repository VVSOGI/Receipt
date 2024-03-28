import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
    description: string
}

export default function CodeMarkdown({ description }: Props) {
    return (
        <Markdown
            className="prose min-w-full dark:text-white whitespace-pre-wrap break-words"
            components={{
                p: ({ children }) => <p className="mb-0 mt-0">{children}</p>,
                code(props) {
                    const { children, className, node, style, ref, ...rest } = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            customStyle={{ background: 'transparent' }}
                            style={{ ...vscDarkPlus }}
                            ref={ref as any}
                            {...rest}
                        />
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
            remarkPlugins={[remarkGfm]}
        >
            {description}
        </Markdown>
    )
}
