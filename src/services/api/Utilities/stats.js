// Task API
import {ApiCore} from "./core";
const url = 'http://localhost:8080';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
    getAll: true,
    getSingle: true,
    post: true,
    put: false,
    patch: true,
    delete: false,
    url: url,
});

apiTasks.massUpdate = () => {
    // API logic
}

export {apiTasks};
