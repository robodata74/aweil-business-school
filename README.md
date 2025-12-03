📘 Aweil School of Management and Business — Official Website

This repository contains the full static website for the Aweil School of Management and Business, hosted through GitHub Pages and using FormSubmit for inquiry and admission form processing.

📂 Project Structure
root/
│── index.html
│── about.html
│── programmes.html
│── admission.html
│── contact.html
│── thank-you.html
│── style.css
│── README.md
│
└── images/
    └── (all uploaded school assets)

🚀 Deploying on GitHub Pages

Go to:
Settings → Pages

Under Build and Deployment:

Source → Deploy from branch

Branch → main

Folder → / (root)

Click Save

Your site becomes available at:

https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

📝 Form Setup (FormSubmit)

The site uses FormSubmit for safe and backend-free form processing.

✔ Admission Form

Located in: admission.html
Submits to your endpoint:

https://formsubmit.co/el/mogacu

✔ Contact Form

Located in: contact.html
Also submits to:

https://formsubmit.co/el/mogacu

✔ Thank-You Redirect

Both forms can redirect after submission by adding:

<input type="hidden" name="_next" value="https://YOUR-USERNAME.github.io/REPOSITORY-NAME/thank-you.html">

📧 How to Enable Gmail CC for All Form Submissions

Because FormSubmit does not support CC directly, you handle CC using Gmail filters.

✅ Step-by-Step Gmail CC Setup

Log into gmail.com

Open Settings (⚙) → See All Settings

Go to Filters and Blocked Addresses

Click Create New Filter

In Subject contains, enter:

Website Inquiry — Aweil School


(This subject is already built into our contact form.)

Click Create Filter

Check:

✔ "Forward it to:"

Choose → the CC email (info@vadfoundation.org)

Save.

Now every form submission automatically:
➡ arrives in your Gmail
➡ is forwarded to info@vadfoundation.org

➡ without exposing that email in your website code

🛠 Technologies Used

HTML5

CSS3

GitHub Pages

FormSubmit (secure forms)

Gmail filtering for CC automation

📞 Contact

Aweil School of Management and Business
Maper East, Aweil, South Sudan
