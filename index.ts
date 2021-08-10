import server from "./src/server"

(async () => {
    const port = 3000;
    server.listen(port, () => {
        console.log(`server is listening on ${port}`);
    });
})()