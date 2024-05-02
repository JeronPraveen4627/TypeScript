let UserIdAutoIncrement=1000;
let MedicineIdAutoIncrement=2000;
let OrderIdAutoIncrement=3000;

class User
{
    UserId: string;
    UserName:string;
    UserEmail:string;
    UserPassword:string;
    UserPhoneNumber:number;

    constructor (paramUserName:string,paramUserEmail:string,paramUserPassword:string,paramPhoneNumber:number)
    {
        UserIdAutoIncrement++;
        this.UserId="UI"+UserIdAutoIncrement.toString;
        this.UserName=paramUserName;
        this.UserEmail=paramUserEmail;
        this.UserPassword=paramUserPassword;
        this.UserPhoneNumber=paramPhoneNumber;
    }
}

class MedicineInfo
{
    MedicineId:string;
    MedicineName:string;
    MedicineCount:number;
    MedicinePrice:number;

    constructor(paramMedicineName:string,paramMedicineCount:number,ParamMedicinePrice:number)
    {
        MedicineIdAutoIncrement++;
        this.MedicineId="MID"+MedicineIdAutoIncrement.toString();
        this.MedicineName=paramMedicineName;
        this.MedicineCount=paramMedicineCount;
        this.MedicinePrice=ParamMedicinePrice;
    }
}

class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;

    MedicineName: string;
    MedicineCount: number;

    constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string, paramMedicineCount: number) {
        OrderIdAutoIncrement++;

        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;

        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
}

let userArrayList: Array<User>=new Array<User>();
    userArrayList.push(new User("Hemanth","Hemanth@123","password", 9789011226));
    userArrayList.push(new User("Harish", "Harish@123","password", 9445153060));

let MedicineArrayList: Array<MedicineInfo>=new Array<MedicineInfo>();
    MedicineArrayList.push(new MedicineInfo("Paracetomol", 5, 50));
    MedicineArrayList.push(new MedicineInfo("Colpal", 5, 60));
    MedicineArrayList.push(new MedicineInfo("Stepsil", 5, 70));
    MedicineArrayList.push(new MedicineInfo("Iodex", 5, 80));
    MedicineArrayList.push(new MedicineInfo("Acetherol", 5, 100));

let OrderArrayList: Array<Order>=new Array<Order>();

function newUserPage()
{
    let homePage=document.getElementById("homePage") as HTMLDivElement;
    let newUserPage = document.getElementById("newUserPage") as HTMLDivElement;

    homePage.style.display="none";
    newUserPage.style.display="block";
}
function signUp()
{
    // if(NewUserAgeStatus==true && NewUserAgeStatus==true && NewUserPhoneNumberStatus==true)
    //     {
            let newUserName=(document.getElementById('newUserName')as HTMLInputElement).value;
            let newUserEmail=(document.getElementById('newUserEmail')as HTMLInputElement).value;
            let newUserPassword=(document.getElementById('newUserPassword') as HTMLInputElement).value;
            let newUserPhoneNumber=(document.getElementById('newUserPhoneNumber') as HTMLInputElement).value;

            userArrayList.push(new User(newUserName, newUserEmail,newUserPassword,+newUserPhoneNumber));
            DisplayHomePage();
        // }
}
function existingUserPage()
{
    let homepage=(document.getElementById('homePage')as HTMLDivElement);
    let existingUserPage=(document.getElementById('exsitingUserPage')as HTMLDivElement);

    homepage.style.display='none';
    existingUserPage.style.display='block';
}
function signIn()
{
    let checkuser:boolean=false;
    let userLoginID=(document.getElementById('userLoginID') as HTMLInputElement).value;
    let userLoginPassword=(document.getElementById('userPassword') as HTMLInputElement).value;
    for(let i=0;i<userArrayList.length;i++)
    {
        if(userArrayList[i].UserEmail==userLoginID && userArrayList[i].UserPassword==userLoginPassword)
        {
            Menu();
            return;
        }
        else
        {
            checkuser=true;
        }
    }
    if(checkuser==true)
    {
        alert("Enter Valid Login ID");
    }


}

function medicineDetails()
{ 
    let medicinePage = document.getElementById('medicinePage') as HTMLLabelElement;
    let button=document.getElementById("medicinebutton") as HTMLButtonElement; 
    let data = document.getElementById('medicineTable') as HTMLTableElement;
    for (let i = 0; i < MedicineArrayList.length; i++) 
    {
        let row=document.createElement("tr");
        row.innerHTML=`<td>${MedicineArrayList[i].MedicineId}</td>
        <td>${MedicineArrayList[i].MedicineName}</td>
        <td>${MedicineArrayList[i].MedicinePrice}
        <td>${MedicineArrayList[i].MedicinePrice}</td>`;
        data.appendChild(row);
    }
    medicinePage.style
    button.disabled=true;
}
function DisplayHomePage()
{
    let homePage=document.getElementById("homePage") as HTMLDivElement;
    let signUp = document.getElementById("newUserPage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    signUp.style.display="none";
    loginPage.style.display="none";
    homePage.style.display="block";
}

function Menu()
{
    let signUp = document.getElementById("exsitingUserPage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    signUp.style.display="none";
    loginPage.style.display="block";
}

