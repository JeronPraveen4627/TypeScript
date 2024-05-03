let UserIdAutoIncrement=1000;
let MedicineIdAutoIncrement=2000;
let OrderIdAutoIncrement=3000;
let CurrentLoggedInUser:User;
let CurrentLoginUser:string;
let CurrentMedicineID:string;

class User
{
    UserId: string;
    UserName:string;
    UserEmail:string;
    UserPassword:string;
    UserPhoneNumber:number;
    BalanceAmount:number;

    constructor (paramUserName:string,paramUserEmail:string,paramUserPassword:string,paramPhoneNumber:number)
    {
        UserIdAutoIncrement++;
        this.UserId="UI"+UserIdAutoIncrement.toString();
        this.UserName=paramUserName;
        this.UserEmail=paramUserEmail;
        this.UserPassword=paramUserPassword;
        this.UserPhoneNumber=paramPhoneNumber;
        this.BalanceAmount=0;
    }

    ShowBalance()
    {
        return`Your Current Balance: ${this.BalanceAmount}`
    }
}

class MedicineInfo
{
    MedicineId:string;
    MedicineName:string;
    MedicineCount:number;
    MedicinePrice:number;
    ExpiredDate:Date;

    constructor(paramMedicineName:string,paramMedicineCount:number,ParamMedicinePrice:number,paramExpiredDate:Date)
    {
        MedicineIdAutoIncrement++;
        this.MedicineId="MID"+MedicineIdAutoIncrement.toString();
        this.MedicineName=paramMedicineName;
        this.MedicineCount=paramMedicineCount;
        this.MedicinePrice=ParamMedicinePrice;
        this.ExpiredDate=paramExpiredDate;
    }
}

enum OrderStatus{Ordered="Ordered",Cancelled = "Cancelled"}
class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;
    UserName:string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice:number;
    OrderStatus:OrderStatus;

    constructor(paramMedicineId: string, paramUserId: string, paramMedicineName: string,paramUserName:string, paramMedicineCount: number,paramMedicinePrice:number, paramOrderStatus:OrderStatus) {
        OrderIdAutoIncrement++;

        this.OrderId = "OID" + OrderIdAutoIncrement.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.UserName=paramUserName;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice=paramMedicinePrice;
        this.OrderStatus = paramOrderStatus;
    }
}

let userArrayList: Array<User>=new Array<User>();
    userArrayList.push(new User("Hemanth","Hemanth@123","password", 9789011226));
    userArrayList.push(new User("Harish", "123","123", 9445153060));

let MedicineArrayList: Array<MedicineInfo>=new Array<MedicineInfo>();
    MedicineArrayList.push(new MedicineInfo("Paracetomol", 5, 50,new Date("2024-05-12")));
    MedicineArrayList.push(new MedicineInfo("Colpal", 5, 60,new Date("2024-05-12")));
    MedicineArrayList.push(new MedicineInfo("Stepsil", 5, 70,new Date("2024-05-12")));
    MedicineArrayList.push(new MedicineInfo("Iodex", 5, 80,new Date("2024-06-12")));
    MedicineArrayList.push(new MedicineInfo("Acetherol", 5, 100,new Date("2024-06-10")));

let OrderArrayList: Array<Order>=new Array<Order>();
    OrderArrayList.push(new Order("MD2001","UI1001","Paracetomol","Hemanth",3,15,OrderStatus.Ordered));
    OrderArrayList.push(new Order("MD2002","UI1002","Colpal","Harish",3,60,OrderStatus.Ordered));

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
    //defaultUser();
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
            userLoginID=userArrayList[i].UserId;
            CurrentLoginUser=userLoginID;
            CurrentLoggedInUser=userArrayList[i];

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
function defaultUser()
{
    
    let userList=document.getElementById("users")as HTMLTableElement;
            // row.innerHTML=`<table>
            // <tr>
            // <th>User ID</th>
            // <th>User Name</th>
            // <th>Balance</th>
            // </tr></table>`
            for(let i=0;i<userArrayList.length;i++)
            {
                let row=document.createElement("tr");
                row.innerHTML= `<th>${userArrayList[i].UserId}</th>
                                <th>${userArrayList[i].UserName}</th>
                                <th>${userArrayList[i].BalanceAmount}</th>`;
                                
                userList.appendChild(row);
            }
}

