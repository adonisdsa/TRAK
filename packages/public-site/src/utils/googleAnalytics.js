const GATSBY_ENV = process.env.GATSBY_ENV || '';

export const trackEvent = props => {
    if (GATSBY_ENV !== 'production') {
        return;
    }

    // Implement when required...
};
