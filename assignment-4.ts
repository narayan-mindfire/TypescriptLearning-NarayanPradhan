//Data Dashboard
enum Cat{
    "Groceries",
    "Rent",
    "Entertainment",
    "Utilities",
    "Transportation"
}
interface dataItem {
    id : number,
    date : string,
    amount : number,
    category : Cat
}
let data : dataItem[] = [
    {id: 10001, date: "2023-01-15", amount: 200.50, category: Cat.Groceries},
    {id: 10002, date: "2023-03-10", amount: 450.00, category: Cat.Rent},
    {id: 10003, date: "2024-05-20", amount: 300.00, category: Cat.Entertainment},
    {id: 10004, date: "2024-07-18", amount: 125.75, category: Cat.Utilities},
    {id: 10005, date: "2025-02-11", amount: 89.99, category: Cat.Transportation},
    {id: 10006, date: "2025-04-22", amount: 400.00, category: Cat.Rent},
    {id: 10007, date: "2026-06-05", amount: 95.50, category: Cat.Groceries},
    {id: 10008, date: "2026-08-12", amount: 120.00, category: Cat.Transportation},
    {id: 10009, date: "2027-09-25", amount: 350.00, category:Cat.Utilities},
    {id: 10010, date: "2027-11-30", amount: 500.00, category: Cat.Rent},
    {id: 10011, date: "2028-03-08", amount: 250.00, category: Cat.Entertainment},
    {id: 10012, date: "2028-05-15", amount: 140.75, category: Cat.Groceries}
];

//function to print the sales data
const printSales = (data : dataItem[]) : void =>{
    console.log("Id".padEnd(10) + "Transaction date".padEnd(20) + "Transaction amount".padEnd(20) + "Item Category")
    console.log("-".repeat(70))
    for (let item of data) console.log(`${item.id}`.padEnd(10)+ `${item.date}`.padEnd(20)+`${item.amount}`.padEnd(20)+`${item.category}`)
}
//function to filter data by data category
const filterData = (cat : string) => {
    const res = data.filter((val) => Cat[val.category] === cat)
    return res
}
//function to find the total sales by category
const totalSalesCategory = (cat : string) : number => {
    const res = data.filter((val)=> Cat[val.category] === cat).reduce((acc, val) => acc+=Number(val.amount), 0)
    return res
}
//function to find total sales by month
const totalSalesMonth = (month : number) : number => {
    const res = data.filter((val)=>Number(val.date.split('-')[1]) === month).reduce((acc, val) => acc+Number(val.amount), 0)
    return res
}
//funciton to find the total sales in a given year
const totalSalesYear = (year : number) : number => {
    const res = data.filter((val)=>Number(val.date.split('-')[0]) === year).reduce((acc, val) => acc+Number(val.amount), 0)
    return res;
}
//function to find the highest sales amount in the dataset
const highestSalesAmount = (data : dataItem[]) : number => {
    const res = data.reduce((acc, val) => acc = Math.max(acc, val.amount), -Infinity);
    return res;
}
//function to find the lowest sales amount in the dataset
const lowestSalesAmount = (data : dataItem[]) : number => {
    const res = data.reduce((acc, val) => acc = Math.min(acc, val.amount), Infinity)
    return res;
}
//function to print the data sorted by date  
const printSorted = (data : dataItem[]) => {
    printSales(data.toSorted((a : dataItem, b : dataItem)=> a.date.localeCompare(b.date)))
}
printSales(data)
console.log(totalSalesCategory('Groceries'))
console.log(totalSalesMonth(1))
console.log(totalSalesYear(2025))
console.log(highestSalesAmount(data))
console.log(lowestSalesAmount(data))
printSorted(data)