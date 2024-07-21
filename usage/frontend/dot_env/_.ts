import {GetOpenAiApiKey} from "../../backend/dot_env_example/open_ai_api_key";

async function main() {
    console.log("start");

    const key = GetOpenAiApiKey();
    console.log('Key: ', key);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});

export {};
