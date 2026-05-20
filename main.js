const DEMO_USERNAME = "JERISH";
const DEMO_PASSWORD = "Jerish@123";

const protectedPages = [
  "dashboard.html",
  "java.html",
  "java-basic.html",
  "java-variables.html",
  "java-operators.html",
  "java-conditional.html",
  "java-loops.html",
  "java-arrays.html",
  "java-string-methods.html",
  "java-oop.html",
  "java-polymorphism.html",
  "java-encapsulation.html",
  "java-inheritance.html",
  "selenium.html",
  "testng.html",
  "cucumber.html",
  "sql.html",
  "git.html",
  "webdriver-methods.html",
  "waiting-methods.html",
  "js-scroll-upload.html",
  "upload-files.html",
  "checkbox-alerts.html",
  "alerts.html",
  "frames-iframes.html",
  "dropdowns-tables.html",
  "autosuggest-static-table.html",
  "date-pickers.html",
  "mouse-actions.html",
  "keyboard-slider-tabs-windows.html",
  "browser-capabilities.html",
  "advanced-topics.html",
  "data-driven-testing.html",
  "base-class.html"
];

const pageRegistry = [
  { file: "dashboard.html", label: "Dashboard" },
  { file: "java.html", label: "Java Labs" },
  { file: "java-basic.html", label: "Java Basic" },
  { file: "java-variables.html", label: "Java Variable and Data Type" },
  { file: "java-operators.html", label: "Java Operators" },
  { file: "java-conditional.html", label: "Java Conditional Statement" },
  { file: "java-loops.html", label: "Java Loop and Jumping Statement" },
  { file: "java-arrays.html", label: "Java Arrays" },
  { file: "java-string-methods.html", label: "Java String Methods" },
  { file: "java-oop.html", label: "Java Object Oriented Programming" },
  { file: "java-polymorphism.html", label: "Java Polymorphism" },
  { file: "java-encapsulation.html", label: "Java Encapsulation" },
  { file: "java-inheritance.html", label: "Java Inheritance" },
  { file: "selenium.html", label: "Selenium Labs" },
  { file: "webdriver-methods.html", label: "WebDriver Methods" },
  { file: "waiting-methods.html", label: "Waiting Methods" },
  { file: "js-scroll-upload.html", label: "JavascriptExecutor and Scrolling" },
  { file: "upload-files.html", label: "Upload Files" },
  { file: "checkbox-alerts.html", label: "Check Boxes and Radio Buttons" },
  { file: "alerts.html", label: "Alerts" },
  { file: "frames-iframes.html", label: "Frames and Nested iFrames" },
  { file: "dropdowns-tables.html", label: "Different Types of Drop-downs" },
  { file: "autosuggest-static-table.html", label: "Static and Dynamic Tables" },
  { file: "date-pickers.html", label: "Date Pickers" },
  { file: "mouse-actions.html", label: "Mouse Actions" },
  { file: "keyboard-slider-tabs-windows.html", label: "Keyboard, Sliders, Tabs, Windows" },
  { file: "browser-capabilities.html", label: "Screenshots, Headless, SSL, Ad Block, Extensions" },
  { file: "advanced-topics.html", label: "Broken Links, SVG, Shadow DOM" },
  { file: "data-driven-testing.html", label: "Data Driven Testing" },
  { file: "base-class.html", label: "BaseClass Setup" }
];

const shuffleArray = (items) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
};

