$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepdefine/dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Attitude matters",
  "description": "\r\nIn order to understand attitude\r\nAs a ITWorking guy\r\nI want to know who he is wishing",
  "id": "attitude-matters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Employee and his attitude",
  "description": "",
  "id": "attitude-matters;employee-and-his-attitude",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work at Latenight",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet Watchman",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I greet him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work at Morning",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet NewspaperBoy",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipgreeting him",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Latenight",
      "offset": 10
    }
  ],
  "location": "AttitudeTest.workTime(String)"
});
formatter.result({
  "duration": 140896361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watchman",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.meetPerson(String)"
});
formatter.result({
  "duration": 115302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greet",
      "offset": 2
    }
  ],
  "location": "AttitudeTest.greet(String)"
});
formatter.result({
  "duration": 71566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Morning",
      "offset": 10
    }
  ],
  "location": "AttitudeTest.workTime(String)"
});
formatter.result({
  "duration": 61059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewspaperBoy",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.meetPerson(String)"
});
formatter.result({
  "duration": 92583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipgreeting",
      "offset": 2
    }
  ],
  "location": "AttitudeTest.greet(String)"
});
formatter.result({
  "duration": 65035,
  "status": "passed"
});
});