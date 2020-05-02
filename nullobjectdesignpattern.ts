
interface IMobile{
  
  TurnOn():void;
  TurnOff():void;
}

class NullMobile implements IMobile{
 
  private static  _instance:NullMobile;
  static get  Instance():IMobile{
    if(this._instance === undefined){
      this._instance  = new NullMobile();
    }
    return this._instance;
  }
  
  TurnOn():void{ console.log('dummy turn on'); }
  TurnOff():void{ console.log('dummy turn off');}
}

class SamsungGalaxy implements IMobile{

  TurnOn():void{ console.log('SamsungGalaxy turning on');}
  TurnOff():void{console.log('SamsungGalaxy turning off'); }
}

class OnePlus6T implements IMobile{

  TurnOn():void{ console.log('OnePlus6T turning on');}
  TurnOff():void{console.log('OnePlus6T turning off'); }
}

class MobileRepository{
  public GetMobileByName(name:string):IMobile{
    debugger;
    let mobile= NullMobile.Instance;
    switch(name){
      case "OnePlus6T":
      mobile = new OnePlus6T();
      break;
      case "SamsungGalaxy":
      mobile = new SamsungGalaxy();
      break;
     
    }
    return mobile;
  }
}

//valid case
var repo = new MobileRepository();
let mobile = repo.GetMobileByName("OnePlus6T");
mobile.TurnOn();
mobile.TurnOff();

//null case 
mobile = repo.GetMobileByName("iphone 5s");
mobile.TurnOn();
mobile.TurnOff();