const helpContent = {
  "baseclass-browser-launch-help": {
    title: "Browser Launch",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>What is <code>Assert</code> in JUnit?</h4>
    <p><code>Assert</code> is used to validate conditions in test cases.</p>
    <p>It tells JUnit:</p>
    <ul class="basic-help-list">
      <li>PASS the test</li>
      <li>or FAIL the test</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4><code>Assert.fail()</code> Syntax</h4>
    <pre class="code-block"><code>Assert.fail();</code></pre>
    <p>or</p>
    <pre class="code-block"><code>Assert.fail("message");</code></pre>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>What Happens Internally?</h4>
    <p>Suppose this line fails:</p>
    <pre class="code-block"><code>js.executeScript("arguments[0].click();", element);</code></pre>
    <p>Maybe because:</p>
    <ul class="basic-help-list">
      <li>element is null</li>
      <li>stale element</li>
      <li>browser issue</li>
      <li>JS error</li>
    </ul>
    <p>Then Java jumps to:</p>
    <pre class="code-block"><code>catch (Exception e)</code></pre>
    <p>Now inside catch:</p>
    <pre class="code-block"><code>Assert.fail("ERROR : OCCUR DURING JS CLICK");</code></pre>
    <p>JUnit throws an internal error called:</p>
    <pre class="code-block"><code>AssertionError</code></pre>
    <p>which marks the test as <strong>FAILED</strong>.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>VERY IMPORTANT:</h4>
    <h4>What Happens If You DON'T Put <code>Assert.fail()</code>?</h4>
    <p>This is the key concept.</p>

    <h5>Case Without Assert</h5>
    <pre class="code-block"><code>catch (Exception e) {

}</code></pre>
    <p>OR</p>
    <pre class="code-block"><code>catch (Exception e) {
    System.out.println("Error");
}</code></pre>

    <h5>What Happens?</h5>
    <p>The exception gets caught and swallowed.</p>
    <p>Meaning:</p>
    <ul class="basic-help-list">
      <li>error occurred</li>
      <li>but JUnit thinks everything is fine</li>
    </ul>
    <p>So:</p>
    <p><strong>TEST WILL PASS</strong></p>
    <p>even though click failed.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Example</h4>
    <h5>Without Assert</h5>
    <pre class="code-block"><code>@Test
public void testLogin() {

    try {
        int x = 10 / 0;
    } catch (Exception e) {

    }
}</code></pre>
    <h5>Result</h5>
    <pre class="code-block"><code>PASSED</code></pre>
    <p>Why?</p>
    <p>Because:</p>
    <ul class="basic-help-list">
      <li>exception was handled</li>
      <li>no failure reported to JUnit</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>With Assert.fail()</h4>
    <pre class="code-block"><code>@Test
public void testLogin() {

    try {
        int x = 10 / 0;
    } catch (Exception e) {
        Assert.fail("Calculation failed");
    }
}</code></pre>
    <h5>Result</h5>
    <pre class="code-block"><code>FAILED</code></pre>
    <p>because:</p>
    <ul class="basic-help-list">
      <li>failure explicitly reported to JUnit</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Why This Matters in Automation</h4>
    <p>Imagine:</p>
    <pre class="code-block"><code>login button click failed</code></pre>
    <p>but you didn't use:</p>
    <pre class="code-block"><code>Assert.fail()</code></pre>
    <p>Then:</p>
    <ul class="basic-help-list">
      <li>next steps may continue</li>
      <li>reports show PASS</li>
      <li>false positive test results</li>
    </ul>
    <p>Very dangerous in frameworks.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Difference Summary</h4>
    <table>
      <thead>
        <tr><th>Scenario</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>Exception occurs + no assert</td><td>Test PASSES</td></tr>
        <tr><td>Exception occurs + Assert.fail()</td><td>Test FAILS</td></tr>
        <tr><td>Exception occurs + throw e</td><td>Test FAILS</td></tr>
      </tbody>
    </table>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "baseclass-close-browser-help": {
    title: "Close Browser",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Close Browser Explanation</h4>
    <ul class="basic-help-list">
      <li><code>public</code> -> method can be accessed from anywhere.</li>
      <li><code>static</code> -> method belongs to class, so object creation is not required.</li>
      <li><code>void</code> -> method does not return any value.</li>
      <li><code>closeBrowser()</code> -> method name used to close current browser window/tab.</li>
      <li><code>try</code> block contains code that may generate exception.</li>
      <li><code>driver.close()</code> closes only the current browser window.</li>
      <li><code>catch(Exception e)</code> handles errors and <code>Assert.fail()</code> marks the JUnit test as FAILED if closing fails.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "baseclass-quit-browser-help": {
    title: "Quit Browser",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Quit Browser Explanation</h4>
    <ul class="basic-help-list">
      <li><code>public</code> -> method accessible from anywhere.</li>
      <li><code>static</code> -> method belongs to class, no object needed.</li>
      <li><code>void</code> -> method does not return any value.</li>
      <li><code>quitBrowser()</code> -> method name used to close entire browser session.</li>
      <li><code>try</code> block contains risky code that may throw exception.</li>
      <li><code>driver.quit()</code> closes all browser windows and ends WebDriver session.</li>
      <li><code>catch(Exception e)</code> handles errors and <code>Assert.fail()</code> marks JUnit test as FAILED with error message.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "date-button-format-help": {
    title: "Date Picker With Button Format",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Date Pickers in Selenium</h4>
    <p>A <strong>Date Picker</strong> is a calendar UI element used to select dates.</p>
    <p>Examples:</p>
    <ul class="basic-help-list">
      <li>DOB selection</li>
      <li>Hotel booking</li>
      <li>Flight booking</li>
      <li>Appointment scheduling</li>
    </ul>

    <h5>1. Normal Input Date Picker</h5>
    <p>If the date field allows typing directly:</p>
    <h5>HTML Example</h5>
    <pre class="code-block"><code>&lt;input type="date"&gt;</code></pre>

    <h5>Selenium Syntax</h5>
    <pre class="code-block"><code>driver.findElement(By.id("date"))
.sendKeys("15-05-2026");</code></pre>

    <h5>Explanation</h5>
    <ol class="basic-help-list">
      <li><code>findElement()</code> locates the date field.</li>
      <li><code>By.id("date")</code> identifies the element using id locator.</li>
      <li><code>sendKeys()</code> enters date directly into textbox.</li>
      <li><code>"15-05-2026"</code> is the date value passed.</li>
      <li>Mostly used when input field is editable.</li>
      <li>Easy to automate compared to calendar UI.</li>
      <li>No need to handle calendar popup.</li>
      <li>Date format depends on application requirement.</li>
      <li>Common formats: <code>dd-MM-yyyy</code> or <code>MM/dd/yyyy</code>.</li>
    </ol>
    <p><strong>Note:</strong> all the data we send to the input box must be in string format, even if the values are numbers.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Important Navigation Note</h4>
    <p>While automating, we can either click the forward button to select a future date or click the backward button to select a past date. We cannot do both at the same time.</p>
    <p>This is because in real-time scenarios, we either move to the past or move to the future. Only demo applications allow navigation to both past and future dates simultaneously.</p>

    <h5>Model 1</h5>
    <p>If the dates in the date picker are in <strong>button format</strong>, use a dynamic XPath value and directly click the button.</p>

    <h5>Syntax</h5>
    <pre class="code-block"><code>WebElement input = driver.findElement(By.xpath("xpath"));
input.click();

String expectedMonthYear = "monthYear";
String expectedDate = "date";

while(true)
{
    String actualMonthYear = driver.findElement(
        By.xpath("xpath"))
        .getText();

    if(actualMonthYear.equals(expectedMonthYear))
    {
        break;
    }

    driver.findElement(
        By.xpath("xpath"))
        .click();
}

driver.findElement(
    By.xpath("//button[text()='" + expectedDate + "']"))
    .click();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> is used to locate elements using XPath.</li>
      <li><code>input.click()</code> opens the date picker calendar.</li>
      <li><code>expectedMonthYear</code> stores required month and year.</li>
      <li><code>expectedDate</code> stores the required date dynamically.</li>
      <li><code>while(true)</code> keeps looping until correct month appears.</li>
      <li><code>getText()</code> gets current calendar heading text.</li>
      <li><code>equals()</code> compares current month with expected month.</li>
      <li><code>break</code> stops loop once correct month/year is found.</li>
      <li>Final XPath clicks the required date button dynamically.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Example</h4>
    <pre class="code-block"><code>WebElement input = driver.findElement(By.xpath("//*[@id='simple-date-input']"));
input.click();

String year = "June 2027";
String date = "23";

while (true)
{
    String yearElement = driver.findElement(By.xpath("//*[@id='calendar-title']")).getText();

    if (yearElement.equals(year))
    {
        break;
    }

    driver.findElement(By.xpath("//*[@id='calendar-next']")).click();
}

driver.findElement(
    By.xpath("//button[text()='" + date + "']"))
    .click();</code></pre>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "date-table-format-help": {
    title: "Date Picker With Table Format",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Model 2:</h4>
    <p>If the dates in the date picker are given in table format, we have to capture all the date elements and store them in a list of <code>WebElements</code>.</p>

    <h5>Syntax</h5>
    <pre class="code-block"><code>while (true)
{
    String actualMonthYear = driver.findElement(
        By.xpath("xpath"))
        .getText();

    if(actualMonthYear.equals(expectedMonthYear))
    {
        break;
    }

    driver.findElement(
        By.xpath("xpath"))
        .click();
}

List&lt;WebElement&gt; allDates = driver.findElements(
    By.xpath("xpath"));

for(WebElement element : allDates)
{
    if(element.getText().equals(expectedDate))
    {
        element.click();
        break;
    }
}</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>while(true)</code> keeps looping until required month/year appears.</li>
      <li><code>getText()</code> gets current calendar heading text.</li>
      <li><code>equals()</code> compares actual and expected month/year.</li>
      <li><code>break</code> stops loop once correct month is found.</li>
      <li><code>findElements()</code> stores all date buttons in a list.</li>
      <li><code>for-each loop</code> iterates through each date element.</li>
      <li><code>getText()</code> reads date text from each button.</li>
      <li>If date matches expected date, Selenium clicks it.</li>
      <li>Final <code>break</code> stops loop after selecting the date.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Example</h4>
    <pre class="code-block"><code>String year = "June 2027";
String date = "23";

while (true)
{
    String yearElement = driver.findElement(By.xpath("//strong[@id='table-calendar-title']")).getText();

    if (yearElement.equals(year))
    {
        break;
    }

    driver.findElement(By.xpath("//*[@id='table-calendar-next']")).click();
}

List&lt;WebElement&gt; dates = driver.findElements(
    By.xpath("//tbody[@id='table-calendar-body']/tr/td/button"));

for (WebElement dt : dates)
{
    if(dt.getText().equals(date))
    {
        dt.click();
        break;
    }
}</code></pre>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "static-table-help": {
    title: "Static Web Table",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>1. Static Web Table</h4>
    <p>A <strong>static table</strong> has fixed rows and columns.</p>
    <p>The data does not change dynamically.</p>
    <p><strong>Note:</strong> every row is considered as a web element.</p>

    <h5>HTML Structure of Static Table</h5>
    <pre class="code-block"><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;

    &lt;tr&gt;
        &lt;td&gt;David&lt;/td&gt;
        &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>

    <h5>Important Tags</h5>
    <table>
      <thead><tr><th>Tag</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><code>&lt;table&gt;</code></td><td>Complete table</td></tr>
        <tr><td><code>&lt;tr&gt;</code></td><td>Table row</td></tr>
        <tr><td><code>&lt;th&gt;</code></td><td>Header column</td></tr>
        <tr><td><code>&lt;td&gt;</code></td><td>Data cell</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>1. Get All Rows</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>List&lt;WebElement&gt; rows =
driver.findElements(By.xpath("//table/tbody/tr"));</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElements()</code> returns multiple elements.</li>
      <li><code>tr</code> selects all rows.</li>
    </ul>

    <h4>2. Get Number of Columns</h4>
    <pre class="code-block"><code>List&lt;WebElement&gt; cols =
driver.findElements(By.xpath("//table/tbody/tr[1]/td"));

System.out.println(cols.size());</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>tr[1]</code> first row.</li>
      <li><code>td</code> all columns in first row.</li>
    </ul>

    <h4>3. Read Specific Cell Value</h4>
    <p>Example: get value from 2nd row and 1st column.</p>
    <pre class="code-block"><code>String value = driver.findElement(
By.xpath("//table/tbody/tr[2]/td[1]"))
.getText();

System.out.println(value);</code></pre>
    <p><strong>Output:</strong> David</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Passing Data Dynamically in XPath</h4>
    <p>This is very important.</p>
    <pre class="code-block"><code>String value = driver.findElement(
By.xpath("//table/tbody/tr["+r+"]/td["+c+"]"))
.getText();</code></pre>
    <h5>Explanation</h5>
    <ol class="basic-help-list">
      <li>Dynamic XPath is created using variables inside XPath.</li>
      <li><code>r</code> represents row number dynamically.</li>
      <li><code>c</code> represents column number dynamically.</li>
      <li><code>"+r+"</code> inserts row value into XPath.</li>
      <li><code>"+c+"</code> inserts column value into XPath.</li>
      <li>Final XPath changes automatically during loop execution.</li>
      <li>Example generated XPath: <code>//table/tbody/tr[2]/td[1]</code>.</li>
      <li>This helps avoid hardcoded XPath values.</li>
      <li>Mostly used in dynamic web table handling.</li>
    </ol>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Syntax to Get All the Data from Table</h4>
    <pre class="code-block"><code>for(int r=2; r&lt;=rows; r++)
{
    for(int c=1; c&lt;=cols; c++)
    {
        String value = driver.findElement(
        By.xpath("//table[@name='BookTable']//tr["+r+"]/td["+c+"]"))
        .getText();

        System.out.print(value + "\\t");
    }

    System.out.println();
}</code></pre>
    <ol class="basic-help-list">
      <li><code>for(int r=2; r&lt;=rows; r++)</code> iterates through all table rows starting from row 2.</li>
      <li><code>{</code> opening brace of outer loop.</li>
      <li><code>for(int c=1; c&lt;=cols; c++)</code> iterates through all columns of each row.</li>
      <li><code>{</code> opening brace of inner loop.</li>
      <li><code>String value</code> fetches text dynamically from current table cell using XPath.</li>
      <li><code>System.out.print(value + "\\t");</code> prints cell value with tab spacing.</li>
      <li><code>}</code> closing brace of inner loop.</li>
      <li><code>System.out.println();</code> moves cursor to next line after one row completes.</li>
      <li><code>}</code> closing brace of outer loop.</li>
    </ol>
    <p><strong>Note:</strong> this gives data from table only. It will not get header data because headings are in <code>th</code> tag.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Syntax to Get Table Data Along with Heading</h4>
    <pre class="code-block"><code>System.out.println("BookName" + "\\t" + "Author" + "\\t" + "Subject" + "\\t" + "Price");

for(int r=2; r&lt;=rows; r++)
{
    for(int c=1; c&lt;=cols; c++)
    {
        String value = driver.findElement(
        By.xpath("//table[@name='BookTable']//tr["+r+"]/td["+c+"]"))
        .getText();

        System.out.print(value + "\\t");
    }

    System.out.println();
}</code></pre>
    <ol class="basic-help-list">
      <li><code>System.out.println("BookName"...)</code> prints table headings with tab spacing.</li>
      <li><code>for(int r=2; r&lt;=rows; r++)</code> iterates through all rows starting after header row.</li>
      <li><code>for(int c=1; c&lt;=cols; c++)</code> iterates through all columns of current row.</li>
      <li><code>String value</code> fetches cell value dynamically using XPath.</li>
      <li><code>System.out.print(value + "\\t");</code> prints each cell value with tab spacing.</li>
      <li><code>System.out.println();</code> moves output to next line after one row is printed.</li>
    </ol>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Get Data Based on Condition</h4>
    <pre class="code-block"><code>for(int r=2; r&lt;=rows; r++)
{
    String authorName = driver.findElement(
    By.xpath("//table[@name='BookTable']//tr["+r+"]/td[2]"))
    .getText();

    if(authorName.equals("Mukesh"))
    {
        String bookName = driver.findElement(
        By.xpath("//table[@name='BookTable']//tr["+r+"]/td[1]"))
        .getText();

        System.out.println(bookName + "\\t" + authorName);
    }
}</code></pre>
    <ol class="basic-help-list">
      <li><code>for(int r=2; r&lt;=rows; r++)</code> iterates through all table rows excluding header row.</li>
      <li><code>String authorName</code> fetches author name from 2nd column dynamically.</li>
      <li><code>if(authorName.equals("Mukesh"))</code> checks whether author name is Mukesh.</li>
      <li><code>String bookName</code> fetches book name from 1st column.</li>
      <li><code>System.out.println(bookName + "\\t" + authorName);</code> prints book name and author name.</li>
    </ol>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>To Do Operation Based on Condition</h4>
    <pre class="code-block"><code>int total = 0;

for(int r=2; r&lt;=rows; r++)
{
    String price = driver.findElement(
    By.xpath("//table[@name='BookTable']//tr["+r+"]/td[4]"))
    .getText();

    total = total + Integer.parseInt(price);
}

System.out.println("Total Price of the books: " + total);</code></pre>
    <ol class="basic-help-list">
      <li><code>int total = 0;</code> initializes total variable to store sum of prices.</li>
      <li><code>for(int r=2; r&lt;=rows; r++)</code> iterates through all rows excluding header row.</li>
      <li><code>String price</code> fetches price from 4th column dynamically.</li>
      <li><code>td[4]</code> represents 4th column which contains book price.</li>
      <li><code>Integer.parseInt(price)</code> converts String value into integer.</li>
      <li><code>total = total + Integer.parseInt(price);</code> adds price into total.</li>
      <li><code>System.out.println(...)</code> prints total price of all books.</li>
    </ol>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "checkbox-states": {
    title: "Checkbox and Radio Button",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Checkbox</h4>
    <p>A checkbox allows the user to select <strong>multiple options</strong>.</p>

    <h5>Example</h5>
    <p>Choose your hobbies:</p>
    <div class="basic-help-options" aria-label="Checkbox example">
      <label><input type="checkbox" checked disabled /> Cricket</label>
      <label><input type="checkbox" checked disabled /> Music</label>
      <label><input type="checkbox" disabled /> Reading</label>
    </div>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Radio Button</h4>
    <p>A radio button allows the user to select <strong>only one option</strong> from a group.</p>

    <h5>Example</h5>
    <p>Select gender:</p>
    <div class="basic-help-options" aria-label="Radio button example">
      <label><input type="radio" name="help-gender" checked disabled /> Male</label>
      <label><input type="radio" name="help-gender" disabled /> Female</label>
      <label><input type="radio" name="help-gender" disabled /> Other</label>
    </div>
    <p>Only one option can be selected at a time.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Syntax for Checkbox</h4>
    <h5>Using Normal For Loop</h5>
    <pre class="code-block"><code>List&lt;WebElement&gt; checkboxes = driver.findElements(
    By.xpath("//input[@class='form-check-input']")
);

for(int i = 0; i &lt; checkboxes.size(); i++)
{
    checkboxes.get(i).click();
}</code></pre>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Formula for Selecting First 3 Checkboxes</h4>
    <p>No special formula is needed. Start from index <code>0</code> and go till <code>&lt; 3</code>.</p>
    <pre class="code-block"><code>for(int i = 0; i &lt; 3; i++)
{
    checkboxes.get(i).click();
}</code></pre>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Formula for Selecting Checkboxes From Last</h4>
    <pre class="code-block"><code>startingIndex = totalCheckboxes - numberOfCheckboxesToSelect</code></pre>
    <p>Then loop from <code>startingIndex</code> to <code>totalCheckboxes - 1</code>.</p>

    <h5>Example</h5>
    <p>Suppose total checkboxes = <code>7</code>.</p>
    <p>You want to select last <code>3</code> checkboxes.</p>

    <h5>Step 1</h5>
    <pre class="code-block"><code>7 - 3 = 4</code></pre>
    <p>So starting index = <code>4</code>.</p>

    <h5>Loop</h5>
    <pre class="code-block"><code>for(int i = 4; i &lt; 7; i++)
{
    checkboxes.get(i).click();
}</code></pre>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Unselect Already Selected Checkboxes</h4>
    <p>First check whether the checkbox is already selected. If it is selected, click it once to unselect it.</p>
    <pre class="code-block"><code>for(int i = 0; i &lt; checkboxes.size(); i++)
{
    if(checkboxes.get(i).isSelected())
    {
        checkboxes.get(i).click();    // Unselect checkbox
    }
}</code></pre>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "alert-variants": {
    title: "Alert Variants",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Alert Note</h4>
    <p><strong>Alert is not a webelement.</strong></p>
    <p>Selenium cannot handle an alert using normal element locators like XPath or CSS. First, we must switch Selenium control to the alert popup.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>1. Simple Alert</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>Alert alert = driver.switchTo().alert();

alert.accept();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>Alert</code> - Selenium interface used to handle popup alerts.</li>
      <li><code>alert</code> - Reference variable storing the alert popup.</li>
      <li><code>driver.switchTo()</code> - Changes Selenium control from webpage.</li>
      <li><code>alert()</code> - Switches control specifically to alert popup.</li>
      <li><code>accept()</code> - Clicks the OK button.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>2. Confirm Alert - OK</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>Alert alert = driver.switchTo().alert();

alert.accept();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>Alert</code> stores the confirm popup.</li>
      <li><code>switchTo().alert()</code> moves control to popup window.</li>
      <li><code>accept()</code> presses OK button.</li>
      <li>Used when user wants to continue the action.</li>
      <li>Example: "Do you want to delete file?"</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>3. Confirm Alert - Cancel</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>Alert alert = driver.switchTo().alert();

alert.dismiss();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>Alert</code> handles the confirm popup.</li>
      <li><code>switchTo().alert()</code> transfers control to alert.</li>
      <li><code>dismiss()</code> presses Cancel button.</li>
      <li>Used when user wants to cancel the action.</li>
      <li>Example: "Do you want to logout?"</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>4. Prompt Alert</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>Alert alert = driver.switchTo().alert();

alert.sendKeys("Jerish");

alert.accept();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>sendKeys()</code> enters text into alert textbox.</li>
      <li><code>"Jerish"</code> is the input value.</li>
      <li><code>accept()</code> clicks OK after entering text.</li>
      <li>Prompt alert contains textbox + buttons.</li>
      <li>Example: "Enter your username".</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>5. Timed Alert</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

Alert alert = wait.until(ExpectedConditions.alertIsPresent());

alert.accept();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>WebDriverWait</code> creates explicit wait object.</li>
      <li><code>Duration.ofSeconds(10)</code> sets maximum wait time.</li>
      <li><code>alertIsPresent()</code> checks whether alert appeared.</li>
      <li>Returned alert is stored in <code>alert</code>.</li>
      <li><code>accept()</code> clicks OK after alert appears.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Important Interview Question</h4>
    <p>We can handle all types of alerts using explicit wait. In this approach, we do not need to write <code>driver.switchTo().alert()</code> separately.</p>

    <h5>Handle Alert Using Explicit Wait</h5>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

Alert alert = wait.until(ExpectedConditions.alertIsPresent());

alert.accept();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>WebDriverWait</code> - Creates explicit wait object.</li>
      <li><code>Duration.ofSeconds(10)</code> - Maximum waiting time for alert.</li>
      <li><code>wait.until()</code> - Waits until condition becomes true.</li>
      <li><code>alertIsPresent()</code> - Checks whether alert popup appeared.</li>
      <li>Returned alert is stored inside <code>alert</code> variable.</li>
      <li><code>accept()</code> clicks OK button after alert appears.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "select-dropdown-help": {
    title: "Select Dropdown",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Select Dropdown</h4>
    <p>This is the normal HTML dropdown using the <code>&lt;select&gt;</code> tag.</p>
    <p>Every option inside a dropdown is a <strong>web element</strong>.</p>

    <h5>HTML</h5>
    <pre class="code-block"><code>&lt;select id="country"&gt;
    &lt;option&gt;Chennai&lt;/option&gt;
    &lt;option&gt;Delhi&lt;/option&gt;
&lt;/select&gt;</code></pre>

    <h5>How to Identify?</h5>
    <p>You will see <code>&lt;select&gt;</code> in HTML.</p>

    <h5>Syntax</h5>
    <pre class="code-block"><code>import org.openqa.selenium.support.ui.Select;

WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>import org.openqa.selenium.support.ui.Select</code> - Imports Select class package.</li>
      <li><code>WebElement dropdown</code> - Stores dropdown element into a variable.</li>
      <li><code>driver.findElement()</code> - Finds dropdown from webpage.</li>
      <li><code>By.id("country")</code> - Locates dropdown using id attribute.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object for dropdown handling.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Types of Select Methods</h4>

    <h5>1. selectByVisibleText()</h5>
    <pre class="code-block"><code>select.selectByVisibleText("India");</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>selectByVisibleText()</code> - Selects option using visible text.</li>
      <li><code>"India"</code> - Text displayed inside dropdown.</li>
      <li>Selenium checks the visible text and selects the matching option.</li>
      <li>Most commonly used dropdown method.</li>
      <li>Text must exactly match with dropdown option.</li>
    </ul>

    <h5>2. selectByValue()</h5>
    <pre class="code-block"><code>select.selectByValue("IN");</code></pre>
    <h5>HTML Example</h5>
    <pre class="code-block"><code>&lt;option value="IN"&gt;India&lt;/option&gt;</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>selectByValue()</code> - Selects option using value attribute.</li>
      <li><code>"IN"</code> - Value present inside HTML code.</li>
      <li>Selenium checks value attribute internally.</li>
      <li>Useful when visible text is dynamic.</li>
      <li>Value must exactly match with HTML attribute.</li>
    </ul>

    <h5>Select by Value and Select by Visible Text Difference</h5>
    <pre class="code-block"><code>&lt;option value="1"&gt;Male&lt;/option&gt;
&lt;option value="2"&gt;Female&lt;/option&gt;</code></pre>
    <h5>Using Value</h5>
    <pre class="code-block"><code>select.selectByValue("1");</code></pre>
    <p>Selects Male using hidden value.</p>
    <h5>Using Visible Text</h5>
    <pre class="code-block"><code>select.selectByVisibleText("Male");</code></pre>
    <p>Selects Male using displayed text.</p>

    <h5>3. selectByIndex()</h5>
    <pre class="code-block"><code>select.selectByIndex(1);</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>selectByIndex()</code> - Selects option using position number.</li>
      <li>Index starts from <code>0</code>.</li>
      <li>Selenium selects option based on dropdown order.</li>
    </ul>
    <pre class="code-block"><code>0 -> Select Country
1 -> India
2 -> USA</code></pre>
    <p><code>selectByIndex(1)</code> selects India.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Get All Options from Dropdown</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);

List&lt;WebElement&gt; options = select.getOptions();</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown element from webpage.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object.</li>
      <li><code>getOptions()</code> - Gets all dropdown options.</li>
      <li><code>List&lt;WebElement&gt;</code> - Stores all options inside list.</li>
      <li>Each option is stored as WebElement.</li>
    </ul>

    <h4>Print All Dropdown Options</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>for(WebElement op : options)
{
    System.out.println(op.getText());
}</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>for</code> loop - Used to read all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>getText()</code> - Gets visible text from option.</li>
      <li><code>System.out.println()</code> - Prints all dropdown values in console.</li>
    </ul>

    <h4>Get All Dropdown Options Using for Loop</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);

List&lt;WebElement&gt; options = select.getOptions();

for(int i=0; i&lt;options.size(); i++)
{
    System.out.println(options.get(i).getText());
}</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown element from webpage.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object.</li>
      <li><code>getOptions()</code> - Gets all dropdown options.</li>
      <li><code>options.size()</code> - Returns total number of options.</li>
      <li><code>for(int i=0; i&lt;options.size(); i++)</code> - Loops through all dropdown options.</li>
      <li><code>options.get(i)</code> - Gets option using index.</li>
      <li><code>getText()</code> - Gets visible text of option.</li>
      <li><code>System.out.println()</code> - Prints dropdown values in console.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "bootstrap-dropdown-help": {
    title: "Bootstrap Dropdown",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Bootstrap Dropdown</h4>
    <p>This is <strong>not</strong> a real <code>&lt;select&gt;</code> dropdown.</p>
    <p>It is created using:</p>
    <ul class="basic-help-list">
      <li><code>&lt;div&gt;</code></li>
      <li><code>&lt;ul&gt;</code></li>
      <li><code>&lt;li&gt;</code></li>
      <li>buttons</li>
      <li>CSS + JavaScript</li>
    </ul>

    <h5>HTML Example</h5>
    <pre class="code-block"><code>&lt;div class="dropdown"&gt;
    &lt;button&gt;Country&lt;/button&gt;
    &lt;ul&gt;
        &lt;li&gt;India&lt;/li&gt;
        &lt;li&gt;USA&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>

    <h5>Important</h5>
    <p><code>Select</code> class will <strong>not</strong> work because there is no <code>&lt;select&gt;</code> tag.</p>
    <p>Bootstrap and hidden dropdowns use XPath.</p>

    <h5>Select Single Option</h5>
    <pre class="code-block"><code>driver.findElement(By.id("bootstrap-dropdown-trigger")).click();

driver.findElement(By.xpath("//label[normalize-space()='London']")).click();</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown option.</li>
      <li><code>By.xpath()</code> - Locates option using XPath.</li>
      <li><code>//label[normalize-space()='London']</code> - Finds option whose visible text is London.</li>
      <li><code>click()</code> - Selects the dropdown option.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Select Multiple Options in Bootstrap Dropdown</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>List&lt;WebElement&gt; options = driver.findElements(
    By.xpath("//div[@id='bootstrap-dropdown-menu']//label")
);

for(WebElement op : options)
{
    String option = op.getText();

    if(option.equals("Chennai") ||
       option.equals("London") ||
       option.equals("Tokyo"))
    {
        op.click();
    }
}</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>for(WebElement op : options)</code> - Reads all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>op.getText()</code> - Gets visible text from dropdown option.</li>
      <li><code>String option</code> - Stores option text into variable.</li>
      <li><code>option.equals("Chennai")</code> - Checks whether option text is Chennai.</li>
      <li><code>||</code> - OR operator used to check multiple conditions.</li>
      <li><code>op.click()</code> - Selects matching dropdown option.</li>
      <li>Loop continues until all matching options are selected.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "hidden-dropdown-help": {
    title: "Hidden Dropdown",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Hidden Dropdown</h4>
    <p>Dropdown options are hidden initially.</p>
    <p>They appear only after mouse hover, typing, or clicking.</p>
    <p>Examples include auto-suggestion search, dynamic dropdown, and React dropdown.</p>

    <h5>Syntax</h5>
    <pre class="code-block"><code>driver.findElement(By.id("hidden-dropdown-control")).click();

driver.findElement(By.xpath("//div[@id='hidden-dropdown-options']//button[text()='Finance']")).click();</code></pre>

    <p>Hidden dropdowns use XPath because options are created or displayed only after an action.</p>
    <p>The other process follows the Bootstrap dropdown process.</p>

    <h5>Select Single Option</h5>
    <pre class="code-block"><code>driver.findElement(By.id("hidden-dropdown-control")).click();

driver.findElement(
    By.xpath("//div[@id='hidden-dropdown-options']//button[normalize-space()='Finance']")
).click();</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown option.</li>
      <li><code>By.xpath()</code> - Locates option using XPath.</li>
      <li><code>//button[normalize-space()='Finance']</code> - Finds option whose visible text is Finance.</li>
      <li><code>click()</code> - Selects the dropdown option.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Select Multiple Options in Hidden Dropdown</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>driver.findElement(By.id("hidden-dropdown-control")).click();

List&lt;WebElement&gt; options = driver.findElements(
    By.xpath("//div[@id='hidden-dropdown-options']//button")
);

for(WebElement op : options)
{
    String option = op.getText();

    if(option.equals("Finance") ||
       option.equals("HR") ||
       option.equals("Support"))
    {
        op.click();
    }
}</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>for(WebElement op : options)</code> - Reads all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>op.getText()</code> - Gets visible text from dropdown option.</li>
      <li><code>String option</code> - Stores option text into variable.</li>
      <li><code>option.equals("Finance")</code> - Checks whether option text is Finance.</li>
      <li><code>||</code> - OR operator used to check multiple conditions.</li>
      <li><code>op.click()</code> - Selects matching dropdown option.</li>
      <li>Loop continues until all matching options are selected.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Developer Tool Trick</h4>
    <p>If dropdown options disappear while inspecting:</p>
    <ol class="basic-help-list">
      <li>Open Developer Tools <code>F12</code>.</li>
      <li>Go to <strong>Event Listeners</strong>.</li>
      <li>Find <code>blur</code> or <code>focusout</code>.</li>
      <li>Remove/disable the blur event.</li>
      <li>Now dropdown stays visible.</li>
      <li>Then inspect element and get XPath easily.</li>
    </ol>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "autosuggest-dropdown-help": {
    title: "Auto-suggest Dropdown",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Auto-suggest Dropdown</h4>
    <p>An <strong>Auto Suggest Dropdown</strong> is a dropdown that shows suggestions automatically while typing in a textbox.</p>
    <p>Suggestions appear dynamically based on entered text.</p>
    <p>These dropdowns are commonly used in:</p>
    <ul class="basic-help-list">
      <li>Google Search</li>
      <li>Amazon Search</li>
      <li>Flight booking websites</li>
      <li>Location search</li>
    </ul>

    <h5>Example</h5>
    <p>When typing:</p>
    <pre class="code-block"><code>Ind</code></pre>

    <p>Suggestions appear automatically:</p>
    <pre class="code-block"><code>India
Indonesia
Indian food</code></pre>

    <p>This is called an <strong>Auto Suggest Dropdown</strong>.</p>

    <h5>Note</h5>
    <p>Taking XPath plays an important role here.</p>
    <p>Since when we click the dropdown, the option will disappear, it will be hard to take XPath.</p>
    <ol class="basic-help-list">
      <li>For those who cannot find the <code>blur</code> event, alternatively you can remove the one in <code>focusout</code>.</li>
      <li>Remove the <code>blur</code> property.</li>
    </ol>

    <h5>Select Single Option</h5>
    <pre class="code-block"><code>driver.findElement(By.id("autosuggest-input")).sendKeys("ind");

driver.findElement(
    By.xpath("//div[@id='autosuggest-list']//button[normalize-space()='India']")
).click();</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>sendKeys("ind")</code> - Types partial text in the textbox.</li>
      <li><code>findElement()</code> - Finds dropdown option.</li>
      <li><code>By.xpath()</code> - Locates option using XPath.</li>
      <li><code>//button[normalize-space()='India']</code> - Finds option whose visible text is India.</li>
      <li><code>click()</code> - Selects the dropdown option.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Select Multiple Options in Auto Suggest Dropdown</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>driver.findElement(By.id("autosuggest-input")).sendKeys("ind");

List&lt;WebElement&gt; options = driver.findElements(
    By.xpath("//div[@id='autosuggest-list']//button")
);

for(WebElement op : options)
{
    String option = op.getText();

    if(option.equals("India") ||
       option.equals("Indonesia") ||
       option.equals("Indore"))
    {
        op.click();
        break;
    }
}</code></pre>
    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>for(WebElement op : options)</code> - Reads all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>op.getText()</code> - Gets visible text from dropdown option.</li>
      <li><code>String option</code> - Stores option text into variable.</li>
      <li><code>option.equals("India")</code> - Checks whether option text is India.</li>
      <li><code>||</code> - OR operator used to check multiple conditions.</li>
      <li><code>op.click()</code> - Selects matching dropdown option.</li>
      <li><code>break</code> - Stops after selecting the first matching suggestion.</li>
    </ul>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "dropdown-box": {
    title: "Dropdown Box",
    infoHtml: `<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Dropdown Box</h4>
    <pre class="code-block"><code>Dropdown box
------------
1) Select dropdown
2) Bootstrap dropdown
3) Hidden dropdown
4) Auto-suggest dropdown</code></pre>
    <p>Every option inside a dropdown is a <strong>web element</strong>.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>1. Select Dropdown</h4>
    <p>This is the normal HTML dropdown using the <code>&lt;select&gt;</code> tag.</p>

    <h5>HTML</h5>
    <pre class="code-block"><code>&lt;select id="country"&gt;
    &lt;option&gt;Chennai&lt;/option&gt;
    &lt;option&gt;Delhi&lt;/option&gt;
&lt;/select&gt;</code></pre>

    <h5>How to Identify?</h5>
    <p>You will see <code>&lt;select&gt;</code> in HTML.</p>

    <h5>Syntax</h5>
    <pre class="code-block"><code>import org.openqa.selenium.support.ui.Select;

WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>import org.openqa.selenium.support.ui.Select</code> - Imports Select class package.</li>
      <li><code>WebElement dropdown</code> - Stores dropdown element into a variable.</li>
      <li><code>driver.findElement()</code> - Finds dropdown from webpage.</li>
      <li><code>By.id("country")</code> - Locates dropdown using id attribute.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object for dropdown handling.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Types of Select Methods</h4>

    <h5>1. selectByVisibleText()</h5>
    <pre class="code-block"><code>select.selectByVisibleText("India");</code></pre>
    <ul class="basic-help-list">
      <li><code>selectByVisibleText()</code> - Selects option using visible text.</li>
      <li><code>"India"</code> - Text displayed inside dropdown.</li>
      <li>Selenium checks the visible text and selects the matching option.</li>
      <li>Most commonly used dropdown method.</li>
      <li>Text must exactly match with dropdown option.</li>
    </ul>

    <h5>2. selectByValue()</h5>
    <pre class="code-block"><code>select.selectByValue("IN");</code></pre>
    <h5>HTML Example</h5>
    <pre class="code-block"><code>&lt;option value="IN"&gt;India&lt;/option&gt;</code></pre>
    <ul class="basic-help-list">
      <li><code>selectByValue()</code> - Selects option using value attribute.</li>
      <li><code>"IN"</code> - Value present inside HTML code.</li>
      <li>Selenium checks value attribute internally.</li>
      <li>Useful when visible text is dynamic.</li>
      <li>Value must exactly match with HTML attribute.</li>
    </ul>

    <h5>3. selectByIndex()</h5>
    <pre class="code-block"><code>select.selectByIndex(1);</code></pre>
    <ul class="basic-help-list">
      <li><code>selectByIndex()</code> - Selects option using position number.</li>
      <li>Index starts from <code>0</code>.</li>
      <li>Selenium selects option based on dropdown order.</li>
    </ul>
    <pre class="code-block"><code>0 -> Select Country
1 -> India
2 -> USA</code></pre>
    <p><code>selectByIndex(1)</code> selects India.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Select By Value vs Select By Visible Text</h4>
    <pre class="code-block"><code>&lt;option value="1"&gt;Male&lt;/option&gt;
&lt;option value="2"&gt;Female&lt;/option&gt;</code></pre>

    <h5>Using Value</h5>
    <pre class="code-block"><code>select.selectByValue("1");</code></pre>
    <p>Selects Male using hidden value.</p>

    <h5>Using Visible Text</h5>
    <pre class="code-block"><code>select.selectByVisibleText("Male");</code></pre>
    <p>Selects Male using displayed text.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Get All Options From Dropdown</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);

List&lt;WebElement&gt; options = select.getOptions();</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown element from webpage.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object.</li>
      <li><code>getOptions()</code> - Gets all dropdown options.</li>
      <li><code>List&lt;WebElement&gt;</code> - Stores all options inside list.</li>
      <li>Each option is stored as WebElement.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Print All Dropdown Options</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>for(WebElement op : options)
{
    System.out.println(op.getText());
}</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>for</code> loop - Used to read all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>getText()</code> - Gets visible text from option.</li>
      <li><code>System.out.println()</code> - Prints all dropdown values in console.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>Get All Dropdown Options Using For Loop</h4>
    <h5>Syntax</h5>
    <pre class="code-block"><code>WebElement dropdown = driver.findElement(By.id("country"));

Select select = new Select(dropdown);

List&lt;WebElement&gt; options = select.getOptions();

for(int i = 0; i &lt; options.size(); i++)
{
    System.out.println(options.get(i).getText());
}</code></pre>

    <h5>Explanation</h5>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown element from webpage.</li>
      <li><code>new Select(dropdown)</code> - Creates Select class object.</li>
      <li><code>getOptions()</code> - Gets all dropdown options.</li>
      <li><code>options.size()</code> - Returns total number of options.</li>
      <li><code>for(int i=0; i&lt;options.size(); i++)</code> - Loops through all dropdown options.</li>
      <li><code>options.get(i)</code> - Gets option using index.</li>
      <li><code>getText()</code> - Gets visible text of option.</li>
      <li><code>System.out.println()</code> - Prints dropdown values in console.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>2. Bootstrap Dropdown</h4>
    <p>This is <strong>not</strong> a real <code>&lt;select&gt;</code> dropdown.</p>
    <p>It is created using:</p>
    <ul class="basic-help-list">
      <li><code>&lt;div&gt;</code></li>
      <li><code>&lt;ul&gt;</code></li>
      <li><code>&lt;li&gt;</code></li>
      <li>buttons</li>
      <li>CSS + JavaScript</li>
    </ul>

    <h5>HTML Example</h5>
    <pre class="code-block"><code>&lt;div class="dropdown"&gt;
    &lt;button&gt;Country&lt;/button&gt;
    &lt;ul&gt;
        &lt;li&gt;India&lt;/li&gt;
        &lt;li&gt;USA&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>

    <h5>Important</h5>
    <p><code>Select</code> class will <strong>not</strong> work because there is no <code>&lt;select&gt;</code> tag.</p>
    <p>Bootstrap and hidden dropdowns use XPath.</p>

    <h5>Select Single Option</h5>
    <pre class="code-block"><code>driver.findElement(By.xpath("//input[@value='Java']")).click();</code></pre>
    <ul class="basic-help-list">
      <li><code>findElement()</code> - Finds dropdown option.</li>
      <li><code>By.xpath()</code> - Locates option using XPath.</li>
      <li><code>//input[@value='Java']</code> - Finds option whose value is Java.</li>
      <li><code>click()</code> - Selects the dropdown option.</li>
    </ul>

    <h5>Select Multiple Options in Bootstrap Dropdown</h5>
    <pre class="code-block"><code>for(WebElement op : options)
{
    String option = op.getText();

    if(option.equals("Java") ||
       option.equals("Python") ||
       option.equals("MySQL"))
    {
        op.click();
    }
}</code></pre>
    <ul class="basic-help-list">
      <li><code>for(WebElement op : options)</code> - Reads all dropdown options one by one.</li>
      <li><code>op</code> - Represents each dropdown option.</li>
      <li><code>op.getText()</code> - Gets visible text from dropdown option.</li>
      <li><code>String option</code> - Stores option text into variable.</li>
      <li><code>option.equals("Java")</code> - Checks whether option text is Java.</li>
      <li><code>||</code> - OR operator used to check multiple conditions.</li>
      <li><code>op.click()</code> - Selects matching dropdown option.</li>
      <li>Loop continues until all matching options are selected.</li>
    </ul>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>3. Hidden Dropdown</h4>
    <p>Dropdown options are hidden initially.</p>
    <p>They appear only after:</p>
    <ul class="basic-help-list">
      <li>mouse hover</li>
      <li>typing</li>
      <li>clicking</li>
    </ul>
    <p>Examples:</p>
    <ul class="basic-help-list">
      <li>Auto-suggestion search</li>
      <li>Dynamic dropdown</li>
      <li>React dropdown</li>
    </ul>

    <h5>Developer Tool Trick</h5>
    <p>If dropdown options disappear while inspecting:</p>
    <ol class="basic-help-list">
      <li>Open Developer Tools <code>F12</code>.</li>
      <li>Go to <strong>Event Listeners</strong>.</li>
      <li>Find <code>blur</code> or <code>focusout</code>.</li>
      <li>Remove/disable the blur event.</li>
      <li>Now dropdown stays visible.</li>
      <li>Then inspect element and get XPath easily.</li>
    </ol>

    <p>The other process follows the Bootstrap dropdown process.</p>
  </div>
</section>

<section class="basic-help-section">
  <div class="basic-help-box">
    <h4>4. Auto-suggest Dropdown</h4>
    <p>An <strong>Auto Suggest Dropdown</strong> is a dropdown that shows suggestions automatically while typing in a textbox.</p>
    <p>Suggestions appear dynamically based on entered text.</p>
    <p>These dropdowns are commonly used in:</p>
    <ul class="basic-help-list">
      <li>Google Search</li>
      <li>Amazon Search</li>
      <li>Flight booking websites</li>
      <li>Location search</li>
    </ul>

    <h5>Example</h5>
    <p>When typing:</p>
    <pre class="code-block"><code>Ind</code></pre>

    <p>Suggestions appear automatically:</p>
    <pre class="code-block"><code>India
Indonesia
Indian food</code></pre>

    <p>This is called an <strong>Auto Suggest Dropdown</strong>.</p>

    <h5>Note</h5>
    <p>Taking XPath plays an important role here.</p>
    <p>Since when we click the dropdown, the option will disappear, it will be hard to take XPath.</p>
    <ol class="basic-help-list">
      <li>For those who cannot find the <code>blur</code> event, alternatively you can remove the one in <code>focusout</code>.</li>
      <li>Remove the <code>blur</code> property.</li>
    </ol>
  </div>
</section>`,
    syntax: "",
    locator: { xpath: "", css: "" },
    fullCode: ""
  },
  "modal-dialog": {
    title: "Modal Dialog",
    syntax: `driver.findElement(By.id("open-modal")).click();
WebElement modal = driver.findElement(By.id("modal-backdrop"));
boolean visible = modal.isDisplayed();
driver.findElement(By.id("close-modal")).click();`,
    locator: {
      xpath: `//button[@id='open-modal']
//div[@id='modal-backdrop']
//button[@id='close-modal']`,
      css: `#open-modal
#modal-backdrop
#close-modal`
    },
    fullCode: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class ModalDialogExample {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            driver.get("file:///C:/Users/hello/OneDrive/Documents/New%20project/index.html");
            driver.findElement(By.id("username")).sendKeys("JERISH");
            driver.findElement(By.id("password")).sendKeys("Jerish@123");
            driver.findElement(By.id("login-button")).click();

            driver.get("file:///C:/Users/hello/OneDrive/Documents/New%20project/checkbox-alerts.html");

            driver.findElement(By.id("open-modal")).click();
            WebElement modal = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("modal-backdrop")));
            System.out.println("Modal visible: " + modal.isDisplayed());

            driver.findElement(By.id("close-modal")).click();
            wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("modal-backdrop")));
        } finally {
            driver.quit();
        }
    }
}`
  }
};

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const requireAuth = () => {
  if (!protectedPages.includes(currentPage)) {
    return true;
  }

  if (sessionStorage.getItem("seleniumLabAuth") === "true") {
    return true;
  }

  sessionStorage.removeItem("seleniumLabAuth");
  window.location.href = "index.html";
  return false;
};

const logout = () => {
  sessionStorage.removeItem("seleniumLabAuth");
  window.location.href = "index.html";
};

const findPageMatch = (query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return null;
  }

  return pageRegistry.find(
    (page) =>
      page.label.toLowerCase().includes(normalizedQuery) ||
      page.file.toLowerCase().includes(normalizedQuery)
  );
};

const setStatus = (id, text, level = "") => {
  const node = document.getElementById(id);

  if (!node) {
    return;
  }

  node.textContent = text;
  node.className = "status-message";

  if (level) {
    node.classList.add(level);
  }
};

const updateModalLock = () => {
  const hasOpenModal = Boolean(document.querySelector(".modal-backdrop:not(.hidden)"));
  document.body.classList.toggle("modal-open", hasOpenModal);
};

const openModal = (modal) => {
  modal?.classList.remove("hidden");
  updateModalLock();
};

const closeModal = (modal) => {
  modal?.classList.add("hidden");
  updateModalLock();
};

const javaKeywordTokens = new Set([
  "class",
  "public",
  "private",
  "protected",
  "static",
  "final",
  "try",
  "catch",
  "finally",
  "if",
  "else",
  "for",
  "while",
  "return",
  "new",
  "import",
  "package",
  "true",
  "false",
  "null"
]);

const javaTypeTokens = new Set([
  "Alert",
  "By",
  "ChromeDriver",
  "Duration",
  "ExpectedConditions",
  "JavascriptExecutor",
  "JavascriptExecutor",
  "List",
  "String",
  "WebDriver",
  "WebDriverWait",
  "WebElement",
  "boolean",
  "double",
  "int",
  "void"
]);

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);

const highlightPlainJava = (segment) => {
  let output = "";
  let lastIndex = 0;
  const tokenPattern = /\b[A-Za-z_]\w*\b|\b\d+(?:\.\d+)?\b/g;
  let match = tokenPattern.exec(segment);

  while (match) {
    const token = match[0];
    const start = match.index;
    const end = start + token.length;
    const afterToken = segment.slice(end).match(/^\s*/)?.[0] || "";
    const nextChar = segment[end + afterToken.length] || "";
    let tokenClass = "code-variable";

    output += escapeHtml(segment.slice(lastIndex, start));

    if (/^\d/.test(token)) {
      tokenClass = "code-number";
    } else if (javaKeywordTokens.has(token)) {
      tokenClass = "code-keyword";
    } else if (javaTypeTokens.has(token) || /^[A-Z][A-Za-z0-9_]*$/.test(token)) {
      tokenClass = "code-type";
    } else if (nextChar === "(") {
      tokenClass = "code-method";
    }

    output += `<span class="${tokenClass}">${escapeHtml(token)}</span>`;
    lastIndex = end;
    match = tokenPattern.exec(segment);
  }

  return output + escapeHtml(segment.slice(lastIndex));
};

const highlightJavaCode = (code) => {
  let output = "";
  let lastIndex = 0;
  const protectedPattern = /\/\/.*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;
  let match = protectedPattern.exec(code);

  while (match) {
    const value = match[0];
    output += highlightPlainJava(code.slice(lastIndex, match.index));
    output += `<span class="${value.startsWith("//") || value.startsWith("/*") ? "code-comment" : "code-string"}">${escapeHtml(value)}</span>`;
    lastIndex = match.index + value.length;
    match = protectedPattern.exec(code);
  }

  return output + highlightPlainJava(code.slice(lastIndex));
};

const highlightCodeBlocks = (root = document) => {
  root.querySelectorAll(".code-block code").forEach((node) => {
    const rawCode = node.dataset.rawCode || node.textContent;
    node.dataset.rawCode = rawCode;
    node.innerHTML = highlightJavaCode(rawCode);
  });
};

window.highlightCodeBlocks = highlightCodeBlocks;

const initLoginPage = () => {
  const form = document.getElementById("login-form");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      setStatus("login-status", "Enter username and password.", "danger");
      return;
    }

    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      sessionStorage.setItem("seleniumLabAuth", "true");
      window.location.href = "dashboard.html";
      return;
    }

    setStatus("login-status", "Invalid credentials. Check the username and password.", "danger");
  });
};

