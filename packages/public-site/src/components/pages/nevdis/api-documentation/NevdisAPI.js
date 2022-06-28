import './api-documentation.scss';
import React from 'react';
import { Link } from 'gatsby';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/Button';
import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import { Pre } from 'components/Code';

const toSnippet = (code, language) => (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
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

export default function NevdisAPIDocumentation() {
    return (
        <div className="NevdisApiDocumentationLegacy">
            <Container className="paddingY5">
                <Section>
                    <h1>API Quick Start Guide</h1>

                    <p className="NevdisApiDocumentationLegacy-note">
                        <strong>Note: </strong> The Blue Flag API can only be accessed using{' '}
                        <a rel="nofollow" href="https://graphql.org/">
                            GraphQL
                        </a>
                        . If you’re not familiar with GraphQL, we encourage you to visit{' '}
                        <a rel="nofollow" href="https://graphql.org/learn/">
                            graphql.org/learn
                        </a>{' '}
                        to learn more before proceeding further.
                    </p>

                    <p>
                        With the Blue Flag <Link to="/nevdis/">NEVDIS</Link> API, you can search our Australian vehicles database and check their details. This guide will help you get started making
                        basic requests.
                    </p>
                </Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h2>NEVDIS search for Registration Status</h2>
                    <p>In this example, we will walk through making a request to find the VIN and some basic vehicle attributes of the car.</p>
                </Section>
            </Container>

            <Container className="paddingY3" autoMinHeight={false}>
                <Section>
                    <h3>Authentication</h3>
                    <p>
                        To make requests with out API, you will need to get an API Token from us. If you do not already have an api token, you can <Link to="/contact-us/">request an api token</Link>.
                    </p>
                </Section>
                <Section>
                    <div className="buttonWrapper">
                        <Button type="fill" color="primary" to="/contact-us/">
                            Get API token <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </Button>
                    </div>
                </Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h3>Building your query</h3>
                    <p>
                        Our GraphQL api allows you to pick and choose exactly the fields you would like. In this example, we are searching for a vehicle by using the number plate. We will use the{' '}
                        <span className="tag">nevdisPlateSearch_v2</span> resolver to do this. This resolver requires two arguments, <span className="tag">plate</span> and{' '}
                        <span className="tag">state</span>.
                    </p>

                    <h4>Test Requests (free)</h4>
                    <p>
                        Your account will be charged for each request you make according to the pricing rate card we have provided you. Any requests for plates or VIN's containing 17 X's
                        (XXXXXXXXXXXXXXXXX) are free of charge and will always return sample/dummy data.
                    </p>
                </Section>
                <Section>
                    {toSnippet(gqlEx1, 'jsx')}
                    <p className="caption">
                        <Link to="/nevdis/">View all NEVDIS fields</Link>
                    </p>
                </Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h3>Making your first request</h3>

                    <p>
                        To make a request, you must send a POST request to our API endpoint. The body of the request must be a <em>valid</em> JSON object containing <span className="tag">query</span>{' '}
                        and <span className="tag">variables</span> (optional).
                    </p>
                </Section>
                <Section>
                    {toSnippet(jsonBodySample, 'json')}

                    <p className="NevdisApiDocumentationLegacy-note half">
                        <strong>Note:</strong> If you keep getting an error saying "Invalid JSON", it is most likely because your query string has not been escaped correctly. Most programming
                        languages do have a good way to deal with this automatically for you. You can also use an online JSON validator to verify if your object string is constructed correctly.
                    </p>
                </Section>
            </Container>

            <Container className="paddingY3" autoMinHeight={false}>
                <Section>
                    <p>
                        When making a request, you must include the <span className="tag">Authorization</span> header with the value of <span className="tag">JWT your-api-token</span>. Please don't
                        forget to include JWT at the start of the <span className="tag">Authorization</span> header.
                    </p>

                    <div className="paddingY3">
                        <Button type="quiet" color="primary" to="/contact-us/">
                            Get Your API token <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </Button>
                    </div>
                </Section>
                <Section>{toSnippet(curlBasicRequest, 'bash')}</Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h3>Results</h3>

                    <p>
                        The response is in the standard GraphQL format. At the top level, there is a <span className="tag">data</span> property which will either have your results or there will be an{' '}
                        <span className="tag">errors</span> property which will contain a list of error messages for you to review.
                    </p>

                    <p>
                        For successful queries, you will see a property with the <em>resolver</em> name nested inside <span className="tag">data</span>. In the case of this query, it is{' '}
                        <span className="tag">nevdisPlateSearch_v2</span>. As you can see from the response, the shape of the data matches the shape of the query submitted.
                    </p>

                    <p>
                        Please note that the query response will always be an array of objects. In some states, it is possible for two vehicle to have the exact same number plate. In this case, we
                        will return both vehicles to you.
                    </p>
                </Section>
                <Section>{toSnippet(results, 'json')}</Section>
            </Container>

            <Container autoMinHeight={false}>
                <Section>
                    <h2>Sample Queries</h2>
                </Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section className="noMargin">
                    <h3 className="codeHeader">Factory VIN Check</h3>
                    {toSnippet(qFactory, 'jsx')}
                </Section>
                <Section className="noMargin first">{toSnippet(qFactoryResults, 'json')}</Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section className="noMargin">
                    <h3 className="codeHeader">Written-off Vehicle Check (WOVR)</h3>
                    {toSnippet(qWOV, 'jsx')}
                </Section>
                <Section className="noMargin second">{toSnippet(qWOVResults, 'json')}</Section>
            </Container>

            <Container className="paddingY5" autoMinHeight={false}>
                <Section className="noMargin">
                    <h3 className="codeHeader">Stolen Vehicle Check</h3>
                    {toSnippet(qStolen, 'jsx')}
                </Section>
                <Section className="noMargin last">{toSnippet(qStolenResults, 'json')}</Section>
            </Container>
        </div>
    );
}

const gqlEx1 = `
query {
  nevdisPlateSearch_v2(plate: "XXXXXXXXXXXXXXXXX", state: VIC) {
    vin
    plate {
      number
      state
    }
    make
    model
    blueflag_make
    blueflag_model
    engine_number
    vehicle_type
    body_type
    colour
    compliance_plate
    year_of_manufacture
    registration {
      status
      expiry_date
    }
  }
}
`;

const jsonBodySample = `
{
  "query": "query {nevdisPlateSearch_v2(plate: \\"XXXXXXXXXXXXXXXXX\\", state: VIC) {\\n        vin\\n        plate {\\n          number\\n          state\\n        }\\n        make\\n        model\\n        blueflag_make\\n        blueflag_model\\n        engine_number\\n        vehicle_type\\n        body_type\\n        colour\\n        compliance_plate\\n        year_of_manufacture\\n        registration {\\n          status\\n          expiry_date\\n        }\\n      }\\n    }",
  "variables": {}
}
`;

const curlBasicRequest = `
curl -X POST \\
"https://ubuxgyols2.execute-api.ap-southeast-2.amazonaws.com/prod/" \\
-H "Authorization: JWT <your-api-token>" \\
-d '
{
  "query": "query {nevdisPlateSearch_v2(plate: \\"XXXXXXXXXXXXXXXXX\\", state: VIC) {\\n    vin\\n    plate {\\n      number\\n      state\\n    }\\n    make\\n    model\\n    blueflag_make\\n    blueflag_model\\n    engine_number\\n    vehicle_type\\n    body_type\\n    colour\\n    compliance_plate\\n    year_of_manufacture\\n    registration {\\n      status\\n      expiry_date\\n    }\\n    }\\n  }",
  "variables": {}
}
'
`;

const results = `
{
  "data": {
    "nevdisPlateSearch_v2": [
      {
        "vin": "XXXXXXXXXXXXXXXXX",
        "plate": {
          "number": "XXXXXXXXXXXXXXXXX",
          "state": "VIC"
        },
        "make": "HOLDEN",
        "model": "COMMOD",
        "blueflag_make": "Holden",
        "blueflag_model": "Commodore",
        "engine_number": "LWR121810307",
        "vehicle_type": "CAR / SMALL PASSENGER VEHICLE",
        "body_type": "CAR/SEDAN",
        "colour": "BLUE",
        "compliance_plate": "2017-06",
        "year_of_manufacture": 2017,
        "registration": {
          "status": "REGISTERED",
          "expiry_date": "2019-11-10"
        }
      }
    ]
  }
}
`;

const qStolen = `
query {
  nevdisPlateSearch_v2(plate: "XXXXXXXXXXXXXXXXX", state: VIC) {
    vin
    plate {
      number
      state
    }
    stolen {
      type
      jurisdiction
      reported_date
      summary
    }
  }
}
`;

const qStolenResults = `
{
  "data": {
    "nevdisPlateSearch_v2": [
      {
        "vin": "XXXXXXXXXXXXXXXXX",
        "plate": {
          "number": "XXXXXXXXXXXXXXXXX",
          "state": "VIC"
        },
        "stolen": [
          {
            "type": "VIN",
            "jurisdiction": "POL",
            "reported_date": "2018-02-13",
            "summary": "POL JUR-P  REF-SIT_TEST_18"
          },
          {
            "type": "Plate",
            "jurisdiction": "POL",
            "reported_date": "2018-02-13",
            "summary": "POL JUR-P  REF-SIT_TEST_18"
          },
          {
            "type": "Engine",
            "jurisdiction": "POL",
            "reported_date": "2018-02-13",
            "summary": "POL JUR-P  REF-SIT_TEST_18"
          }
        ]
      }
    ]
  }
}
`;

const qWOV = `
query {
  nevdisPlateSearch_v2(plate: "XXXXXXXXXXXXXXXXX", state: VIC) {
    vin
    plate {
      number
      state
    }
    wov {
      type_code
      jurisdiction
      incident_recorded_date
      incident_code
      damage_codes
    }
  }
}
`;

const qWOVResults = `
{
  "data": {
    "nevdisPlateSearch_v2": [
      {
        "vin": "XXXXXXXXXXXXXXXXX",
        "plate": {
          "number": "XXXXXXXXXXXXXXXXX",
          "state": "VIC"
        },
        "wov": {
          "type_code": "Collision",
          "jurisdiction": "NSW",
          "incident_recorded_date": "2017-12-11",
          "incident_code": "Statutory Write-off",
          "damage_codes": "I01AI02AI09FI17DI21DI38EI41E"
        }
      }
    ]
  }
}
`;

const qFactory = `
query {
  nevdisPlateSearch_v2(plate: "XXXXXXXXXXXXXXXXX", state: VIC) {
    vin
    plate {
      number
      state
    }
    factory {
      make
      model
      series
      variant
      buildYear
      MY
      body
      fuel
      drive
      cylinders
      litres
      transmission
      seats
      doors
    }
  }
}  
`;

const qFactoryResults = `
{
  "data": {
    "nevdisPlateSearch_v2": [
      {
        "vin": "XXXXXXXXXXXXXXXXX",
        "plate": {
          "number": "XXXXXXXXXXXXXXXXX",
          "state": "VIC"
        },
        "factory": {
          "make": "Holden",
          "model": "Commodore",
          "series": "VF II",
          "variant": "SV6",
          "buildYear": "2017",
          "MY": "2017",
          "body": "Sedan",
          "fuel": "Petrol - Unleaded ULP",
          "drive": "Rear Wheel Drive",
          "cylinders": "6",
          "litres": "3.6",
          "transmission": "Sports Automatic",
          "seats": null,
          "doors": null
        }
      }
    ]
  }
}
`;
