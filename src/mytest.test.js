import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import wait from 'waait';

describe("Test App Component", () => {
    let appWrapper = mount(<BrowserRouter><App /></BrowserRouter>);

    //1
    test("Checking the PlannerLayout and PlannerTable component", () => {
        expect(appWrapper.find("h1").exists()).toBeTruthy("Expected h1 tag", "");
        expect(appWrapper.find("#planTripBtn").text()).toEqual("Plan a Trip", "Expected button with id planTripBtn")
        expect(appWrapper.find("table#tripTable").exists()).toBeTruthy("Expected table with id 'tripTable'", "");
        expect(appWrapper.find("thead").exists()).toBeTruthy("Expected thead", "");
        expect(appWrapper.find("#row1").exists()).toBeTruthy("Expected tr with id 'row1'", "");
        expect(appWrapper.find("#row3").exists()).toBeTruthy("Expected tr with id 'row3'", "");
        expect(appWrapper.find("#des2").text()).toEqual("Portugal", "Expected td with id des2")
        expect(appWrapper.find("#days1").text()).toEqual("10", "Expected td with id days1")
        expect(appWrapper.find("#date3").text()).toEqual("2023-03-20", "Expected td with id date3")
        expect(appWrapper.find("#travellers2").text()).toEqual("4", "Expected td with id travellers2")
    })

    test("Checking the path after clicking the 'Plan a Trip' button in PlannerLayout component", () => {
        let link = appWrapper.find("#planTripBtn");
        link.simulate("click");
        let pathname = window.location.pathname;
        expect(pathname).toBe("/plannerForm", "Expected path to be ")
    })

    test("Checking form in PlannerForm component", async () => {
        expect(appWrapper.find("#form").exists()).toBeTruthy("Expected form with id form", "")
        let destination = appWrapper.find("#destination");
        destination.simulate("change", {
            target: {
                name: "destination",
                value: "Paris"
            }
        })

        let date = appWrapper.find("#date");
        date.simulate("change", {
            target: {
                name: "date",
                value: "2024-03-17"
            }
        })

        let days = appWrapper.find("#days");
        days.simulate("change", {
            target: {
                name: "days",
                value: "10"
            }
        })

        let travellers = appWrapper.find("#travellers");
        travellers.simulate("change", {
            target: {
                name: "travellers",
                value: "5"
            }
        })

        let link = appWrapper.find("#addTripBtn");
        link.simulate("click");
        await wait(0)
        appWrapper.update()
    })
    
    test("Checking the success message in PlannerForm component", () => {
        expect(appWrapper.find("#success").text()).toEqual("Trip added successfully !!!", "Expected DIV with id success")
        let link = appWrapper.find("#backBtn");
        link.simulate("click");
        let pathname = window.location.pathname;
        expect(pathname).toBe("/", "Expected path to be ")
    })

    test("Checking the PlannerLayout and PlannerTable component", () => {
        expect(appWrapper.find("h1").exists()).toBeTruthy("Expected h1 tag", "");
        expect(appWrapper.find("#planTripBtn").text()).toEqual("Plan a Trip", "Expected button with id planTripBtn")
        expect(appWrapper.find("table#tripTable").exists()).toBeTruthy("Expected table with id 'tripTable'", "");
        expect(appWrapper.find("thead").exists()).toBeTruthy("Expected thead", "");
        expect(appWrapper.find("#row4").exists()).toBeTruthy("Expected tr with id 'row1'", "");
        expect(appWrapper.find("#des4").text()).toEqual("Paris", "Expected td with id des2")
        expect(appWrapper.find("#days4").text()).toEqual("10", "Expected td with id days1")
        expect(appWrapper.find("#date4").text()).toEqual("2024-03-17", "Expected td with id date3")
        expect(appWrapper.find("#travellers4").text()).toEqual("5", "Expected td with id travellers2")
    })

})


expect.extend({
    toBe(received, expected, text) {
        const pass = received === expected;
        if (pass) {
            return {
                message: () =>
                    `${text} '${expected}' and obtained is '${received}'`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `${text} '${expected}' but obtained is '${received}'`,
                pass: false,
            };
        }
    },
    toBeTruthy(received, text1, text2) {
        if (received) {
            return {
                message: () =>
                    `${text1} should not be found ${text2}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `${text1} cannot be found ${text2}`,
                pass: false,
            };
        }
    },
    toEqual(received, expected, text) {
        const pass = JSON.stringify(received) === JSON.stringify(expected);
        if (pass) {
            return {
                message: () =>
                    `${text} ${JSON.stringify(expected)} and obtained is ${JSON.stringify(received)}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `${text} ${JSON.stringify(expected)} but obtained is ${JSON.stringify(received)}`,
                pass: false,
            };
        }
    },
    toHaveBeenCalled(received, text) {
        if (received) {
            return {
                message: () =>
                    `Callback should not occur ${text}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `A function should be called back ${text}`,
                pass: false,
            };
        }
    }
});