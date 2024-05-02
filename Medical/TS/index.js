"use strict";
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 2000;
let OrderIdAutoIncrement = 3000;
class User {
    constructor(paramUserName, paramUserEmail, paramUserPassword, paramPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString;
        this.UserName = paramUserName;
        this.UserEmail = paramUserEmail;
        this.UserPassword = paramUserPassword;
        this.UserPhoneNumber = paramPhoneNumber;
    }
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicineCount, ParamMedicinePrice) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MID" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = ParamMedicinePrice;
    }
}
class Order {
    constructor(paramMedicineId, paramUserId, paramMedicineName, paramMedicineCount) {
        OrderIdAutoIncrement++;
        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}
let userArrayList = new Array();
userArrayList.push(new User("Hemanth", "Hemanth@123", "password", 9789011226));
userArrayList.push(new User("Harish", "Harish@123", "password", 9445153060));
let MedicineArrayList = new Array();
MedicineArrayList.push(new MedicineInfo("Paracetomol", 5, 50));
MedicineArrayList.push(new MedicineInfo("Colpal", 5, 60));
MedicineArrayList.push(new MedicineInfo("Stepsil", 5, 70));
MedicineArrayList.push(new MedicineInfo("Iodex", 5, 80));
MedicineArrayList.push(new MedicineInfo("Acetherol", 5, 100));
let OrderArrayList = new Array();
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
    homepage.style.display = 'none';
    existingUserPage.style.display = 'block';
}
function signIn() {
    let checkuser = false;
    let userLoginID = document.getElementById('userLoginID').value;
    let userLoginPassword = document.getElementById('userPassword').value;
    for (let i = 0; i < userArrayList.length; i++) {
        if (userArrayList[i].UserEmail == userLoginID && userArrayList[i].UserPassword == userLoginPassword) {
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
function medicineDetails() {
    //     let medicinePage = document.getElementById('medicinePage') as HTMLLabelElement;
    let data = document.getElementById('medicineTable');
    for (let i = 0; i < MedicineArrayList.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${MedicineArrayList[i].MedicineId}</td>
        <td>${MedicineArrayList[i].MedicineName}</td>
        <td>${MedicineArrayList[i].MedicinePrice}
        <td>${MedicineArrayList[i].MedicinePrice}</td>`;
        data.appendChild(row);
    }
}
function DisplayHomePage() {
    let homePage = document.getElementById("homePage");
    let signUp = document.getElementById("newUserPage");
    let loginPage = document.getElementById("loginPage");
    signUp.style.display = "none";
    loginPage.style.display = "none";
    homePage.style.display = "block";
}
function Menu() {
    let signUp = document.getElementById("exsitingUserPage");
    let loginPage = document.getElementById("loginPage");
    signUp.style.display = "none";
    loginPage.style.display = "block";
}
