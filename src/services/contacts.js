import request from "utils/request";

export const getContacts = () => {
    const options = {
        url: "users",
    };
    return request.get(options.url);
};

export const getContactById = ({ queryKey }) => {
    const id = queryKey[1];
    const options = {
        url: `users/${id}`,
    };
    return request.get(options.url);
};

export const addContact = (data) => {
    const options = {
        url: "users",
        body: data
    };
    return request.post(options.url, options.body);
};

export const updateContact = (id, data) => {
    const options = {
        url: `users/${id}`,
        body: data
    };
    return request.put(options.url, options.body);
};

export const deleteContact = (id) => {
    const options = {
        url: `users/${id}`
    };
    return request.delete(options.url);
};