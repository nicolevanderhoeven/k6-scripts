import http from "k6/http";
import { parseHTML } from "k6/html";
import { sleep, check } from "k6";

let debug = 1;
const domain = "https://challenge.flood.io";
let stepIDVal = "NOT_FOUND";
let authTokenVal = "NOT_FOUND";
let largestOrderSelectedVal = "NOT_FOUND";
let largestOrderVal = 0;
let challengerOrders = [];
let challengerValues = [];
let oneTimeToken = '';

export default function () {
  Home();
  Step1_ClickStart();
  Step2_SubmitAge();
  Step3_SubmitHighestOrderValue();
  Step4_ClickNext();
  Step5_SubmitOTT();
}

export function Home() {
  /*************************
   * 01_HomePage
   * Visit the homepage.
   *************************/
  let res = http.get(domain, { tags: { name: "01_HomePage" } });
  check(res, {
    "Home_text verification": (r) => r.body.includes("Ready to take the test?"),
  });
  //Extract dynamic variables
  let doc = parseHTML(res.body);

  stepIDVal = doc.find('input[name="challenger[step_id]"]').val();
  authTokenVal = doc.find('input[name="authenticity_token"]').val();

  // console.log('stepIDVal = ', stepIDVal);
  // console.log('authTokenVal = ', encodeURIComponent(authTokenVal));

  if (debug == 0) {
    sleep(Math.random() * 5);
  }
}

export function Step1_ClickStart() {
  /*************************
   * 02_Step1_ClickStart
   * Click the start button.
   *************************/
  let data = {
    authenticity_token: authTokenVal,
    "challenger[step_id]": stepIDVal,
    "challenger[step_number]": "1",
    commit: "Start",
  };
  let res = http.post(domain + "/start", data);
  check(res, {
    "Step1_text verification": (r) => r.body.includes("Step 2"),
  });

  //Extract dynamic variables
  let doc = parseHTML(res.body);
  stepIDVal = doc.find('input[name="challenger[step_id]"]').val();
  authTokenVal = doc.find('input[name="authenticity_token"]').val();
}

export function Step2_SubmitAge() {
  /*************************
   * 03_Step2_SubmitAge
   * From the dropdown menu, select 34 as the age and then click Next.
   *************************/
  let data = {
    authenticity_token: authTokenVal,
    "challenger[step_id]": stepIDVal,
    "challenger[step_number]": "2",
    "challenger[age]": "34",
    commit: "Next",
  };
  let res = http.post(domain + "/start", data);
  check(res, {
    "Step2_text verification": (r) => r.body.includes("Step 3"),
  });

  //Extract dynamic variables
  let doc = parseHTML(res.body);
  stepIDVal = doc.find('input[name="challenger[step_id]"]').val();
  authTokenVal = doc.find('input[name="authenticity_token"]').val();
  let orderValues = doc
    .find('label[class="collection_radio_buttons"]')
    .toArray();
  let orderSelectedValues = doc
    .find('input[name="challenger[order_selected]"]')
    .toArray();

  //Determine which among the extracted numbers is the largest and save that into a variable.
  let i = 0;
  let largestOrdinal = 0; //counter variable to get the ordinal for the largest order value
  orderValues.forEach(function (element) {
    // console.log(element.text());
    if (parseInt(element.text()) > largestOrderVal) {
      largestOrderVal = parseInt(element.text());
      // console.log("largestOrderVal = ", largestOrderVal);
      largestOrdinal = i;
      // console.log("largestOrdinal = ", largestOrdinal);
    }
    i++;
  });

  //Get the order selected value string corresponding to the largest number.
  largestOrderSelectedVal = orderSelectedValues[largestOrdinal].val();
  // console.log("largest selected order value is", largestOrderSelectedVal);
}

export function Step3_SubmitHighestOrderValue() {
  /*************************
   * 04_Step3_SubmitHighestOrderValue
   * Select the radio buton with the highest number.
   * Enter the highest number as a string in the text box.
   * Click Next.
   *************************/

  let data = {
    authenticity_token: authTokenVal,
    "challenger[step_id]": stepIDVal,
    "challenger[step_number]": "3",
    "challenger[largest_order]": largestOrderVal,
    "challenger[order_selected]": largestOrderSelectedVal,
    commit: "Next",
  };
  let res = http.post(domain + "/start", data);
  check(res, {
    "Step3_text verification": (r) => r.body.includes("Step 4"),
  });
  // Extract dynamic variables
  let doc = parseHTML(res.body);
  stepIDVal = doc.find('input[name="challenger[step_id]"]').val();
  authTokenVal = doc.find('input[name="authenticity_token"]').val();

  // Extract dynamic challenger orders and values
  let challengerOrderRegex = /name="(challenger\[order_[0-9]+\])" type="hidden" value="([0-9]+)"/g;
  let challengerMatch;
  while ((challengerMatch = challengerOrderRegex.exec(res.body))) {
    // console.log('challengerMatch: ', challengerMatch);

    challengerOrders.push(challengerMatch[1]); // challenger[order_1]
    challengerValues.push(challengerMatch[2]); // 1612534938
  }
  // console.log('challengerOrders: ', challengerOrders);
  // console.log('challengerValues: ', challengerValues);
}

export function Step4_ClickNext() {
  /*************************
   * 05_Step4_ClickNext
   * Click Next.
   *************************/
  // console.log(challengerOrders[0], ":", challengerValues[0]);
  let i = 0; 
  let data = {
    authenticity_token: authTokenVal,
    "challenger[step_id]": stepIDVal,
    "challenger[step_number]": "4",
    commit: "Next",
  };
  challengerOrders.forEach(function(item){
    data[item] = challengerValues[i];
    i++
  });

  let res = http.post(domain + "/start", data);
  check(res, {
    "Step4_text verification": (r) => r.body.includes("Step 5"),
  });

  // Extract dynamic variables
  let doc = parseHTML(res.body);
  stepIDVal = doc.find('input[name="challenger[step_id]"]').val();
  authTokenVal = doc.find('input[name="authenticity_token"]').val();

  // Get code
  res = http.get(domain + "/code");
  doc = JSON.parse(res.body);
  oneTimeToken = doc.code;
  // console.log('oneTimeToken =', oneTimeToken);
}

export function Step5_SubmitOTT() {
  /*************************
   * 06_Step5_SubmitOTT
   * Copy the token.
   * Paste the token in the text field.
   * Click Next.
   *************************/
  let data = {
    authenticity_token: authTokenVal,
    "challenger[step_id]": stepIDVal,
    "challenger[step_number]": "5",
    "challenger[one_time_token]": oneTimeToken,
    commit: "Next",
  };

  let res = http.post(domain + "/start", data);
  check(res, {
    "Step5_text verification": (r) => r.body.includes("You're Done"),
  });
  console.log(res.body);
}