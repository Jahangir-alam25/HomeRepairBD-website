export const servicesCreatedByPromise = (email, accessToken) => {
    return fetch(`https://a11-service-web-application-server.vercel.app/services/bookings?email=${email}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}