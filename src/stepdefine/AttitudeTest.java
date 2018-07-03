package stepdefine;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AttitudeTest {

	@Given("^I work at ([^\"]*)$")
	public void workTime(String str) {
		if(str.equals("Latenight")){
			System.out.println("Late Night code");
		}else if(str.equals("Morning")) {
			System.out.println("Morning code");
		}
		
	}
	
	@Given("^we work in \"([^\"]*)\"$") // parameterized \" and end \"
	public void weWork(String str) {
		System.out.println("We work at "+ str);	
	}
	
	@When("^I meet ([^\"]*)$")
	public void meetPerson(String str) {
		if(str.equals("Watchman")){
			System.out.println("Watchman code");
		}else if(str.equals("NewspaperBoy")) {
			System.out.println("NewspaperBoy code");
		}		
	}
	
	@When("^we meet \"([^\"]*)\"$")
	public void weMeet(String str) {
		System.out.println("We meet Guy " + str);
	}
	
	@Then("^I ([^\"]*) him$")
	public void greet(String str) {
		if(str.equals("greet")){
			System.out.println("Greet code");
		}else if(str.equals("skipgreeting")) {
			System.out.println("Skip Greeting code");
		}
	}
}