const initPasswordToggles = () => {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) {
        return;
      }

      const showPassword = input.type === "password";
      input.type = showPassword ? "text" : "password";
      button.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
      button.setAttribute("aria-pressed", showPassword ? "true" : "false");
      button.classList.toggle("is-active", showPassword);
    });
  });
};

const initGlobalActions = () => {
  document.querySelectorAll("[data-logout]").forEach((button) => {
    button.addEventListener("click", logout);
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-tab-group]");
      const targetId = button.dataset.target;

      group?.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
      group?.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(targetId)?.classList.add("active");
    });
  });
};

const initSharedNavigation = () => {
  if (!protectedPages.includes(currentPage)) {
    return;
  }

  const navShell = document.querySelector(".nav-shell");
  const currentIndex = pageRegistry.findIndex((page) => page.file === currentPage);

  if (!navShell || currentIndex === -1) {
    return;
  }

  const toolbar = document.createElement("section");
  toolbar.className = "subnav-toolbar panel";

  const previousPage = pageRegistry[currentIndex - 1];
  const nextPage = pageRegistry[currentIndex + 1];

  toolbar.innerHTML = `
    <div class="subnav-pager">
      ${
        previousPage
          ? `<a class="button secondary" href="${previousPage.file}">Back: ${previousPage.label}</a>`
          : `<span class="button secondary is-static" aria-disabled="true">Back</span>`
      }
      ${
        nextPage
          ? `<a class="button primary" href="${nextPage.file}">Next: ${nextPage.label}</a>`
          : `<span class="button primary is-static" aria-disabled="true">Next</span>`
      }
    </div>
    <form class="search-form" id="page-search-form">
      <input id="page-search-input" name="pageSearch" list="page-search-options" type="search" placeholder="Search labs or pages" autocomplete="off" />
      <datalist id="page-search-options">
        ${pageRegistry.map((page) => `<option value="${page.label}"></option>`).join("")}
      </datalist>
      <button class="button secondary" type="submit">Go</button>
    </form>
  `;

  navShell.insertAdjacentElement("afterend", toolbar);

  const searchForm = document.getElementById("page-search-form");
  const searchInput = document.getElementById("page-search-input");

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const match = findPageMatch(searchInput.value);

    if (match) {
      window.location.href = match.file;
      return;
    }

    searchInput.value = "";
    searchInput.placeholder = "No match found. Try alerts, frames, dates...";
  });

  if (currentPage === "dashboard.html") {
    const cards = Array.from(document.querySelectorAll(".topic-link"));

    searchInput?.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      cards.forEach((card) => {
        const matches = !query || card.textContent.toLowerCase().includes(query);
        card.classList.toggle("hidden", !matches);
      });
    });
  }
};

