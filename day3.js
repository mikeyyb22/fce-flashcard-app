const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve("Data loaded!");
        } else {
            reject("Server unavailable")
        }
    }, 2000);
})

const loadData = async () => {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
};

loadData();