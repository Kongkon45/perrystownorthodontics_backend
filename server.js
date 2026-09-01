import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from './src/app.js'
import { serverPort } from './src/config/config.js'
import { connectDb } from './src/config/db.js'

connectDb();

app.listen(serverPort,()=>console.log(`http//localhost:${serverPort}`))
