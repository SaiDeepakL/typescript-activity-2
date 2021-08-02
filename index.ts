import { Console } from 'console';

export class Innings {
  private teamName: string;
  private inningsName:string;
  private runs:string;

  
  public displayInningsDetails() {
    let promptSync = require('prompt-sync')();
 
    this.teamName = promptSync('Enter the team name:'),
    this.inningsName= promptSync('Enter Innings name:'),
    this.runs= promptSync('Enter runs:');
	console.log("Outout:\n");
    console.log("Enter the team name:"+this.teamName+" \nEnter Innings name:"+this.inningsName+" \nEnter runs:"+this.runs);
  }  
}

var inn = new Innings();
inn.displayInningsDetails();


