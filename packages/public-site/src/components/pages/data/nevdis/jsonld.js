const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is NEVDIS?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "NEVDIS is the database that contains information on all vehicle registrations in Australia's. All data is from the eight state and territory road authorities.",
            },
        },
        {
            '@type': 'Question',
            name: 'Where does the data come from?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'All data is from the eight state and territory road authorities. Each road authority has their own independent systems and their own rules for collecting and managing data.',
            },
        },
    ],
};

export default jsonld;
