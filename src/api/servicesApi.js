export const servicesCreatedByPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/services/bookings?email=${email}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}