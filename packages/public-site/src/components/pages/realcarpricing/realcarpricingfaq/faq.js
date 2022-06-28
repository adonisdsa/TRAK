import React from 'react';
// import Faq from 'react-faq-component';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const data = {
//     rows: [
//         {
//             title: 'What is Real Car Pricing?',
//             content: `Using our comprehensive data catalog as well as various industry datasets from data partners, government, importers, wholesalers and OEMs, we calculate the price new vehicles are sold for. Currently our data only covers Australian vehicles.`,
//         },
//         {
//             title: 'What does the price include?',
//             content: `The price includes the vehicle, dealer delivery, GST, Luxury Car Tax (LCT), accessories and option packs. The price excludes stamp duty, registration and Compulsory Third Party Insurance (CTP).`,
//         },
//         {
//             title: 'Why would two cars have a different price?',
//             content: `Vehicles can be fitted with various combinations of options, accessories and colours that may add or subtract from the total value. Depending on market conditions, it is also possible that vehicle availability can impact the pricing.`,
//         },
//     ],
// };

// const styles = {
//     // bgColor: 'white',
//     titleTextColor: 'blue',
//     rowTitleColor: 'blue',
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
// };

// const config = {
//     // animate: true,
//     // arrowIcon: "V",
//     // tabFocus: true
// };

export default function RealCarPricingFAQ() {
    return (
        <Container className="FAQ paddingY4 paddingX6" theme="light-grey" autoMinHeight={false}>
            <Section type="full">
                {/* <h2 className="FAQTitle paddingY4">Frequently Asked Questions</h2> */}
                {/* <Faq data={data} styles={styles} config={config} /> */}
                <div className="faqBox">
                    <h3>What is Real Car Pricing?</h3>
                    <p>
                        Using our comprehensive data catalog as well as various industry datasets from data partners, government, importers, wholesalers and OEMs, we calculate the price new vehicles
                        are sold for. Currently our data only covers Australian vehicles.
                    </p>
                </div>
                <div className="faqBox">
                    <h3>What does the price include?</h3>
                    <p>
                        The price includes the vehicle, dealer delivery, GST, Luxury Car Tax (LCT), accessories and option packs. The price excludes stamp duty, registration and Compulsory Third Party
                        Insurance (CTP).
                    </p>
                </div>
                <div className="faqBox">
                    <h3>Why would two cars have a different price?</h3>
                    <p>
                        Vehicles can be fitted with various combinations of options, accessories and colours that may add or subtract from the total value. Depending on market conditions, it is also
                        possible that vehicle availability can impact the pricing.
                    </p>
                </div>
                <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" className="RealCarPricingFeaturesContact secondaryCTA">
                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <p className="realCarPricingDisclaimer">
                    Please refer to the following <a href="https://blueflag.com.au/blueflag-termsofuse/">terms and conditions</a> that govern your use of Real Car Pricing
                </p>
            </Section>
        </Container>
    );
}
