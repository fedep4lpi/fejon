/**
 * @param {string} url
 * @return {Promise} object
*/
export function get(url: string): Promise<any>;
/**
 * @param {string} url
 * @param {object} body
 * @return {Promise} object
*/
export function post(url: string, body: object): Promise<any>;
/**
 * @param {string} url
 * @return {Promise} object
*/
declare function httpDelete(url: string): Promise<any>;
/**
 * @param {string} url
 * @param {object} body
 * @return {Promise} object
*/
export function put(url: string, body: object): Promise<any>;
export { httpDelete as delete };
