'use client'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type EmailPreviewProps = 
  | {
      htmlCode: string
      emails?: never
    }
  | {
      emails: Array<{
        id: string
        html: string
        description: string
      }>
      htmlCode?: never
    }

export const EmailPreview = (props: EmailPreviewProps) => {
  const [viewMode, setViewMode] = useState<'design' | 'code'>('design')
  const [selectedEmail, setSelectedEmail] = useState(0)
  
  if ('htmlCode' in props) {
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
            className="w-full h-[600px] bg-white"
            srcDoc={props.htmlCode}
          />
        ) : (
          <SyntaxHighlighter 
            language="html" 
            style={vscDarkPlus}
            customStyle={{ margin: 0 }}
          >
            {props.htmlCode || ''}
          </SyntaxHighlighter>
        )}
      </div>
    )
  }  

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <div className="flex bg-code-bg p-2 gap-2 flex-wrap">
        {props.emails.map((email, index) => (
          <button
            key={email.id}
            onClick={() => setSelectedEmail(index)}
            className={`px-4 py-2 ${
              selectedEmail === index ? 'bg-email-primary' : ''
            }`}
          >
            Email {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 p-4 text-sm">
        {props.emails[selectedEmail].description}
      </div>

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
          className="w-full h-[600px] bg-white"
          srcDoc={props.emails[selectedEmail].html}
        />
      ) : (
        <SyntaxHighlighter 
          language="html" 
          style={vscDarkPlus}
          customStyle={{ margin: 0 }}
        >
          {props.emails[selectedEmail].html}
        </SyntaxHighlighter>
      )}
    </div>
  )
}