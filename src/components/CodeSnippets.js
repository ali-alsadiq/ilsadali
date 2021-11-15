import { Prism as Code } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CodeSnippets({ data }) {
    return (
        <section className='code-snippet'>
            {data.map((code, index) => {
                return (
                    <div key={index}>
                        <p>{code.blurb}</p>
                        <Code showLineNumbers language={code.language} style={vscDarkPlus}>
                            {code.code}
                        </Code>
                    </div>);
            })}
        </section>
    )
}

export default CodeSnippets
