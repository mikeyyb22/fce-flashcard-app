const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded!");
    }, 2000);
});

// async/await
// only use await inside async function

// ex:
// const loadData = async () => {
//     const result = await promise;
//     console.log(result);
// }

// try/catch
// if something can fail, we wrap it
const loadData = async () => {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Something went wrong: ", error);
    }
};