const initCheckboxAlertsPage = () => {
  document.getElementById("select-all-checkboxes")?.addEventListener("click", () => {
    document.querySelectorAll(".feature-checkbox").forEach((checkbox) => {
      checkbox.checked = true;
    });
    setStatus("checkbox-status", "All checkboxes selected.", "success");
  });

  document.getElementById("clear-all-checkboxes")?.addEventListener("click", () => {
    document.querySelectorAll(".feature-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
    });
    setStatus("checkbox-status", "All checkboxes cleared.", "warning");
  });

  document.getElementById("simple-alert-button")?.addEventListener("click", () => {
    window.alert("Simple alert displayed.");
    setStatus("alert-status", "Simple alert handled.", "success");
  });

  document.getElementById("confirm-alert-button")?.addEventListener("click", () => {
    const accepted = window.confirm("Do you want to accept the confirm alert?");
    setStatus("alert-status", accepted ? "Confirm accepted." : "Confirm dismissed.", "warning");
  });

  document.getElementById("prompt-alert-button")?.addEventListener("click", () => {
    const value = window.prompt("Enter tester name", "Jerish tester");
    setStatus("alert-status", value ? `Prompt captured: ${value}` : "Prompt dismissed.", "success");
  });

  document.getElementById("timed-alert-button")?.addEventListener("click", () => {
    setStatus("alert-status", "Waiting for delayed alert...", "warning");
    window.setTimeout(() => {
      window.alert("Delayed alert appeared after 2 seconds.");
      setStatus("alert-status", "Delayed alert handled.", "success");
    }, 2000);
  });

  const modal = document.getElementById("modal-backdrop");
  document.getElementById("open-modal")?.addEventListener("click", () => {
    openModal(modal);
    setStatus("modal-status", "Modal opened.", "success");
  });
  document.getElementById("close-modal")?.addEventListener("click", () => {
    closeModal(modal);
    setStatus("modal-status", "Modal closed.", "warning");
  });
};

