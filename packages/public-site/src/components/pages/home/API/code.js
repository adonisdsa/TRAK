import React from 'react';
import { Pre } from './Styles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const exampleCode = `
const response = await fetch('https://sandbox.blueflag.com.au/vin_decoder_lite?plate=TEST00&state=VIC', {
    headers: {
        'Authorization': 'YOUR_SECRET_API_KEY'
    }
});

const vehicle = await response.json();
`.trim();

const Code = () => (
    <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </Pre>
        )}
    </Highlight>
);

export default Code;
