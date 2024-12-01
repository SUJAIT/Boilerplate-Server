
import app from "./app";



const port = 5000

async function server() {

    try {
        app.listen(port, () => {
            console.log(`server is Running ${port}`)
        })

    } catch (error) {
        console.error(error)
    }


}

server()