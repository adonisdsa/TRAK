import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import NevdisCode1 from './NevdisCode1';
import NevdisCode2 from './NevdisCode2';

export default function NevdisAPI() {
    return (
        <Container className="paddingY5">
            <Section>
                <div className="heroWrapper-api">
                    <h1 className="hero-header-api">
                        <strong>Blue Flag NEVDIS API Quick Start Guide</strong>
                    </h1>
                </div>
                <br />
                <br />
                <p>The Blue Flag NEVDIS API service is designed to provide an easy method of obtaining the NEVDIS data.</p>
                <br />
                <p>
                    The Blue Flag NEVDIS service is a GraphQL API, please see <a href="http://graphql.org/">http://graphql.org/</a> for general info.
                </p>
                <br />
                <p>
                    For a list of information that can be requested, please read the information on Introspection{' '}
                    <a href="http://graphql.org/learn/introspection/">http://graphql.org/learn/introspection/</a>
                </p>
                <br />
                <p>You can make requests over HTTPS using the following details</p>

                <br />
                <p>
                    <strong>Method:</strong> POST
                </p>
                <p>
                    <strong>URL:</strong> https://ubuxgyols2.execute-api.ap-southeast-2.amazonaws.com/prod/
                </p>
                <p>
                    <strong>Header:</strong>
                </p>
                <p>
                    <strong>Authorisation:</strong> JWT [THISISTHEAUTHORISATIONKEYWEPROVIDE]
                </p>
                <p>
                    <strong>Body:</strong> query":"YOUR QUERY GOES HERE""
                </p>
                <br />
                <br />

                <h3 className="header-api">Sample Query to find vin detail, make & model for a plate and state:</h3>
                <br />
                <NevdisCode1 />
                <br />
                <h3 className="header-api">Sample Query to find plate detail, make & model for a vin:</h3>
                <br />
                <NevdisCode2 />
                <br />
                <p>To see all the query types and available resolvers, use the GraphQl introspection, for information on the introspection, please refer to this link:</p>
                <br />
                <p>
                    <a href="http://graphql.org/learn/introspection/">http://graphql.org/learn/introspection/</a>
                </p>
                <br />
                <p>During your testing and development, if you query using 17 X’s, you will receive a sample response which is free of charge.</p>
            </Section>
        </Container>
    );
}
