export const bookingsCreatedByPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/bookings?email=${email}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}