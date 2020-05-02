


abstract class ThePolicy implements IPolicy,CalculateRate{
 name:string;
 policyType:string;
 constructor(name,ptype){
  this.name = name;
  this.policyType = ptype;
 }
 abstract rate():Number;

}

interface IPolicy{
  name:string
  policyType:string
 
}

interface CalculateRate {
rate():Number
}


class PolicyEngine{

 run():void{
   const policyDetailFromJSON = {
    name:"Danesh's KTM",
    policyType:"Bike"
    };

   const policyFactory = new PolicyFactory(policyDetailFromJSON);
   const policy = policyFactory.create();
   console.log(policy.rate());
 }

}

class LandPolicy extends ThePolicy{

  name:string;
 
 constructor(name:string){
  super(name,"Land");
  
 }

 rate():Number{
   return 1;
 }

}

class VehiclePolicy implements ThePolicy{

  name:string;
  policyType:string = "Bike";
 constructor(name:string){
  this.name = name;
  // this.policyType = policyType  
 }

 rate():Number{
   return 2;
 }

}


enum PolicyType{
 Land = 1,
 Bike,
 Home
}

class PolicyFactory{
 policy:IPolicy;
 constructor( p: IPolicy){
   this.policy = p;
 }
 
 public create():ThePolicy{
   let policy = null;
   switch(this.policy.policyType){
     
     case "Land":
      policy = new LandPolicy(this.policy.name);
     break;
     case "Bike":
      policy = new VehiclePolicy(this.policy.name);
     break;
     default:

   }
   return policy;
 }

}

const pe = new PolicyEngine();
pe.run();