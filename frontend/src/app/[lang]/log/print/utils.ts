export const insertTextAtPosition = (text: string, insertText: string, startPos: number, endPos: number): string => {
    return text.substring(0, startPos) + insertText + text.substring(endPos)
}

export const removeTextAtPosition = (text: string, startPos: number, endPos: number): string => {
    return text.substring(0, startPos) + text.substring(endPos)
}

export const handleTabPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
        const { currentTarget } = event
        event.preventDefault()
        const start = currentTarget.selectionStart
        const end = currentTarget.selectionEnd
        const spaces = '    '

        const isAddingSpaces = !event.shiftKey
        const canRemoveSpaces = start === end && currentTarget.value.substring(start - 4, start) === spaces

        let newCursorPos = start
        if (isAddingSpaces) {
            currentTarget.value = insertTextAtPosition(currentTarget.value, spaces, start, end)
            newCursorPos += spaces.length
        } else if (canRemoveSpaces) {
            currentTarget.value = removeTextAtPosition(currentTarget.value, start - spaces.length, end)
            newCursorPos -= spaces.length
        }

        currentTarget.selectionStart = currentTarget.selectionEnd = newCursorPos
    }
}