const initHelpCenter = () => {
  const helpBackdrop = document.getElementById("help-backdrop");
  const helpTitle = document.getElementById("help-title");
  const helpSyntax = document.getElementById("help-syntax");
  const helpLocator = document.getElementById("help-locator");
  const helpFullCode = document.getElementById("help-full-code");
  const helpInfo = document.getElementById("help-info-content");
  const helpButtons = document.querySelectorAll(".help-button");
  const helpTabButtons = document.querySelectorAll(".help-tab-button");
  const locatorTabButtons = document.querySelectorAll(".locator-tab-button");
  const helpPanels = document.querySelectorAll(".help-panel");
  const helpMainTabRow = helpBackdrop?.querySelector(".modal-card > .help-tab-row");
  let currentTopic = null;
  let currentLocatorMode = "xpath";

  if (!helpBackdrop || !helpButtons.length) {
    return;
  }

  const renderHelp = () => {
    const content = helpContent[currentTopic];

    if (!content) {
      return;
    }

    helpTitle.textContent = content.title;
    if (content.infoHtml) {
      helpMainTabRow?.classList.add("hidden");
      helpInfo?.classList.remove("hidden");
      if (helpInfo) {
        helpInfo.innerHTML = content.infoHtml;
        highlightCodeBlocks(helpInfo);
      }
      helpSyntax?.closest("pre")?.classList.add("hidden");
      helpLocator.textContent = "";
      helpFullCode.textContent = "";
      return;
    }

    helpMainTabRow?.classList.remove("hidden");
    helpInfo?.classList.add("hidden");
    if (helpInfo) {
      helpInfo.innerHTML = "";
    }
    helpSyntax?.closest("pre")?.classList.remove("hidden");
    helpSyntax.textContent = content.syntax;
    helpLocator.textContent = content.locator[currentLocatorMode];
    helpFullCode.textContent = content.fullCode;
    [helpSyntax, helpLocator, helpFullCode].forEach((node) => {
      if (node) {
        node.dataset.rawCode = node.textContent;
      }
    });
    highlightCodeBlocks(helpBackdrop);
  };

  const openHelp = (topic) => {
    currentTopic = topic;
    currentLocatorMode = "xpath";
    renderHelp();

    helpTabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.helpTab === "syntax");
    });

    helpPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === "help-panel-syntax");
    });

    locatorTabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.locatorTab === "xpath");
    });

    openModal(helpBackdrop);
  };

  const closeHelp = () => {
    closeModal(helpBackdrop);
  };

  helpButtons.forEach((button) => {
    button.addEventListener("click", () => openHelp(button.dataset.helpTopic));
  });

  document.getElementById("close-help")?.addEventListener("click", closeHelp);

  helpTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      helpTabButtons.forEach((item) => item.classList.remove("active"));
      helpPanels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(`help-panel-${button.dataset.helpTab}`)?.classList.add("active");
    });
  });

  locatorTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLocatorMode = button.dataset.locatorTab;
      locatorTabButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderHelp();
    });
  });
};

