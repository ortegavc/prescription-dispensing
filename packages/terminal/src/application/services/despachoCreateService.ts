export const createDespachoService = (data: any, mutator: any) => {
    return new Promise((resolve, reject) => {
        mutator.create({
            variables: {
                dataInput: data,
            },
            onCompleted: (response: any) => {
                resolve(response); // Resolve the promise with the response
            },
            onError: (error: any) => {
                reject(error); // Reject the promise with the error
            },
        });
    });
}