Feature: Attitude matters

In order to understand attitude
As a ITWorking guy
I want to know who he is wishing

@Tester
Scenario Outline: Employee and his attitude

Given I work at Latenight
When I meet Watchman
Then I greet him

Given I work at Morning
When I meet NewspaperBoy
Then I skipgreeting him 

Given we work in "<weekday>"
When we meet "<guy>"
Then I skipgreeting him

Examples:
 |weekday | guy      |
 |tenpm   | watchmen |
 |ninepm  | cabdriver|