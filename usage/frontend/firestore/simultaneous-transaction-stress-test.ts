import {Sub} from "../../backend/data_class_example/sub";
import {TestEnumTest} from "../../backend/enum_example/_new";
import {CheckExample, CheckExampleFirestore} from "../../backend/firestore_example/check";

async function main() {
    console.log("start");

    const exampleId = 'example1';

    // 100개의 plus1I000Transaction을 동시에 실행
    const promises = [];
    for (let i = 0; i < 300; i++) {
        promises.push(
            CheckExampleFirestore.plus1I000Transaction(exampleId)
                .then(() => ({ success: true, id: exampleId, index: i }))
                .catch(error => ({ success: false, id: exampleId, index: i, error }))
        );
    }

    const results = await Promise.all(promises);

    // 실패한 트랜잭션을 확인
    results.forEach(result => {
        if (!result.success) {
            console.error(`Transaction ${result.index} for ${result.id} failed`);
        } else {
            console.log(`Transaction ${result.index} for ${result.id} succeeded.`);
        }
    });

    // 모든 트랜잭션이 완료된 후에 데이터 가져오기
    let check2 = await CheckExampleFirestore.get(exampleId);

    console.log('i000: ', check2?.i000);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});

export {};
