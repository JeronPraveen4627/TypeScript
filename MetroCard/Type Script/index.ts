let CardNoAutoIncrement=1000;
let TravelIDAutoIncrement=2000;
let TicketIDAutoIncrement=3000;
let CurrentLoggedInUser:UserDetails;
class PersonalDetails
{
    UserName:string;
    UserPhoneNumber:number;

    constructor(paramUserName:string,paramUserPhoneNumber:number)
    {
        this.UserName=paramUserName;
        this.UserPhoneNumber=paramUserPhoneNumber;
    }

}

interface IBalance
{
    UserBalance:number;

    WalletBalance(balance:number):void
    DeductBalance(amount:number):void
}

class UserDetails extends PersonalDetails implements IBalance
{
    CardNumber:string
    UserEmail:string
    UserPassword:string;
    UserBalance:number;

    constructor(paramUserEmail:string,paramUserPassword:string,paramUserBalance:number,paramUserName:string,paramUserPhoneNumber:number)
    {
       super (paramUserName,paramUserPhoneNumber );
        CardNoAutoIncrement++;
        this.CardNumber="CMRL"+CardNoAutoIncrement.toString();
        this.UserEmail=paramUserEmail;
        this.UserBalance=paramUserBalance;
        this.UserPassword=paramUserPassword;
    }

    WalletBalance(paramBalance:number)
    {
        this.UserBalance+=paramBalance;
    }
    DeductBalance(paramAmount:number)
    {
        this.UserBalance-=paramAmount;
    }
}

class TravelDetails
{
    TravelID:string;
    CardNumber:string;
    FromLocation:string
    Tolocation:string;
    Date:Date;
    TravelCost:number;

    constructor(paramCardNumber:string,paramFromLocation:string,paramToLocation:string,paramDate:Date,paramTravelCost:number)
    {
        TravelIDAutoIncrement++;

        this.TravelID="TID"+TravelIDAutoIncrement.toString();
        this.CardNumber=paramCardNumber;
        this.FromLocation=paramFromLocation;
        this.Tolocation=paramToLocation;
        this.Date=paramDate;
        this.TravelCost=paramTravelCost;
    }
}

class TicketDetails
{
    TicketID:string;
    FromLocation:string;
    ToLocation:string;
    Price:number;

    constructor(paramFromLocation:string,paramToLocation:string,paramPrice:number)
    {
        TicketIDAutoIncrement++;
        this.TicketID="MR"+TicketIDAutoIncrement.toString();
        this.FromLocation=paramFromLocation;
        this.ToLocation=paramToLocation;
        this.Price=paramPrice;
    }
}


let userArrayList:Array<UserDetails>=new Array<UserDetails>();
    userArrayList.push(new UserDetails("123","123",100,"Praveen",96587456));
    userArrayList.push(new UserDetails("12345","123456",0,"Jeron Praveen",96587456));

let travelArrayList:Array<TravelDetails>=new Array<TravelDetails>();
    travelArrayList.push(new TravelDetails("CMRL1001","Airport","Egmore",new Date("2023-10-10"),55))
    travelArrayList.push(new TravelDetails("CMRL1001","Egmore","Koyambedu",new Date("2023-10-10"),32))
    travelArrayList.push(new TravelDetails("CMRL1002","Alandur","Koyambed",new Date("2023-10-10"),25))

    let ticketArrayList:Array<TicketDetails>=new Array<TicketDetails>();
        ticketArrayList.push(new TicketDetails("Airport","Egmore",55))
        ticketArrayList.push(new TicketDetails("Airport","Koyambedu",25))
        ticketArrayList.push(new TicketDetails("Alandur","Koyambedu",25))
        ticketArrayList.push(new TicketDetails("Koyambedu","Egmore",32))
        ticketArrayList.push(new TicketDetails("Vadapalani","Egmore",45))
        ticketArrayList.push(new TicketDetails("Arumbakkam","Egmore",25))
        ticketArrayList.push(new TicketDetails("Vadapalani","Koyambedu",25))
        ticketArrayList.push(new TicketDetails("Arumbakkam","Koyambedu",16))
function newUser()
{
    let signupPage=document.getElementById("signupPage") as HTMLDivElement;
    let homepage=document.getElementById("welcomepage") as HTMLDivElement;

    homepage.style.display="none";
    signupPage.style.display="block";
}

function signUp()
{
    let userEmail=(document.getElementById("userEmail")as HTMLInputElement).value;
    let userName=(document.getElementById("userName")as HTMLInputElement).value;
    let userPassword=(document.getElementById("userPassword")as HTMLInputElement).value;
    let userNumber=(document.getElementById("userPhoneNumber")as HTMLInputElement).value;
    
    userArrayList.push(new UserDetails(userEmail,userPassword,0,userName,Number(userNumber)));
    showHomePage();
}