const initDropdownsTablesPage = () => {
  const browserSelect = document.getElementById("single-select");
  browserSelect?.addEventListener("change", () => {
    if (!browserSelect.value) {
      return;
    }
  });

  const bootstrapTrigger = document.getElementById("bootstrap-dropdown-trigger");
  const bootstrapMenu = document.getElementById("bootstrap-dropdown-menu");
  const setBootstrapOpen = (isOpen) => {
    bootstrapMenu?.classList.toggle("is-open", isOpen);
    bootstrapMenu?.setAttribute("aria-hidden", String(!isOpen));
    bootstrapTrigger?.setAttribute("aria-expanded", String(isOpen));
  };

  const commitBootstrapDropdown = () => {
    const values = Array.from(bootstrapMenu?.querySelectorAll("input:checked") || []).map((input) => input.value);
    const label = values.length ? values.join(", ") : "None";
    document.getElementById("bootstrap-dropdown-value").textContent = label;
    if (bootstrapTrigger) {
      bootstrapTrigger.textContent = values.length ? label : "Select places";
    }
    setBootstrapOpen(false);
  };

  bootstrapTrigger?.addEventListener("click", () => {
    setBootstrapOpen(!bootstrapMenu?.classList.contains("is-open"));
  });

  document.getElementById("bootstrap-dropdown-enter")?.addEventListener("click", commitBootstrapDropdown);

  bootstrapMenu?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitBootstrapDropdown();
    }
  });

  document.addEventListener("click", (event) => {
    if (!bootstrapMenu?.classList.contains("is-open")) {
      return;
    }

    if (!event.target.closest("#bootstrap-dropdown-menu, #bootstrap-dropdown-trigger")) {
      setBootstrapOpen(false);
    }
  });

  const hiddenDropdown = document.getElementById("hidden-dropdown-box");
  const hiddenControl = document.getElementById("hidden-dropdown-control");
  const hiddenDropdownValues = ["Finance", "HR", "Sales", "Support"];
  let hiddenOptions = null;

  const removeHiddenOptions = () => {
    hiddenOptions?.remove();
    hiddenOptions = null;
  };

  const createHiddenOptions = () => {
    if (!hiddenDropdown || hiddenOptions) {
      return hiddenOptions;
    }

    hiddenOptions = document.createElement("div");
    hiddenOptions.className = "hidden-dropdown-options";
    hiddenOptions.id = "hidden-dropdown-options";
    hiddenOptions.setAttribute("role", "listbox");
    hiddenOptions.setAttribute("aria-hidden", "false");

    hiddenDropdownValues.forEach((value) => {
      const option = document.createElement("button");
      option.type = "button";
      option.setAttribute("role", "option");
      option.dataset.value = value;
      option.textContent = value;
      option.addEventListener("mousedown", (event) => {
        event.preventDefault();
      });
      option.addEventListener("click", () => {
        document.getElementById("hidden-dropdown-value").textContent = value;
        setHiddenDropdownOpen(false);
      });
      hiddenOptions.appendChild(option);
    });

    hiddenDropdown.appendChild(hiddenOptions);
    return hiddenOptions;
  };

  const setHiddenDropdownOpen = (isOpen) => {
    hiddenDropdown?.classList.toggle("is-open", isOpen);
    hiddenControl?.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      createHiddenOptions()?.setAttribute("aria-hidden", "false");
      return;
    }

    hiddenOptions?.setAttribute("aria-hidden", "true");
    removeHiddenOptions();
  };

  hiddenControl?.addEventListener("click", () => {
    setHiddenDropdownOpen(!hiddenDropdown?.classList.contains("is-open"));
    hiddenControl.focus();
  });

  hiddenControl?.addEventListener("blur", () => {
    setHiddenDropdownOpen(false);
  });

  const suggestions = [
    "Agra",
    "Ahmedabad",
    "Amsterdam",
    "Argentina",
    "India",
    "Indonesia",
    "Indore",
    "Indianapolis",
    "Canada",
    "Cambodia",
    "Cameroon",
    "Canberra",
    "Cape Town",
    "Australia",
    "Austria",
    "Auckland",
    "Germany",
    "Ghana",
    "Greece",
    "Japan",
    "Jamaica",
    "Jordan",
    "China",
    "Chile",
    "Chennai",
    "Chicago",
    "Brazil",
    "Belgium",
    "Bengaluru",
    "Bangkok",
    "France",
    "Finland",
    "Florida",
    "London",
    "Los Angeles",
    "Singapore",
    "San Francisco",
    "San Jose",
    "South Africa",
    "South Korea",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Sri Lanka",
    "Switzerland",
    "Sweden",
    "Spain",
    "Mexico",
    "Malaysia",
    "Nepal",
    "Netherlands",
    "New Delhi",
    "New York",
    "New Zealand",
    "Norway",
    "Paris",
    "Portugal",
    "Thailand",
    "Tokyo",
    "Vietnam"
  ];
  const input = document.getElementById("autosuggest-input");
  const list = document.getElementById("autosuggest-list");

  const closeAutosuggest = () => {
    if (!list) {
      return;
    }

    list.innerHTML = "";
    list.classList.add("hidden");
  };

  const selectAutosuggestValue = (item) => {
    if (!input) {
      return;
    }

    input.value = item;
    closeAutosuggest();
    setStatus("autosuggest-status", `Auto-suggest selected: ${item}`, "success");
  };

  input?.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    list.innerHTML = "";

    if (!query) {
      closeAutosuggest();
      return;
    }

    const matches = suggestions.filter((item) => item.toLowerCase().includes(query));
    matches.forEach((item) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "button secondary";
      option.textContent = item;
      option.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        selectAutosuggestValue(item);
      });
      list.appendChild(option);
    });

    list.classList.toggle("hidden", matches.length === 0);
  });

  input?.addEventListener("blur", () => {
    closeAutosuggest();
  });

  input?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAutosuggest();
    }
  });

  const staticTableBody = document.querySelector("#static-table tbody");

  if (staticTableBody) {
    shuffleArray(Array.from(staticTableBody.rows)).forEach((row, index) => {
      row.cells[0].textContent = String(index + 1);
      staticTableBody.appendChild(row);
    });
  }

};

