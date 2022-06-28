import React from 'react';
import { Pre } from 'components/Code';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const exampleCode = `query {
    nevdisVINSearch_v2(vin: "XXXXXXXXXXXXXXXXX") {
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

  **NOTE** The above query string must be included in the body's json.
eg. "{"query":"query {\n  nevdisVINSearch_v2(vin: "XXXXXXXXXXXXXXXXX") {\n    vin\n    plate {\n      number\n      state\n    }\n    make\n    model\n  }\n}"}"


Response:
{
  "data": {
    "nevdisVINSearch_v2": {
      "vin": "XXXXXXXXXXXXXXXXX",
      "plate": {
        "number": "ABC123",
        "state": "VIC"
      },
      "make": "HOLDEN",
      "model": "COMMOD"
    }
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
