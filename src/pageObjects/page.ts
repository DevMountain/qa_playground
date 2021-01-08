import {By, until, WebDriver, } from "selenium-webdriver";
export class smartLink {
    driver: WebDriver
    url: string = "https://smartlink.secure.direct/7.95/html/account_docs/account_lite_contacts.php?";
    Name: By = By.xpath("form[new_contact][name]");
   Phone: By = By.xpath("form[new_contact][phone_number_1]") ;
   Carrier: By = By.xpath("form[new_contact][carrier_id]");
   Username: By = By.xpath("form[new_contact][username]");
   Password: By = By.xpath("form[new_contact][password]");
   confrimPassword: By = By.xpath("form[new_contact][confirm_password]");
    userID: By = By.xpath("form[new_contact][alarm_user_id]");
    constructor(driver: WebDriver){
        this.driver = driver
    }

}