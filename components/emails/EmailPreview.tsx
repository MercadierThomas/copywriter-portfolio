'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const EmailPreview = ({ htmlCode, textVersion }) => {
  const [viewMode, setViewMode] = useState('design')

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
      
      {viewMode === 'design' ? (
        <iframe 
          className="w-full h-96 bg-white"
          srcDoc={htmlCode}
        />
      ) : (
        <SyntaxHighlighter language="html">
          {htmlCode}
        </SyntaxHighlighter>
      )}
    </div>
  )
}