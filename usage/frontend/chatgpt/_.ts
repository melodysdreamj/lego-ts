import {requestGpt4oChat} from "../../../blueprint/backend/chatgpt/4o";

async function main() {
    console.log("start");

    let response = await requestGpt4oChat("why sky is blue?");
    console.log(response);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});

export {};
