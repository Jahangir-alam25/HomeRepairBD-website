export const bookingsCreatedByPromise = (email, accessToken) => {
    return fetch(`https://a11-service-web-application-server.vercel.app/bookings?email=${email}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}