function showHomePage()
{
    let signupPage=document.getElementById("signupPage") as HTMLDivElement;
    let homepage=document.getElementById("welcomepage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    let balancePage=document.getElementById("balancePage") as HTMLDivElement;
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    let travelPage=document.getElementById("travelHistoryPage") as HTMLDivElement;
    let travellingPage=document.getElementById("travelPage") as HTMLDivElement;

    travellingPage.style.display="none";
    travelPage.style.display="none";
    menuPage.style.display="none"; 
    balancePage.style.display="none"; 
    loginPage.style.display="none"; 
    signupPage.style.display="none";
    homepage.style.display="block";

}
function login()
{
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    let homepage=document.getElementById("welcomepage") as HTMLDivElement;

    homepage.style.display="none";
    loginPage.style.display="block"; 
}

function checkPassword()
{
    let userEmail=(document.getElementById("userLoginEmail")as HTMLInputElement).value;
    let userPassword=(document.getElementById("userLoginPassword")as HTMLInputElement).value;
    let flag:boolean=true;
    for(let i=0;i<userArrayList.length;i++)
    {
        if(userArrayList[i].UserEmail==userEmail && userArrayList[i].UserPassword==userPassword)
            {
                flag=false;
                CurrentLoggedInUser=userArrayList[i];
                menu();
            }
    }
    if(flag==true)
    {
        alert("Wrong Password");
    }

}



function menu()
{
    let welcome=document.getElementById("welcomeUser")as HTMLLabelElement;
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    let loginPage=document.getElementById("loginPage") as HTMLDivElement;
    let rechargePage=document.getElementById("rechargePage") as HTMLDivElement;
    let balancePage=document.getElementById("balancePage") as HTMLDivElement;
    let travelPage=document.getElementById("travelHistoryPage") as HTMLDivElement;
    let travellingPage=document.getElementById("travelPage") as HTMLDivElement;
    welcome.innerHTML="Hi "+CurrentLoggedInUser.UserName;

    travellingPage.style.display="none";
    travelPage.style.display="none";
    balancePage.style.display="none"; 
    rechargePage.style.display="none"; 
    loginPage.style.display="none"; 
    menuPage.style.display="block";   
}

function balanceCheck()
{
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    let balancePage=document.getElementById("balancePage") as HTMLDivElement;
    let amount=document.getElementById("balanceAmount")as HTMLLabelElement;
    amount.innerHTML=CurrentLoggedInUser.UserBalance.toString();
    menuPage.style.display="none"; 
    balancePage.style.display="block"; 
}

function rechargeAmount()
{
    let amount=(document.getElementById("rechargeAmount")as HTMLInputElement).value;
    CurrentLoggedInUser.UserBalance+=+amount;
    alert("Amount is Added to your wallet Successfully");
    menu();
    
}

function recharge()
{
    let balancePage=document.getElementById("balancePage") as HTMLDivElement;
    let rechargePage=document.getElementById("rechargePage") as HTMLDivElement;
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    
    menuPage.style.display="none";
    balancePage.style.display="none";
    rechargePage.style.display="block"
    
}

function travel()
{
    let travelPage=document.getElementById("travelPage") as HTMLDivElement;
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    let fair=document.getElementById("travelFair") as HTMLTableElement;
    fair.innerHTML="";
    fair.innerHTML=`<tr><td>From Location</td>
                        <td>To Location</td>
                        <td>Fair</td>
                        <td>Book Ticket</td></tr>`
                        
    for(let i=0;i<ticketArrayList.length;i++)
        {
            let fair=document.getElementById("travelFair") as HTMLTableElement;
            fair.innerHTML+=`<tr><td>${ticketArrayList[i].FromLocation}</td>
                            <td>${ticketArrayList[i].ToLocation}</td>
                            <td>${ticketArrayList[i].Price}</td>
                            <td><button onclick="buyTicket('${ticketArrayList[i].TicketID}')">Buy Ticket</button></td></tr>` 
        }


    menuPage.style.display="none";
    travelPage.style.display="block";
}

function buyTicket(ticketID:string)
{
    let flag:boolean=false;
    let travelcost:number=0;
    for(let i=0;i<ticketArrayList.length;i++)
    {
        if(ticketID==ticketArrayList[i].TicketID && ticketArrayList[i].Price<=CurrentLoggedInUser.UserBalance)    
        {
            flag=true;
            travelcost+=ticketArrayList[i].Price;
            CurrentLoggedInUser.UserBalance-=ticketArrayList[i].Price;
            travelArrayList.push(new TravelDetails(CurrentLoggedInUser.CardNumber,ticketArrayList[i].FromLocation,ticketArrayList[i].ToLocation,new Date(),travelcost))
            alert("Ticket is Booked")
            menu()
        }
    
    }
    if(flag==false)
    {
        alert("Insufficent Balance!...Please Recharge")
    }

}

function travelHistory()
{
    let travelPage=document.getElementById("travelHistoryPage") as HTMLDivElement;
    let travelTable=document.getElementById("travelTable")as HTMLTableElement;
    let menuPage=document.getElementById("menuPage") as HTMLDivElement;
    travelTable.innerHTML="";
    travelTable.innerHTML=`<tr>
                            <td>From Location</td>
                            <td>ToLocation</td>
                            <td>Date</td>
                            <td>Travel Cost</td></tr>`
    let flag:boolean=true;
    for(let i=0;i<travelArrayList.length;i++)
        {
            if(travelArrayList[i].CardNumber==CurrentLoggedInUser.CardNumber){
            let row=document.getElementById("travelTable")as HTMLTableElement
            flag=false;
            row.innerHTML+=`<tr>
                            <td>${travelArrayList[i].FromLocation}</td>
                            <td>${travelArrayList[i].Tolocation}</td>
                            <td>${travelArrayList[i].Date.toLocaleDateString()}</td>
                            <td>${travelArrayList[i].TravelCost}</td></tr>`
            }
            
        }
        if(flag==true)
        {
            let menuPage=document.getElementById("menuPage") as HTMLDivElement;
            travelTable.innerHTML=`<tr>
                                    No Travel History</tr>`  
        }

    menuPage.style.display="none";
    travelPage.style.display="block"; 
}