function medicineDetails()
{ 
    let medicinePage = document.getElementById('medicinePage') as HTMLLabelElement;
    // let button=document.getElementById("medicinebutton") as HTMLButtonElement; 

    let data = document.getElementById('medicineTable') as HTMLTableElement;
    data.innerHTML="";
    data.innerHTML=`
             <tr>
             <th>Medicine Name</th>
             <th>Medicine Count</th>
             <th>Medicine Price</th>
               <th>Expired Date</th>
             </tr>`
    let showmedicine=document.getElementById("medicinePage") as HTMLDivElement;
    for (let i = 0; i < MedicineArrayList.length; i++) 
    {
        if(MedicineArrayList[i].MedicineCount>0 && MedicineArrayList[i].ExpiredDate > new Date()){
        let row=document.createElement("tr");
        data.innerHTML+=`
        <td>${MedicineArrayList[i].MedicineName}</td>
        <td>${MedicineArrayList[i].MedicineCount}
        <td>${MedicineArrayList[i].MedicinePrice}</td>
        <td>${MedicineArrayList[i].ExpiredDate.toLocaleDateString()}</td>`;
        //data.appendChild(row);
        }
    }
    // medicinePage.style
    // button.disabled=true;
    showmedicine.style.display="block";
}

function purchase()
{
    let purchasePage=(document.getElementById("purchasePage")as HTMLDivElement);
    let medicinedata=document.getElementById('purchageTable') as HTMLTableElement;
    medicinedata.innerHTML="";
    medicinedata.innerHTML=`
             <tr>
             <th>Medicine Name</th>
             <th>Medicine Count</th>
             <th>Medicine Price</th>
               <th>Expired Date</th>
             </tr>`
    for(let i=0; i<MedicineArrayList.length;i++)
    {
        let row=document.createElement("tr");
        row.innerHTML= `<td>${MedicineArrayList[i].MedicineName}</td>
                        <td>${MedicineArrayList[i].MedicineCount}</td>
                        <td>${MedicineArrayList[i].MedicinePrice}</td>
                        <td>${MedicineArrayList[i].ExpiredDate.toLocaleDateString()}</td>
                        <td><button onclick="medincinecount('${MedicineArrayList[i].MedicineId}');">Buy</button></td>`;
                        medicinedata.appendChild(row);
    }
    purchasePage.style.display="block";
}

function medincinecount(medicineID:string)
{
    let countInput=document.getElementById("medicineCount")as HTMLDivElement
    CurrentMedicineID=medicineID;
    countInput.style.display="Block";

}
function medicinePurchase()
{
    let count:number=parseInt((document.getElementById("medicineQuantity")as HTMLInputElement).value);
    let flag:boolean=true;
    for(let i=0;i<MedicineArrayList.length;i++)
    {
        if(MedicineArrayList[i].MedicineId==CurrentMedicineID && count<=MedicineArrayList[i].MedicineCount)
        {
            flag=false;
            let Price:number= count*MedicineArrayList[i].MedicinePrice;
            if(Number(count)<=MedicineArrayList[i].MedicineCount && count!=0 && Price<=CurrentLoggedInUser.BalanceAmount)
            {
                alert("Medicine Purchased Successfully");
                CurrentLoggedInUser.BalanceAmount-=Price;
                MedicineArrayList[i].MedicineCount -= count;
                OrderArrayList.push(new Order(MedicineArrayList[i].MedicineId,CurrentLoginUser,MedicineArrayList[i].MedicineName,CurrentLoggedInUser.UserName,count,Price,OrderStatus.Ordered));  
            }
            else
            {
                alert("Insufficient Balance...");
            }

        }
    }
    if(flag)
        {
            alert("Out of Stack");
        }
}

