import dotenv from 'dotenv'
import { dirname, resolve } from 'path'

export default function configure() {
    dotenv.config();
    if (!process.env.APP_NAME) {
        console.error(`Erorr Cok`);
        process.exit(1);
    }

    process.env.BASE_PATH = dirname(resolve('index.js'))
}