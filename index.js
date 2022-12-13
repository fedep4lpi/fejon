/**
 * @param {string} url
 * @return {Promise} object
*/
const get = async (url) => {

    let res = await fetch(url)
    res = await res.json()

    return res
}

/**
 * @param {string} url
 * @param {object} body
 * @return {Promise} object
*/
const post = async (url, body) => {

    let res= await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
    res = await res.json()

    return res
}

/**
 * @param {string} url
 * @return {Promise} object
*/
const httpDelete = async (url) => {

    let res = await fetch(url, { method: 'DELETE' })
    res = await res.json()

    return res
}

/**
 * @param {string} url
 * @param {object} body
 * @return {Promise} object
*/
const put = async (url, body) => {

    let res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    res = await res.json()

    return res
}

/**
 * @type {object}
 */
const fejon = {
    get: get,
    post: post,
    delete: httpDelete,
    put: put
}

/** @module fejon */
module.exports = fejon