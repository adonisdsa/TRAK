import React from 'react';
import { Pre } from 'components/Code';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const exampleCode = `{
    nevdisPlateSearch_v2(plate: "XXXXXXXXXXXXXXXXX", state:NSW) {
      vin
      plate {
        number
        state
      }
      make
      model
      engine_number
      vehicle_type
      body_type
      colour
    }
  }
`.trim();

const NevdisCode = () => (
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

export default NevdisCode;