const initPaginationPage = () => {
  const data = [
    [1, "TC001", "Login Valid Credentials", 1, 28, "Passed"],
    [2, "TC002", "Login Invalid Password", 2, 34, "Passed"],
    [3, "TC003", "Create Account", 1, 52, "Blocked"],
    [4, "TC004", "Delete User", 3, 41, "Passed"],
    [5, "TC005", "Role Dropdown", 2, 37, "Failed"],
    [6, "TC006", "Alert Confirm", 1, 25, "Passed"],
    [7, "TC007", "Nested iFrame Text", 2, 46, "Passed"],
    [8, "TC008", "Upload Resume", 3, 63, "Blocked"],
    [9, "TC009", "Shadow DOM Value", 2, 39, "Passed"],
    [10, "TC010", "Date Picker Range", 1, 71, "Failed"],
    [11, "TC011", "Pagination Page 2", 3, 44, "Passed"],
    [12, "TC012", "SVG Chart Click", 2, 32, "Passed"],
    [13, "TC013", "Date Picker Month", 1, 56, "Passed"],
    [14, "TC014", "Mouse Hover Menu", 3, 29, "Passed"],
    [15, "TC015", "Drag And Drop Card", 2, 67, "Blocked"],
    [16, "TC016", "Keyboard Shortcut", 1, 36, "Passed"],
    [17, "TC017", "New Window Title", 3, 48, "Failed"],
    [18, "TC018", "File Upload Validation", 2, 54, "Passed"],
    [19, "TC019", "Broken Link Check", 1, 73, "Blocked"],
    [20, "TC020", "Shadow Input Value", 3, 43, "Passed"]
  ];

  const rowsPerPage = 4;
  const randomizedData = shuffleArray(data);
  let page = 1;

  const render = () => {
    const tbody = document.getElementById("pagination-body");
    const pager = document.getElementById("pagination-controls");
    const currentPageLabel = document.getElementById("current-page-label");

    if (!tbody || !pager || !currentPageLabel) {
      return;
    }

    const start = (page - 1) * rowsPerPage;
    const items = randomizedData.slice(start, start + rowsPerPage);

    tbody.innerHTML = items
      .map(
        (item, index) =>
          `<tr><td>${start + index + 1}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td><td>${item[4]}</td><td>${item[5]}</td></tr>`
      )
      .join("");

    pager.innerHTML = "";
    Array.from({ length: Math.ceil(randomizedData.length / rowsPerPage) }, (_, index) => index + 1).forEach((number) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `button secondary ${number === page ? "active" : ""}`;
      button.textContent = String(number);
      button.addEventListener("click", () => {
        page = number;
        render();
      });
      pager.appendChild(button);
    });

    currentPageLabel.textContent = String(page);
  };

  render();
};

