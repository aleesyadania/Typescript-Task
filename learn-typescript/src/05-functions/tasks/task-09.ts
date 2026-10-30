/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

type Patient ={
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: Patient[]): number {
    return patients.length;
}

function countAdmittedPatients(patients: Patient[]): number {
    let count = 0;
    for (const x of patients) {
        if (x.admitted) count++;
    }
    return count;
}

function countDischargedPatients(patients: Patient[]): number {
    let count = 0;
    for (const x of patients) {
        if (!x.admitted) count++;
    }
    return count;
}

function countPatientsByDepartment(patients: Patient[], department: string): number {
    let count = 0;
    for (const x of patients) {
        if (x.department === department) count++;
    }
    return count;
}

function findHighestBill(patients: Patient[]): number {
    let highest = patients[0].bill;
    for (const x of patients) {
        if (x.bill > highest) highest
         = x.bill
    }
    return highest;
}

function findLowestBill(patients: Patient[]): number {
    let lowest = patients[0].bill;
    for (const p of patients) {
        if (p.bill < lowest) lowest = p.bill;
    }
    return lowest;
}

function calculateTotalRevenue(patients: Patient[]): number {
    let total = 0;
    for (const p of patients) {
        total += p.bill;
    }
    return total;
}

function calculateAverageBill(patients: Patient[]): number {
    return calculateTotalRevenue(patients) / patients.length;
}

function getAdmittedPatientNames(patients: Patient[]): string {
    const names: string[] = [];
    for (const x of patients) {
        if (x.admitted) names.push(x.name);
    }
    return names.join(",")
}

function printHospitalReport(patients: Patient[]): void {
    console.log("=== Hospital Daily Report ===");
    console.log(`Total Patients: ${countTotalPatients(patients)}`);
    console.log(`Admitted Patients: ${countAdmittedPatients(patients)}`);
    console.log(`Discharged Patients: ${countDischargedPatients(patients)}`);
    console.log(`Pediatrics Department: ${countPatientsByDepartment(patients, "Pediatrics")}`);
    console.log(`Cardiology Department: ${countPatientsByDepartment(patients, "Cardiology")}`);
    console.log(`Orthopedics Department: ${countPatientsByDepartment(patients, "Orthopedics")}`);
    console.log(`Highest Bill: Rp. ${findHighestBill(patients).toLocaleString("id-ID")}`);
    console.log(`Lowest Bill: Rp. ${findLowestBill(patients).toLocaleString("id-ID")}`);
    console.log(`Average Bill: Rp. ${calculateAverageBill(patients).toLocaleString("id-ID")}`);
    console.log(`Total Revenue: Rp. ${calculateTotalRevenue(patients).toLocaleString("id-ID")}`);
    console.log(`Admitted Patients Names: ${getAdmittedPatientNames(patients)}`);
}

printHospitalReport(patients);