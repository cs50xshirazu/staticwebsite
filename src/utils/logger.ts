import { AxiosError } from "axios";
import chalk from "chalk";

export const axiosErrorLogger = (error: AxiosError, title ?: string) => {
    const message = error.message;
    const data = error.response?.data;
    const date = new Date();
    const cause = error.cause;
    const code = error.code;

    const titleString = `[${title ?? "ApiCallError"}] **********************************`;
    const footer = titleString.split("").map(_ => "*").join("");

    console.log(
        `
        ${chalk.whiteBright.bgRedBright(titleString)}
        
        ${chalk.yellowBright("👀 status code")} : ${code}
        ${chalk.yellowBright("🔴 error message")} : ${message}
        ${chalk.yellowBright("🧐 error cause")} : ${cause}
        ${chalk.yellowBright("📅 date")} : ${chalk.whiteBright.bgBlueBright(` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `)}
        
        ${chalk.yellowBright("response data")} : 
        ${chalk.whiteBright(JSON.stringify(data, undefined,"\t"))}
        
        ${chalk.whiteBright.bgRedBright(footer)}
        `
    );
};

const logger = (message: string | Record<any, any> | undefined | null, title?: string) => {

    const date = new Date();

    const titleString = `[${title ?? "Normal Log"}] **********************************`;
    const footer = titleString.split("").map(_ => "*").join("");

    console.log(
        `
        ${chalk.whiteBright.bgBlackBright(titleString)}
        
        ${chalk.yellowBright("📅 date")} : ${chalk.whiteBright.bgBlueBright(` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `)}
        
        ${chalk.yellowBright("log message")} :
        ${chalk.whiteBright(JSON.stringify(message, undefined,"\t"))}
        
        ${chalk.whiteBright.bgBlackBright(footer)}
        `
    );
};

export default logger;