const initDatePage = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const formatDate = (year, month, day) => {
    const monthValue = String(month + 1).padStart(2, "0");
    const dayValue = String(day).padStart(2, "0");
    return `${dayValue}/${monthValue}/${year}`;
  };

  const setupTableDatePicker = ({
    inputId,
    calendarId,
    titleId,
    bodyId,
    previousId,
    nextId,
    resultId,
    clearId,
    tableMode = true,
    triggerId = null
  }) => {
    const dateInput = document.getElementById(inputId);
    const calendar = document.getElementById(calendarId);
    const calendarTitle = document.getElementById(titleId);
    const calendarMonthLabel = document.getElementById(`${calendarId}-month`);
    const calendarYearSelect = document.getElementById(`${calendarId}-year`);
    const calendarBody = document.getElementById(bodyId);
    const previousButton = document.getElementById(previousId);
    const nextButton = document.getElementById(nextId);
    const enteredDateValue = document.getElementById(resultId);
    const clearButton = document.getElementById(clearId);
    const triggerButton = triggerId ? document.getElementById(triggerId) : null;
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    let visibleMonth = todayMonth;
    let visibleYear = todayYear;

    if (!dateInput || !calendar || (!calendarTitle && (!calendarMonthLabel || !calendarYearSelect)) || !calendarBody) {
      return;
    }

    if (calendarYearSelect) {
      const startYear = todayYear - 80;
      const endYear = todayYear + 20;
      calendarYearSelect.innerHTML = "";

      for (let year = startYear; year <= endYear; year += 1) {
        const option = document.createElement("option");
        option.value = String(year);
        option.textContent = String(year);
        calendarYearSelect.appendChild(option);
      }
    }

    const renderCalendar = () => {
      const firstDay = new Date(visibleYear, visibleMonth, 1).getDay();
      const daysInMonth = new Date(visibleYear, visibleMonth + 1, 0).getDate();
      let currentDay = 1;

      if (calendarTitle) {
        calendarTitle.textContent = `${monthNames[visibleMonth]} ${visibleYear}`;
      }

      if (calendarMonthLabel && calendarYearSelect) {
        calendarMonthLabel.textContent = monthNames[visibleMonth];
        calendarYearSelect.value = String(visibleYear);
      }

      calendarBody.innerHTML = "";

      if (!tableMode) {
        Array.from({ length: firstDay }).forEach(() => {
          const blank = document.createElement("span");
          blank.className = "calendar-empty";
          calendarBody.appendChild(blank);
        });

        Array.from({ length: daysInMonth }, (_, index) => index + 1).forEach((day) => {
          const dayButton = document.createElement("button");
          dayButton.type = "button";
          dayButton.className = "calendar-day";
          dayButton.textContent = String(day);

          if (visibleYear === todayYear && visibleMonth === todayMonth && day === todayDay) {
            dayButton.classList.add("highlighted");
          }

          dayButton.addEventListener("click", () => {
            dateInput.value = formatDate(visibleYear, visibleMonth, day);
            if (enteredDateValue) {
              enteredDateValue.textContent = dateInput.value;
            }
            calendar.classList.add("hidden");
          });

          calendarBody.appendChild(dayButton);
        });
        return;
      }

      for (let rowIndex = 0; rowIndex < 6; rowIndex += 1) {
        const row = document.createElement("tr");

        for (let colIndex = 0; colIndex < 7; colIndex += 1) {
          const cell = document.createElement("td");

          if ((rowIndex === 0 && colIndex < firstDay) || currentDay > daysInMonth) {
            cell.className = "calendar-empty";
          } else {
            cell.className = "calendar-cell";
            const dayButton = document.createElement("button");
            dayButton.type = "button";
            dayButton.className = "calendar-day";
            dayButton.textContent = String(currentDay);

            if (visibleYear === todayYear && visibleMonth === todayMonth && currentDay === todayDay) {
              dayButton.classList.add("highlighted");
            }

            const selectedDay = currentDay;
            const selectDate = () => {
              dateInput.value = formatDate(visibleYear, visibleMonth, selectedDay);
              if (enteredDateValue) {
                enteredDateValue.textContent = dateInput.value;
              }
              calendar.classList.add("hidden");
            };

            dayButton.addEventListener("click", selectDate);
            cell.appendChild(dayButton);

            currentDay += 1;
          }

          row.appendChild(cell);
        }

        calendarBody.appendChild(row);
      }
    };

    const changeMonth = (step) => {
      visibleMonth += step;

      if (visibleMonth < 0) {
        visibleMonth = 11;
        visibleYear -= 1;
      }

      if (visibleMonth > 11) {
        visibleMonth = 0;
        visibleYear += 1;
      }

      renderCalendar();
    };

    dateInput.addEventListener("focus", () => {
      calendar.classList.remove("hidden");
      renderCalendar();
    });

    dateInput.addEventListener("click", () => {
      calendar.classList.remove("hidden");
      renderCalendar();
    });

    triggerButton?.addEventListener("click", () => {
      calendar.classList.toggle("hidden");
      renderCalendar();
      dateInput.focus();
    });

    dateInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (enteredDateValue) {
          enteredDateValue.textContent = dateInput.value.trim() || "-";
        }
        calendar.classList.add("hidden");
        dateInput.blur();
      }
    });

    previousButton?.addEventListener("click", () => changeMonth(-1));
    nextButton?.addEventListener("click", () => changeMonth(1));
    calendarYearSelect?.addEventListener("change", () => {
      visibleYear = Number(calendarYearSelect.value);
      renderCalendar();
    });

    clearButton?.addEventListener("click", () => {
      dateInput.value = "";
      if (enteredDateValue) {
        enteredDateValue.textContent = "-";
      }
      calendar.classList.add("hidden");
    });

    document.addEventListener("pointerdown", (event) => {
      if (!calendar.contains(event.target) && event.target !== dateInput) {
        if (!triggerButton || event.target !== triggerButton) {
          calendar.classList.add("hidden");
        }
      }
    });
  };

  setupTableDatePicker({
    inputId: "simple-date-input",
    calendarId: "simple-calendar",
    titleId: "calendar-title",
    bodyId: "calendar-body",
    previousId: "calendar-prev",
    nextId: "calendar-next",
    resultId: "entered-date-value",
    clearId: "clear-simple-date",
    tableMode: false
  });

  setupTableDatePicker({
    inputId: "table-date-input",
    calendarId: "table-calendar",
    titleId: "table-calendar-title",
    bodyId: "table-calendar-body",
    previousId: "table-calendar-prev",
    nextId: "table-calendar-next",
    resultId: "entered-table-date-value",
    clearId: "clear-table-date"
  });

  setupTableDatePicker({
    inputId: "dob-date-input",
    calendarId: "dob-calendar",
    titleId: "dob-calendar-title",
    bodyId: "dob-calendar-body",
    previousId: "dob-calendar-prev",
    nextId: "dob-calendar-next",
    resultId: "entered-dob-date-value",
    clearId: "clear-dob-date",
    tableMode: false,
    triggerId: "dob-calendar-button"
  });
};

const initMousePage = () => {
  const hoverBox = document.getElementById("hover-box");
  hoverBox?.addEventListener("mouseenter", () => {
    document.getElementById("hover-result").textContent = "Hover detected.";
  });

  document.getElementById("double-click-box")?.addEventListener("dblclick", () => {
    setStatus("mouse-status", "Double click captured.", "success");
  });

  const contextTarget = document.getElementById("context-target");
  const menu = document.getElementById("custom-context-menu");

  contextTarget?.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    menu.style.left = `${event.pageX}px`;
    menu.style.top = `${event.pageY}px`;
    menu.classList.remove("hidden");
    setStatus("mouse-status", "Context menu opened.", "warning");
  });

  document.addEventListener("click", () => {
    menu?.classList.add("hidden");
  });

  const dragItem = document.getElementById("drag-source");
  const dropZone = document.getElementById("drop-target");

  dragItem?.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "drag-source");
  });

  dropZone?.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
  });

  dropZone?.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
  });

  dropZone?.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");
    const dragged = document.getElementById(event.dataTransfer.getData("text/plain"));
    if (dragged) {
      dropZone.textContent = "";
      dropZone.appendChild(dragged);
      setStatus("mouse-status", "Drag and drop succeeded.", "success");
    }
  });
};

const initKeyboardPage = () => {
  document.getElementById("keyboard-input")?.addEventListener("keydown", (event) => {
    document.getElementById("keyboard-log").textContent = `Last keydown: ${event.key}`;
  });

  document.getElementById("range-slider")?.addEventListener("input", (event) => {
    document.getElementById("slider-value").textContent = event.target.value;
  });

  document.getElementById("open-child-window")?.addEventListener("click", () => {
    window.open("new-tab.html", "_blank");
  });
};

const initJsPage = () => {
  const searchInput = document.getElementById("js-search-input");
  const searchButton = document.getElementById("js-search-button");

  const handleJsExecutorSearch = () => {
    const query = searchInput?.value.trim() || "";

    if (!query) {
      setStatus("js-search-status", "Please enter a value before searching.", "danger");
      document.getElementById("js-search-status")?.classList.add("js-search-status");
      return;
    }

    setStatus("js-search-status", "Search successful", "success");
    document.getElementById("js-search-status")?.classList.add("js-search-status");
  };

  window.handleJsExecutorSearch = handleJsExecutorSearch;
  searchButton?.addEventListener("click", handleJsExecutorSearch);

  const fileInput = document.getElementById("file-upload");
  const uploadList = document.getElementById("upload-list");
  const renderUploadList = (input) => {
    const names = Array.from(input?.files || []).map((file) => file.name);

    if (!uploadList) {
      return;
    }

    uploadList.innerHTML = "";

    if (!names.length) {
      uploadList.innerHTML = '<p class="upload-empty">No files selected yet.</p>';
      return;
    }

    names.forEach((name) => {
      const item = document.createElement("p");
      item.className = "upload-file-name";
      item.textContent = name;
      uploadList.appendChild(item);
    });
  };

  window.renderUploadList = renderUploadList;
  fileInput?.addEventListener("change", () => {
    renderUploadList(fileInput);
  });

};

const initDataDrivenPage = () => {
  const form = document.getElementById("interest-form");
  const status = document.getElementById("interest-status");
  const interestResult = document.getElementById("interest-result");
  const totalResult = document.getElementById("total-result");

  if (!form || !status || !interestResult || !totalResult) {
    return;
  }

  const formatCurrency = (value) => `Rs ${value.toFixed(2)}`;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = document.querySelector('input[name="interestType"]:checked')?.value || "";
    const principal = Number(document.getElementById("principal-amount").value);
    const annualRate = Number(document.getElementById("annual-rate").value);
    const periodUnit = document.getElementById("period-unit").value;
    const periodValue = Number(document.getElementById("period-value").value);

    if (!type || !periodUnit) {
      setStatus("interest-status", "Select interest type and period unit before calculating.", "danger");
      return;
    }

    if ([principal, annualRate, periodValue].some((value) => Number.isNaN(value) || value < 0)) {
      setStatus("interest-status", "Enter valid non-negative values for principal, rate, and period.", "danger");
      return;
    }

    let years = periodValue;
    if (periodUnit === "months") {
      years = periodValue / 12;
    } else if (periodUnit === "days") {
      years = periodValue / 365;
    }

    const rateDecimal = annualRate / 100;
    const interest =
      type === "compound"
        ? principal * Math.pow(1 + rateDecimal, years) - principal
        : principal * rateDecimal * years;
    const total = principal + interest;

    interestResult.textContent = formatCurrency(interest);
    totalResult.textContent = formatCurrency(total);
    setStatus(
      "interest-status",
      `${type === "compound" ? "Compound" : "Simple"} interest calculated successfully for ${periodValue} ${periodUnit}.`,
      "success"
    );
  });

  form.addEventListener("reset", () => {
    window.setTimeout(() => {
      interestResult.textContent = "Rs 0.00";
      totalResult.textContent = "Rs 0.00";
      setStatus("interest-status", "Calculator reset.", "warning");
    }, 0);
  });
};

const initBaseClassPage = () => {
  document.querySelectorAll(".baseclass-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("aria-controls");
      const target = targetId ? document.getElementById(targetId) : null;
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));
      target?.classList.toggle("hidden", isOpen);
    });
  });
};

class DemoShadowCard extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        .card {
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(28, 37, 38, 0.12);
          background: #fffaf3;
          font-family: Segoe UI, sans-serif;
        }
        button {
          margin-top: 12px;
          padding: 10px 16px;
          border-radius: 999px;
          border: none;
          background: #c9653d;
          color: white;
          cursor: pointer;
        }
      </style>
      <div class="card">
        <div id="shadow-text">Shadow DOM content ready.</div>
        <button id="shadow-button" type="button">Shadow Action</button>
      </div>
    `;

    root.getElementById("shadow-button").addEventListener("click", () => {
      root.getElementById("shadow-text").textContent = "Shadow action clicked.";
    });
  }
}

if (!customElements.get("demo-shadow-card")) {
  customElements.define("demo-shadow-card", DemoShadowCard);
}

const initAdvancedPage = () => {
  document.querySelectorAll(".broken-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setStatus("advanced-status", `Simulated broken link click: ${link.getAttribute("href")}`, "warning");
    });
  });

  document.getElementById("svg-circle")?.addEventListener("click", () => {
    setStatus("advanced-status", "SVG circle clicked.", "success");
  });

  document.getElementById("browser-info-button")?.addEventListener("click", () => {
    const info = `User agent length: ${navigator.userAgent.length}, viewport: ${window.innerWidth}x${window.innerHeight}`;
    setStatus("capability-status", info, "success");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const allowed = requireAuth();
  if (!allowed) {
    return;
  }
  initGlobalActions();
  initSharedNavigation();
  initPasswordToggles();
  initLoginPage();
  initCheckboxAlertsPage();
  initHelpCenter();
  initDropdownsTablesPage();
  initPaginationPage();
  initDatePage();
  initMousePage();
  initKeyboardPage();
  initJsPage();
  initDataDrivenPage();
  initBaseClassPage();
  initAdvancedPage();
  highlightCodeBlocks();
});
