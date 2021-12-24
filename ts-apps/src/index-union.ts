//unions
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
printId(100)
printId("100")
// printId(true)

function printIdV1(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }

}
printIdV1(100)
printIdV1("100")