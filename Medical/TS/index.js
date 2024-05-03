"use strict";
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 2000;
let OrderIdAutoIncrement = 3000;
let CurrentLoggedInUser;
let CurrentLoginUser;
let CurrentMedicineID;
class User {
    constructor(paramUserName, paramUserEmail, paramUserPassword, paramPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserPhoneNumber = paramPhoneNumber;
        this.BalanceAmount = 0;
    }
    ShowBalance() {
        return `Your Current Balance: ${this.BalanceAmount}`;
    }
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicineCount, ParamMedicinePrice, paramExpiredDate) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MID" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = ParamMedicinePrice;
        this.ExpiredDate = paramExpiredDate;
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Ordered"] = "Ordered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
class Order {
    constructor(paramMedicineId, paramUserId, paramMedicineName, paramUserName, paramMedicineCount, paramMedicinePrice, paramOrderStatus) {
        OrderIdAutoIncrement++;
        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.UserName = paramUserName;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.OrderStatus = paramOrderStatus;
    }
}
let userArrayList = new Array();
userArrayList.push(new User("Hemanth", "Hemanth@123", "password", 9789011226));
userArrayList.push(new User("Harish", "123", "123", 9445153060));
let MedicineArrayList = new Array();
MedicineArrayList.push(new MedicineInfo("Paracetomol", 5, 50, new Date("2024-05-12")));
MedicineArrayList.push(new MedicineInfo("Colpal", 5, 60, new Date("2024-05-12")));
MedicineArrayList.push(new MedicineInfo("Stepsil", 5, 70, new Date("2024-05-12")));
MedicineArrayList.push(new MedicineInfo("Iodex", 5, 80, new Date("2024-06-12")));
MedicineArrayList.push(new MedicineInfo("Acetherol", 5, 100, new Date("2024-06-10")));
let OrderArrayList = new Array();
OrderArrayList.push(new Order("MD2001", "UI1001", "Paracetomol", "Hemanth", 3, 15, OrderStatus.Ordered));
OrderArrayList.push(new Order("MD2002", "UI1002", "Colpal", "Harish", 3, 60, OrderStatus.Ordered));
function newUserPage() {
    let homePage = document.getElementById("homePage");
    let newUserPage = document.getElementById("newUserPage");
    homePage.style.display = "none";
    newUserPage.style.display = "block";
}
function signUp() {
    // if(NewUserAgeStatus==true && NewUserAgeStatus==true && NewUserPhoneNumberStatus==true)
    //     {
    let newUserName = document.getElementById('newUserName').value;
    let newUserEmail = document.getElementById('newUserEmail').value;
    let newUserPassword = document.getElementById('newUserPassword').value;
    let newUserPhoneNumber = document.getElementById('newUserPhoneNumber').value;
    userArrayList.push(new User(newUserName, newUserEmail, newUserPassword, +newUserPhoneNumber));
    DisplayHomePage();
    // }
}
function existingUserPage() {
    let homepage = document.getElementById('homePage');
    let existingUserPage = document.getElementById('exsitingUserPage');
    //defaultUser();
    homepage.style.display = 'none';
    existingUserPage.style.display = 'block';
}
function signIn() {
    let checkuser = false;
    let userLoginID = document.getElementById('userLoginID').value;
    let userLoginPassword = document.getElementById('userPassword').value;
    for (let i = 0; i < userArrayList.length; i++) {
        if (userArrayList[i].UserEmail == userLoginID && userArrayList[i].UserPassword == userLoginPassword) {
            userLoginID = userArrayList[i].UserId;
            CurrentLoginUser = userLoginID;
            CurrentLoggedInUser = userArrayList[i];
            Menu();
            return;
        }
        else {
            checkuser = true;
        }
    }
    if (checkuser == true) {
        alert("Enter Valid Login ID");
    }
}
function defaultUser() {
    let userList = document.getElementById("users");
    // row.innerHTML=`<table>
    // <tr>
    // <th>User ID</th>
    // <th>User Name</th>
    // <th>Balance</th>
    // </tr></table>`
    for (let i = 0; i < userArrayList.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<th>${userArrayList[i].UserId}</th>
                                <th>${userArrayList[i].UserName}</th>
                                <th>${userArrayList[i].BalanceAmount}</th>`;
        userList.appendChild(row);
    }
}
function medicineDetails() {
    let medicinePage = document.getElementById('medicinePage');
    // let button=document.getElementById("medicinebutton") as HTMLButtonElement; 
    let data = document.getElementById('medicineTable');
    data.innerHTML = "";
    data.innerHTML = `
             <tr>
             <th>Medicine Name</th>
             <th>Medicine Count</th>
             <th>Medicine Price</th>
               <th>Expired Date</th>
             </tr>`;
    let showmedicine = document.getElementById("medicinePage");
    for (let i = 0; i < MedicineArrayList.length; i++) {
        if (MedicineArrayList[i].MedicineCount > 0 && MedicineArrayList[i].ExpiredDate > new Date()) {
            let row = document.createElement("tr");
            data.innerHTML += `
        <td>${MedicineArrayList[i].MedicineName}</td>
        <td>${MedicineArrayList[i].MedicineCount}
        <td>${MedicineArrayList[i].MedicinePrice}</td>
        <td>${MedicineArrayList[i].ExpiredDate.toLocaleDateString()}</td>`;
            //data.appendChild(row);
        }
    }
    // medicinePage.style
    // button.disabled=true;
    showmedicine.style.display = "block";
}
function purchase() {
    let purchasePage = document.getElementById("purchasePage");
    let medicinedata = document.getElementById('purchageTable');
    medicinedata.innerHTML = "";
    medicinedata.innerHTML = `
             <tr>
             <th>Medicine Name</th>
             <th>Medicine Count</th>
             <th>Medicine Price</th>
               <th>Expired Date</th>
             </tr>`;
    for (let i = 0; i < MedicineArrayList.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${MedicineArrayList[i].MedicineName}</td>
                        <td>${MedicineArrayList[i].MedicineCount}</td>
                        <td>${MedicineArrayList[i].MedicinePrice}</td>
                        <td>${MedicineArrayList[i].ExpiredDate.toLocaleDateString()}</td>
                        <td><button onclick="medincinecount('${MedicineArrayList[i].MedicineId}');">Buy</button></td>`;
        medicinedata.appendChild(row);
    }
    purchasePage.style.display = "block";
}
function medincinecount(medicineID) {
    let countInput = document.getElementById("medicineCount");
    CurrentMedicineID = medicineID;
    countInput.style.display = "Block";
}
function medicinePurchase() {
    let count = parseInt(document.getElementById("medicineQuantity").value);
    let flag = true;
    for (let i = 0; i < MedicineArrayList.length; i++) {
        if (MedicineArrayList[i].MedicineId == CurrentMedicineID && count <= MedicineArrayList[i].MedicineCount) {
            flag = false;
            let Price = count * MedicineArrayList[i].MedicinePrice;
            if (Number(count) <= MedicineArrayList[i].MedicineCount && count != 0 && Price <= CurrentLoggedInUser.BalanceAmount) {
                alert("Medicine Purchased Successfully");
                CurrentLoggedInUser.BalanceAmount -= Price;
                MedicineArrayList[i].MedicineCount -= count;
                OrderArrayList.push(new Order(MedicineArrayList[i].MedicineId, CurrentLoginUser, MedicineArrayList[i].MedicineName, CurrentLoggedInUser.UserName, count, Price, OrderStatus.Ordered));
            }
            else {
                alert("Insufficient Balance...");
            }
        }
    }
    if (flag) {
        alert("Out of Stack");
    }
}
function cancel() {
    let orderPage = document.getElementById("OrderPage");
    let data = document.getElementById('OrderTable');
    data.innerHTML = "";
    data.innerHTML = `
             <tr>
             <th>User Name</th>
             <th>User ID</th>
             <th>Medicine Name</th>
               <th>Medicine Count</th>
               <th>Medicine Price</th>
               <th>Order Status</th>
             </tr>`;
    for (let i = 0; i < OrderArrayList.length; i++) {
        if (OrderArrayList[i].UserId == CurrentLoginUser && OrderArrayList[i].OrderStatus == OrderStatus.Ordered) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${OrderArrayList[i].UserName}</td>
                <td>${OrderArrayList[i].UserId}
                <td>${OrderArrayList[i].MedicineName}</td>
                <td>${OrderArrayList[i].MedicineCount}</td>
                <td>${OrderArrayList[i].MedicinePrice}</td>
                <td>${OrderArrayList[i].OrderStatus}</td>
                <td><button onclick="cancelOrder('${OrderArrayList[i].MedicineName}')">Cancel</button>`;
            data.appendChild(row);
        }
    }
    orderPage.style.display = "block";
}
function cancelOrder(medicineName) {
    for (let i = 0; i < OrderArrayList.length; i++) {
        if (OrderArrayList[i].UserId == CurrentLoginUser && OrderArrayList[i].MedicineName == medicineName) {
            CurrentLoggedInUser.BalanceAmount += OrderArrayList[i].MedicinePrice;
            OrderArrayList[i].OrderStatus = OrderStatus.Cancelled;
        }
    }
}
function OrderHistroy() {
    let orderPage = document.getElementById("OrderPage");
    let data = document.getElementById('OrderTable');
    data.innerHTML = "";
    data.innerHTML = `
             <tr>
             <th>User Name</th>
             <th>User ID</th>
             <th>Medicine Name</th>
               <th>Medicine Count</th>
               <th>Medicine Price</th>
               <th>Order Status</th>
             </tr>`;
    for (let i = 0; i < OrderArrayList.length; i++) {
        if (OrderArrayList[i].UserId == CurrentLoginUser) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${OrderArrayList[i].UserName}</td>
                <td>${OrderArrayList[i].UserId}
                <td>${OrderArrayList[i].MedicineName}</td>
                <td>${OrderArrayList[i].MedicineCount}</td>
                <td>${OrderArrayList[i].MedicinePrice}</td>
                <td>${OrderArrayList[i].OrderStatus}</td>`;
            data.appendChild(row);
        }
    }
    orderPage.style.display = "block";
}
function DisplayHomePage() {
    let homePage = document.getElementById("homePage");
    let signUp = document.getElementById("newUserPage");
    let loginPage = document.getElementById("loginPage");
    let purchasePage = document.getElementById("purchasePage");
    let showmedicine = document.getElementById("medicinePage");
    let showPage = document.getElementById("showBalance");
    let countInput = document.getElementById("medicineCount");
    countInput.style.display = "none";
    showPage.style.display = "none";
    showmedicine.style.display = "none";
    purchasePage.style.display = "none";
    signUp.style.display = "none";
    loginPage.style.display = "none";
    homePage.style.display = "block";
}
function topUp() {
    let rechargePage = document.getElementById("rechargePage");
    let orderPage = document.getElementById("OrderPage");
    orderPage.style.display = "none";
    rechargePage.style.display = "block";
}
function Recharge() {
    let rechargePage = document.getElementById("rechargePage");
    let recharge = document.getElementById("rechargeAmount").value;
    for (let i = 0; i < userArrayList.length; i++) {
        if (userArrayList[i].UserId == CurrentLoginUser) {
            userArrayList[i].BalanceAmount += Number(recharge);
            alert("Amount added to your Wallet Successfully");
        }
    }
    rechargePage.style.display = "none";
}
function Balance() {
    let showPage = document.getElementById("showBalance");
    let showBalance = document.getElementById("balanceAmount");
    for (let i = 0; i < userArrayList.length; i++) {
        if (userArrayList[i].UserId == CurrentLoginUser) {
            showBalance.innerHTML = userArrayList[i].ShowBalance();
        }
    }
    showPage.style.display = "block";
}
function Menu() {
    let signUp = document.getElementById("exsitingUserPage");
    let loginPage = document.getElementById("loginPage");
    signUp.style.display = "none";
    loginPage.style.display = "block";
}
