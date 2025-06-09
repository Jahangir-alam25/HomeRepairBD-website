export const servicesCreatedByPromise = (email) => {
    return fetch(`http://localhost:3000/services/bookings?email=${email}`)
        .then(res => res.json())
}