function cancel()
{
    let orderPage=(document.getElementById("OrderPage")as HTMLDivElement);
    let data = document.getElementById('OrderTable') as HTMLTableElement;
    data.innerHTML="";
    data.innerHTML=`
             <tr>
             <th>User Name</th>
             <th>User ID</th>
             <th>Medicine Name</th>
               <th>Medicine Count</th>
               <th>Medicine Price</th>
               <th>Order Status</th>
             </tr>`
    for(let i=0;i<OrderArrayList.length;i++)
        {
            if(OrderArrayList[i].UserId==CurrentLoginUser && OrderArrayList[i].OrderStatus==OrderStatus.Ordered)
            {
                let row=document.createElement("tr");
                row.innerHTML=`
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
    orderPage.style.display="block";
}
function cancelOrder(medicineName:string)
{
    for(let i=0;i<OrderArrayList.length;i++)
        {
            if(OrderArrayList[i].UserId==CurrentLoginUser && OrderArrayList[i].MedicineName==medicineName)
            {
                CurrentLoggedInUser.BalanceAmount+=OrderArrayList[i].MedicinePrice;
                OrderArrayList[i].OrderStatus=OrderStatus.Cancelled;
            }
        }  
}

function OrderHistroy()
{
    let orderPage=(document.getElementById("OrderPage")as HTMLDivElement);
    let data = document.getElementById('OrderTable') as HTMLTableElement;
    data.innerHTML="";
    data.innerHTML=`
             <tr>
             <th>User Name</th>
             <th>User ID</th>
             <th>Medicine Name</th>
               <th>Medicine Count</th>
               <th>Medicine Price</th>
               <th>Order Status</th>
             </tr>`
    for(let i=0;i<OrderArrayList.length;i++)
        {
            if(OrderArrayList[i].UserId==CurrentLoginUser)
            {
                let row=document.createElement("tr");
                row.innerHTML=`
                <td>${OrderArrayList[i].UserName}</td>
                <td>${OrderArrayList[i].UserId}
                <td>${OrderArrayList[i].MedicineName}</td>
                <td>${OrderArrayList[i].MedicineCount}</td>
                <td>${OrderArrayList[i].MedicinePrice}</td>
                <td>${OrderArrayList[i].OrderStatus}</td>`;
                data.appendChild(row);
            }
        }
    orderPage.style.display="block";
}


function DisplayHomePage()
{
    let homePage=document.getElementById("homePage") as HTMLDivElement;
    let signUp = document.getElementById("newUserPage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    let purchasePage=(document.getElementById("purchasePage")as HTMLDivElement);
    let showmedicine=document.getElementById("medicinePage") as HTMLDivElement;
    let showPage=(document.getElementById("showBalance")as HTMLDivElement);
    let countInput=document.getElementById("medicineCount")as HTMLDivElement

    countInput.style.display="none";
    showPage.style.display="none";
    showmedicine.style.display="none";
    purchasePage.style.display="none";
    signUp.style.display="none";
    loginPage.style.display="none";
    homePage.style.display="block";
}
function topUp()
{
    let rechargePage=(document.getElementById("rechargePage")as HTMLDivElement);
    let orderPage=(document.getElementById("OrderPage")as HTMLDivElement);
    orderPage.style.display="none";
    rechargePage.style.display="block";
}
function Recharge()
{
    let rechargePage=(document.getElementById("rechargePage")as HTMLDivElement);
    let recharge=(document.getElementById("rechargeAmount")as HTMLInputElement).value;

    for(let i=0;i<userArrayList.length;i++)
    {
        if(userArrayList[i].UserId==CurrentLoginUser)
        {
            userArrayList[i].BalanceAmount+=Number(recharge);
            alert("Amount added to your Wallet Successfully");
        }
    }
    rechargePage.style.display="none";
}

function Balance()
{
    let showPage=(document.getElementById("showBalance")as HTMLDivElement);
    let showBalance=(document.getElementById("balanceAmount")as HTMLDivElement);
    for(let i=0;i<userArrayList.length;i++)
        {
            if(userArrayList[i].UserId==CurrentLoginUser)
            {
                showBalance.innerHTML=userArrayList[i].ShowBalance();
            }
        }
        showPage.style.display="block";
}

function Menu()
{
    let signUp = document.getElementById("exsitingUserPage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    signUp.style.display="none";
    loginPage.style.display="block";
}

