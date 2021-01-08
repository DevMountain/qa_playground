import {
  By,
  until,
} from "selenium-webdriver";
import { textChangeRangeIsUnchanged } from "typescript";
import { BasePage } from "./BasePage";

export class SmartLinkPage extends BasePage {
  // Account page URL
  accountURL: string = "https://smartlink.secure.direct/7.95/html/account_docs/account_lite_contacts.php";
  // Login Page Elements:
  // login page logo
  headerLogo: By = By.className("lite-site-banner-image-010");
  // username input field
  username: By = By.id("user-name");
  // password input field
  password: By = By.name("form[password]");
  // button to submit username/password and log in
  log_in: By = By.id("submit");
  // Landing Page Elements:
  // flag that navigation index is visible
  listIsVisible: By = By.className("lite-menu-login-status-item-box lite-welcome-msg");
  // Menu icon (expands navigation menu when clicked)
  menuIcon: By = By.css("div.icon.menuIcon");
  // Class of navigation button elements from drop-down list
  menuButtons: By = By.className("menu_row_box");
  // Button to navigate to account page
  userNavButton: By = By.xpath("/html/body/div[1]/div/div[1]/div[2]/div[4]/div[4]/div/div[3]/a");
  // User Page Elements:
  // Individual user element
  indivUser: By = By.className("contactTop");
  // Deleting a user:



  // constructor
  constructor() {
    super({ url: "https://smartlink.secure.direct/7.95/html/login.php" })
  }
  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(
      until.elementIsEnabled(await this.getElement(this.headerLogo))
    );
  }
  /**
   * This function gets a web page element, clicks it, and enters
   * user-designated text.
   * 
   * @param element - Element that will receive text
   * @param input - text to be entered into the element
   */
  async clickAndEnter(element: By, input: string) {
    await this.getElement(element);
    await this.click(element);
    await this.setInput(element, input);
  }

  async login() {
    // Navigate to login page
    await this.navigate();
    // Enter username
    await this.clickAndEnter(this.username, "hw120120");
    // Enter password
    await this.clickAndEnter(this.password, "123456");
    // Click "login" to submit username and password
    await this.getElement(this.log_in);
    await this.click(this.log_in);
  }

  /**
   * Tests whether the home page's navigation menu is expanded. 
   */
  async NavMenuDisplayed() {
    await this.driver.wait(until.elementLocated(this.headerLogo))
    let menuDisplayed: boolean = await this.driver.findElement(By.className("menu")).isDisplayed();
    return menuDisplayed;
  }

  /**
   * Navigates from the home page to the Account: Users page, using the UI. 
   */
  async goToUsersPage() {
    // If navigation menu is not present, click the list icon to expand it.
    if (!this.NavMenuDisplayed()) {
      await this.click(this.menuIcon);
    }
    // Click the navigation menu's "Users" button.
    // Get a list of the elements in the navigation menu. 
    let list = await this.driver.findElements(By.css("a.menu_link._8"));
    // Wait for headerLogo to be visible to ensure Users page has loaded. 
    await this.driver.wait(until.elementLocated(this.headerLogo));
  }

  /**
   * Logs in and navigates to the user's page.
   * Uses the URL for the account page rather than the UI.
   */
  async initUserPage() {
    await this.navigate();
    await this.login();
    await this.driver.get(this.accountURL);

  }

  /**
   * Returns the account's current number of users.
   * This number includes the primary account user, which cannot be deleted.
   */
  async getNumUsers() {
    let list = await this.driver.findElements(By.className("contactTop"));
    console.log(list.length)
    return list.length;
  }



  async clickMenu() {
    this.driver.findElement(By.className("lite-menu-box-wrapper")).click();
  }
  /*
      if(!this.driver.findElement(By.className("lite-menu-box-wrapper")).isDisplayed){
        clickMenu()
    }
    */



}