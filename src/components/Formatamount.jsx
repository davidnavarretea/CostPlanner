/* Format Money */
const Formatamount = c => {
    return c.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export default Formatamount