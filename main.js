const DEMO_USERNAME = "JERISH";
const DEMO_PASSWORD = "Jerish@123";

const protectedPages = [
  "dashboard.html",
  "checkbox-alerts.html",
  "alerts.html",
  "frames-iframes.html",
  "dropdowns-tables.html",
  "autosuggest-static-table.html",
  "pagination-table.html",
  "date-pickers.html",
  "mouse-actions.html",
  "keyboard-slider-tabs-windows.html",
  "js-scroll-upload.html",
  "upload-files.html",
  "advanced-topics.html",
  "browser-capabilities.html",
  "data-driven-testing.html"
];

const pageRegistry = [
  { file: "dashboard.html", label: "Dashboard" },
  { file: "js-scroll-upload.html", label: "JavascriptExecutor and Scrolling" },
  { file: "upload-files.html", label: "Upload Files" },
  { file: "checkbox-alerts.html", label: "Check Boxes and Radio Buttons" },
  { file: "alerts.html", label: "Alerts" },
  { file: "frames-iframes.html", label: "Frames and Nested iFrames" },
  { file: "dropdowns-tables.html", label: "Different Types of Drop-downs" },
  { file: "autosuggest-static-table.html", label: "Auto-suggest and Static Table" },
  { file: "pagination-table.html", label: "Dynamic Pagination Table" },
  { file: "date-pickers.html", label: "Date Pickers" },
  { file: "mouse-actions.html", label: "Mouse Actions" },
  { file: "keyboard-slider-tabs-windows.html", label: "Keyboard, Sliders, Tabs, Windows" },
  { file: "browser-capabilities.html", label: "Screenshots, Headless, SSL, Ad Block, Extensions" },
  { file: "advanced-topics.html", label: "Broken Links, SVG, Shadow DOM" },
  { file: "data-driven-testing.html", label: "Data Driven Testing" }
];

const helpContent = {
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
      setStatus("dropdown-status", "Select a browser to continue.", "warning");
      return;
    }

    setStatus("dropdown-status", `Selected browser: ${browserSelect.value}`, "success");
  });

  document.getElementById("show-multi-values")?.addEventListener("click", () => {
    const values = Array.from(document.getElementById("multi-select").selectedOptions).map((item) => item.value);
    setStatus("dropdown-status", values.length ? `Multi-select values: ${values.join(", ")}` : "No multi-select option chosen.", "warning");
  });

  const customTrigger = document.getElementById("custom-dropdown-trigger");
  const customMenu = document.getElementById("custom-dropdown-menu");
  customTrigger?.addEventListener("click", () => {
    customMenu?.classList.toggle("hidden");
  });

  customMenu?.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("custom-dropdown-value").textContent = button.dataset.value;
      customMenu.classList.add("hidden");
      setStatus("dropdown-status", `Custom dropdown selected: ${button.dataset.value}`, "success");
    });
  });

  const suggestions = ["India", "Indonesia", "Canada", "Australia", "Germany", "Japan"];
  const input = document.getElementById("autosuggest-input");
  const list = document.getElementById("autosuggest-list");

  input?.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    list.innerHTML = "";

    if (!query) {
      list.classList.add("hidden");
      return;
    }

    const matches = suggestions.filter((item) => item.toLowerCase().includes(query));
    matches.forEach((item) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "button secondary";
      option.textContent = item;
      option.addEventListener("click", () => {
        input.value = item;
        list.classList.add("hidden");
        setStatus("autosuggest-status", `Auto-suggest selected: ${item}`, "success");
      });
      list.appendChild(option);
    });

    list.classList.toggle("hidden", matches.length === 0);
  });

  document.getElementById("static-table-search")?.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    let count = 0;

    document.querySelectorAll("#static-table tbody tr").forEach((row) => {
      const matches = row.textContent.toLowerCase().includes(query);
      row.classList.toggle("hidden", !matches);
      if (matches) {
        count += 1;
      }
    });

    document.getElementById("static-count").textContent = String(count);
  });
};

const initPaginationPage = () => {
  const data = [
    ["TC001", "Login Valid Credentials", "Passed"],
    ["TC002", "Login Invalid Password", "Passed"],
    ["TC003", "Create Account", "Blocked"],
    ["TC004", "Delete User", "Passed"],
    ["TC005", "Role Dropdown", "Failed"],
    ["TC006", "Alert Confirm", "Passed"],
    ["TC007", "Nested iFrame Text", "Passed"],
    ["TC008", "Upload Resume", "Blocked"],
    ["TC009", "Shadow DOM Value", "Passed"],
    ["TC010", "Date Picker Range", "Failed"],
    ["TC011", "Pagination Page 2", "Passed"],
    ["TC012", "SVG Chart Click", "Passed"]
  ];

  const rowsPerPage = 4;
  let page = 1;

  const render = () => {
    const tbody = document.getElementById("pagination-body");
    const pager = document.getElementById("pagination-controls");
    const start = (page - 1) * rowsPerPage;
    const items = data.slice(start, start + rowsPerPage);

    tbody.innerHTML = items
      .map(
        (item) =>
          `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td><button class="button secondary row-select" type="button">Inspect</button></td></tr>`
      )
      .join("");

    pager.innerHTML = "";
    Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, index) => index + 1).forEach((number) => {
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

    document.querySelectorAll(".row-select").forEach((button, index) => {
      button.addEventListener("click", () => {
        setStatus("pagination-status", `Selected row ${(page - 1) * rowsPerPage + index + 1}.`, "success");
      });
    });

    document.getElementById("current-page-label").textContent = String(page);
  };

  render();
};

const initDatePage = () => {
  document.getElementById("date-submit")?.addEventListener("click", () => {
    const single = document.getElementById("single-date").value;
    const week = document.getElementById("week-picker").value;
    const month = document.getElementById("month-picker").value;
    const start = document.getElementById("range-start").value;
    const end = document.getElementById("range-end").value;
    setStatus("date-status", `Captured values -> date: ${single || "-"}, week: ${week || "-"}, month: ${month || "-"}, range: ${start || "-"} to ${end || "-"}`, "success");
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
  initAdvancedPage();
  highlightCodeBlocks();
});
