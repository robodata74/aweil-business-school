📘 Aweil School of Management and Business — Official Website

This repository contains the full static website for the Aweil School of Management and Business, hosted through GitHub Pages and using FormSubmit for inquiry and admission form processing.

---

## 📂 Project Structure

root/
│── index.html
│── about.html
│── programs.html
│── admission.html
│── contact.html
│── thank-you.html
│── style.css
│── menu.js
│── script.js
│── README.md
│
└── images/
└── (all uploaded school assets)

yaml
Copy code

---

## 🚀 Deploying on GitHub Pages

Go to:

**Settings → Pages**

Under Build and Deployment:

- **Source:** Deploy from branch  
- **Branch:** main  
- **Folder:** / (root)

Click **Save**

Your site will appear at:

https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

yaml
Copy code

---

## 📝 Form Setup (FormSubmit)

### ✔ Admission Form
Located in: **admission.html**

Submission endpoint:

https://formsubmit.co/el/mogacu

python
Copy code

### ✔ Contact Form
Located in: **contact.html**

Also submits to same endpoint.

### ✔ Redirect After Submission

Add:

```html
<input type="hidden" name="_next" value="https://YOUR-USERNAME.github.io/REPOSITORY-NAME/thank-you.html">
📧 Gmail CC Automation (No Code, Safe)
To forward all form submissions to another email:

Go to Gmail → Settings → See all settings

Open Filters and Blocked Addresses

Click Create New Filter

Under “Subject contains” enter:

nginx
Copy code
Aweil School
Click Create Filter

Check:

✔ “Forward it to:”
Select → info@vadfoundation.org

Now all inquiries automatically forward.

🛠 Technologies Used
HTML5

CSS3

GitHub Pages

FormSubmit

Gmail Filter Automation

📞 Contact
Aweil School of Management and Business Studies
Maper East, Aweil, South Sudan

yaml
Copy code
