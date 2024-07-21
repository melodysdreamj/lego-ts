import {Sub} from "../../backend/data_class_example/sub";
import {TestEnumTest} from "../../backend/enum_example/_new";
import {CheckExample, CheckExampleFirestore} from "../../backend/firestore_example/check";

async function main() {
    console.log("start");

    let check = new CheckExample();
    check.docId = "example1";
    check.s000 = "banana";
    check.i000 = 123;
    check.b000 = true;
    check.r000 = 3.14;
    check.l000 = ["apple", "banana", "cherry"];
    let sub = new Sub();
    sub.s000 = "apple";
    check.c000 = sub;
    check.m000 = {
        "apple": "red",
        "banana": "yellow",
        "cherry": "red0",
        "age": 20,
        "sex": false,
        "height": 170.5,
        "weight": 60.5
    };

    let sub1 = new Sub();
    sub1.s000 = "banana";
    sub1.l000 = ["apple", "banana", "cherry"];
    let sub2 = new Sub();
    sub2.s000 = "cherry";
    let sub3 = new Sub();
    sub3.s000 = "apple";

    check.j000 = [sub1, sub2, sub3];
    check.e000 = TestEnumTest.p001;

    console.log("직전: ", check.toMap());

    await CheckExampleFirestore.upsert(check);

    let check2 = await CheckExampleFirestore.get('example1');

    console.log("이후: ", check2?.toMap());

    console.log('c000: ', check2?.c000.toMap());
    console.log('j000: ', check2?.j000[0].toMap());
    console.log('m000: ', check2?.m000);
    console.log('m000: ', check2?.m000["weight"]);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});

export {};
