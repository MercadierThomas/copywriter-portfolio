'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type EmailPreviewProps = {
  htmlCode: string
}

export const EmailPreview = ({ htmlCode } : EmailPreviewProps) => {
  const [viewMode, setViewMode] = useState<'design' | 'code'>('design')

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex bg-code-bg p-2 gap-2">
        <button 
          onClick={() => setViewMode('design')}
          className={`px-4 py-2 ${viewMode === 'design' ? 'bg-email-primary' : ''}`}
        >
          Design
        </button>
        <button
          onClick={() => setViewMode('code')}
          className={`px-4 py-2 ${viewMode === 'code' ? 'bg-email-primary' : ''}`}
        >
          Code
        </button>
      </div>
      
      {viewMode === 'code' && (
        <SyntaxHighlighter 
          language="html" 
          style={vscDarkPlus}
          customStyle={{ margin: 0 }}
        >
          {htmlCode}
        </SyntaxHighlighter>
      )}
    </div>
  )
}