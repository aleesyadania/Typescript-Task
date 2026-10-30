let TotalCalls: number = 0;

function LogCall(): void {
    TotalCalls = TotalCalls + 1; 

    const currentCallNumber = TotalCalls;

    console.log(`Calling LogCall() -> This is call number ${currentCallNumber} (local)`);
}

console.log("===== SCOPE DEMONSTRATION =====");
console.log("");

LogCall();
LogCall();
LogCall();

console.log("");
console.log(`Total Calls (global) : ${TotalCalls}`);