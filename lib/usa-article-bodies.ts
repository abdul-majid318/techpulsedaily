import type { ArticleSection, ArticleSource } from "@/lib/articles";

export const usaArticleBodies: Record<string, ArticleSection[]> = {
  "us1": [
    {
      "paragraphs": [
        "You receive a text saying that your package cannot be delivered until you confirm your address or pay a small fee. It includes a link that looks similar to a shipping company website. This is a common pattern in package-delivery phishing, sometimes called smishing when it arrives by SMS.",
        "The message may coincide with a real order. Scammers send large numbers of texts and count on recipients who are already expecting deliveries. A real tracking concern does not make the link in an unexpected text trustworthy."
      ]
    },
    {
      "heading": "Real delivery notice or likely scam?",
      "paragraphs": [
        "Use these clues as prompts for independent checking rather than proof on their own."
      ],
      "table": {
        "headers": [
          "Signal",
          "Why it matters",
          "Safer response"
        ],
        "rows": [
          [
            "Unexpected link to update address",
            "Can lead to a credential or payment-harvesting page",
            "Open the carrier app or enter its domain yourself"
          ],
          [
            "Tiny unpaid delivery fee",
            "Small payments can expose card details",
            "Verify charges through an official carrier channel"
          ],
          [
            "Urgent countdown or threat",
            "Pressure encourages impulsive taps",
            "Pause and verify independently"
          ],
          [
            "Odd sender number",
            "Sender identities can be spoofed",
            "Do not rely on displayed sender alone"
          ],
          [
            "Authentic-looking logo",
            "Images and branding can be copied",
            "Check the actual website and your tracking number"
          ]
        ]
      }
    },
    {
      "heading": "Verify a shipment without clicking the text",
      "paragraphs": [
        "When you really are waiting for a delivery, checking should take only a minute or two."
      ],
      "orderedList": [
        "Open the order confirmation from the retailer or the carrier app you already use.",
        "Find the tracking number you received when you made the purchase.",
        "Type the carrier website address directly instead of following the text message.",
        "Compare the real tracking status with the claim in the SMS.",
        "Contact the retailer or carrier using a number from its official website if the status is unclear."
      ]
    },
    {
      "heading": "Why the address in a text is not enough",
      "paragraphs": [
        "A shortened URL, substituted letter, or unexpected subdomain can send you to a convincing fake login page. The fact that a page uses HTTPS means the connection may be encrypted; it does not prove the business is authentic.",
        "A fraudulent page may ask for your shipping address, phone number, email, password, or card details. Do not enter these just to “release” a package unless the request has been independently confirmed."
      ]
    },
    {
      "heading": "If you clicked or entered information",
      "paragraphs": [
        "Your response depends on what you did; scanning a page without submitting information is different from providing a password or payment card."
      ],
      "list": [
        "Opened only: close the page, avoid further prompts, and update your browser and phone.",
        "Entered a password: change it through the genuine service, change reused passwords, and enable multifactor authentication.",
        "Entered card details: contact the card issuer using its official number and monitor transactions.",
        "Installed an app or profile: consult device security settings and the manufacturer’s official guidance.",
        "Report suspicious texts using available carrier spam tools; report fraud to the FTC."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Can a fake delivery text name a real carrier? Yes. Scammers can imitate recognizable companies and sometimes include convincing shipping language.",
        "Should I reply STOP? For an obvious unsolicited scam, do not engage. Use your messaging app’s report and block features instead.",
        "Is a small redelivery fee normal? Fees and processes depend on the carrier and circumstances. Never assume a text’s payment link is genuine; confirm directly.",
        "What if I am not expecting a delivery? That is a strong reason to disregard the request, but the same independent verification rule applies if you are uncertain."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Use the tracking information already connected to your purchase—not a new link in an unsolicited message. A few seconds of verification can prevent account or card exposure."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us2": [
    {
      "paragraphs": [
        "A credit freeze, also called a security freeze, restricts access to your credit reports by prospective lenders. In the United States, freezing your credit is free, and so is lifting the freeze when you need it. It can help prevent someone who stole your personal information from opening new credit accounts in your name.",
        "A freeze is not the same as a paid credit lock, and it does not replace monitoring existing bank and card accounts. It also does not reduce your credit score."
      ]
    },
    {
      "heading": "Credit freeze vs. fraud alert vs. credit lock",
      "paragraphs": [
        "These controls solve related but different problems."
      ],
      "table": {
        "headers": [
          "Option",
          "What it does",
          "Important limit"
        ],
        "rows": [
          [
            "Security freeze",
            "Restricts prospective lender access to credit file",
            "Apply separately at all three major bureaus"
          ],
          [
            "Fraud alert",
            "Prompts extra identity verification when credit is requested",
            "Does not fully restrict file access"
          ],
          [
            "Credit lock",
            "Commercial service offered by bureaus",
            "May involve fees; not required to freeze credit"
          ]
        ]
      }
    },
    {
      "heading": "How to freeze your credit",
      "paragraphs": [
        "Contact the three nationwide consumer reporting companies separately. Use their official websites rather than ads or links in unsolicited messages."
      ],
      "orderedList": [
        "Go to the official Equifax website and locate its security freeze section.",
        "Go to the official Experian website and place a security freeze.",
        "Go to the official TransUnion website and place a security freeze.",
        "Securely save your confirmation and account-recovery information for each bureau.",
        "Check whether a spouse or other household member needs their own freeze; one person’s freeze does not protect every identity."
      ]
    },
    {
      "heading": "What happens after you freeze your files?",
      "paragraphs": [
        "Lenders that need to review a new application may be unable to access the relevant report until you temporarily lift or remove the freeze. Existing creditors and certain other entities may still have permitted access.",
        "For a new credit card, auto loan, or apartment application, ask which bureau will be checked and temporarily lift the freeze there, or lift it at all three when uncertain. Remember to restore protection afterward if you chose a temporary rather than ongoing lift."
      ]
    },
    {
      "heading": "When a freeze is especially useful",
      "paragraphs": [
        "A credit freeze can be an effective preventive step even before identity theft occurs."
      ],
      "list": [
        "Your identity information appeared in a data breach.",
        "You lost a document containing your Social Security number.",
        "Someone attempted to open an account using your identity.",
        "You rarely apply for new credit and want an additional barrier."
      ]
    },
    {
      "heading": "What a freeze does not protect",
      "paragraphs": [
        "A freeze does not stop fraud on accounts you already own, phishing of email passwords, account takeovers, or unauthorized card purchases. Continue monitoring statements, using multifactor authentication, and reporting suspicious activity.",
        "Some activities such as employment or tenant screening may follow different rules from new-credit applications; consult the bureau and the requesting institution."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Does freezing hurt my credit score? No.",
        "Do I need to pay? No. Federal law provides free freezes and lifts at the major bureaus.",
        "If I freeze at one bureau, am I covered everywhere? No. You must contact Equifax, Experian, and TransUnion individually.",
        "Can I apply for a mortgage while frozen? Yes, but the lender may need you to lift access during its checks."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "A free credit freeze can reduce one major form of identity theft, but it works best alongside secure accounts and active financial monitoring."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us3": [
    {
      "paragraphs": [
        "Tax identity theft can happen when another person uses your Social Security number or Individual Taxpayer Identification Number to file a fraudulent federal tax return. The IRS Identity Protection PIN, or IP PIN, is a six-digit code designed to make that misuse harder.",
        "An IP PIN is separate from the password for your IRS online account. It verifies that a tax return filed under your identity includes the correct code; it does not guarantee that every type of financial fraud is prevented."
      ]
    },
    {
      "heading": "Who can request an IP PIN?",
      "paragraphs": [
        "According to the IRS, people with an SSN or ITIN who can verify their identity can generally request an IP PIN. The IRS issues a new code annually. Eligibility, verification routes, and procedures can change, so use the IRS instructions relevant to your circumstances."
      ]
    },
    {
      "heading": "How to request an IP PIN online",
      "paragraphs": [
        "Start on IRS.gov, not from a search ad, text message, or email claiming to offer a faster government PIN."
      ],
      "orderedList": [
        "Visit the official IRS identity protection PIN page.",
        "Sign in to your IRS online account or follow the identity-verification process to create one.",
        "Find the IP PIN enrollment option in the available account settings.",
        "Follow the enrollment prompts and keep the six-digit code in a secure place.",
        "When preparing your federal return, provide the current tax-year IP PIN to your authorized preparer or tax software only when required."
      ]
    },
    {
      "heading": "What if you cannot verify your identity online?",
      "paragraphs": [
        "The IRS lists alternative procedures, including Form 15227 for applicants meeting the current eligibility requirements and in-person assistance through a Taxpayer Assistance Center in some situations. Do not assume the alternatives are identical for every taxpayer.",
        "Taxpayers with dependents may also need to follow additional procedures. Consult the IRS FAQ rather than sharing personal identifiers with an unverified tax-help service."
      ]
    },
    {
      "heading": "Protect your IP PIN like a credential",
      "paragraphs": [
        "Treat an IP PIN as sensitive tax information."
      ],
      "list": [
        "Do not post it publicly or email it to an unknown requester.",
        "Give it only to your authorized tax preparer or use it in the return-filing process.",
        "Retrieve the newest annual code rather than automatically reusing an older one.",
        "Be cautious of urgent messages claiming your PIN must be renewed through an external website."
      ]
    },
    {
      "heading": "What to do if your PIN is missing",
      "paragraphs": [
        "Use the official IRS recovery instructions. If the IRS issued you an IP PIN, your filed return may require it. Avoid guessing random codes, and do not send sensitive tax details to people who contact you unexpectedly.",
        "An IP PIN is not a substitute for protecting your IRS account, monitoring financial records, or reporting identity theft when it occurs."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Is an IP PIN free? Yes, the IRS program is free.",
        "Is the IP PIN my tax filing password? No; it is an identity-verification code associated with the return.",
        "Does it stay the same forever? No, a new IP PIN is generated annually.",
        "Can I request one if I have not experienced tax identity theft? The IRS permits eligible taxpayers to enroll proactively."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "For US taxpayers who can verify their identity, an IRS IP PIN is a practical extra barrier against fraudulent tax filing. Always obtain it through IRS.gov."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us4": [
    {
      "paragraphs": [
        "Your home router connects phones, computers, televisions, cameras, and smart-home devices to the internet. Securing it reduces the chance that someone nearby or an attacker with a stolen password can access the network or change its settings.",
        "Many people protect their Wi-Fi password but never change the router administrator password. Those credentials control different things, and both deserve attention."
      ]
    },
    {
      "heading": "Start with the highest-impact settings",
      "paragraphs": [
        "Check the router’s settings screen or the official app provided by its manufacturer or internet service provider."
      ],
      "table": {
        "headers": [
          "Setting",
          "Preferred approach",
          "Why"
        ],
        "rows": [
          [
            "Wireless encryption",
            "WPA3 Personal where supported; otherwise WPA2 Personal",
            "Protects wireless traffic"
          ],
          [
            "Router admin password",
            "Strong and unique",
            "Protects configuration access"
          ],
          [
            "Wi-Fi password",
            "Strong and unique",
            "Limits unauthorized joining"
          ],
          [
            "Firmware",
            "Current manufacturer-approved version",
            "Addresses known issues"
          ],
          [
            "Guest network",
            "Separate when practical",
            "Separates visitor devices"
          ]
        ]
      }
    },
    {
      "heading": "Ten steps to harden your router",
      "paragraphs": [
        "Menu names differ by brand; read the manufacturer’s support guide if an option is unfamiliar."
      ],
      "orderedList": [
        "Change default router administrator credentials.",
        "Use WPA3 Personal if all required devices support it; otherwise choose WPA2 Personal.",
        "Choose a long, unique Wi-Fi password not reused on other accounts.",
        "Install supported firmware updates and enable automatic security updates when offered.",
        "Disable remote administration unless it serves a specific need you understand.",
        "Review whether WPS should be disabled to avoid convenience-related security risks.",
        "Review UPnP and disable it if you do not need it, considering devices and games that rely on it.",
        "Create a separate guest network for visitors and less-trusted devices when available.",
        "Inspect the connected-device list and remove devices you no longer recognize or own.",
        "Log out of the admin interface and store recovery information securely."
      ]
    },
    {
      "heading": "WPA3 versus WPA2: what to choose",
      "paragraphs": [
        "The FTC recommends WPA3 Personal or WPA2 Personal; WPA3 is the newer option. WEP and original WPA are outdated choices that should not be used for modern home security.",
        "If an old printer or device fails to connect to WPA3, check its firmware and compatibility before disabling all network protection. A carefully configured separate network may be safer than weakening the main connection."
      ]
    },
    {
      "heading": "What about your internet provider’s router?",
      "paragraphs": [
        "Many US internet providers supply a gateway managed partly through a mobile app. Look for a security/update section, inspect account credentials, and confirm how the provider distributes firmware updates.",
        "If your ISP manages the device, do not install unofficial firmware or reset advanced features without understanding what services may be affected."
      ]
    },
    {
      "heading": "Common home network mistakes",
      "paragraphs": [
        "These misconfigurations can undo otherwise sensible precautions."
      ],
      "list": [
        "Using the same password for the router administrator account and every other account.",
        "Leaving an old router unsupported for years without firmware updates.",
        "Sharing the main network password widely when a guest network is available.",
        "Assuming changing the network name alone makes the network secure.",
        "Using unknown “router cleaner” apps that request administrator access."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Does hiding my network name secure Wi-Fi? It is not a substitute for encryption and strong credentials.",
        "Should I change my password every month? Prioritize long unique credentials, and rotate when compromise is suspected or access should be revoked.",
        "Can a guest network help? Yes, it can separate visitors from main devices when properly configured.",
        "Will these changes improve speed? Some settings affect compatibility, but the main goal here is security rather than promised speed gains."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Start with modern encryption, unique credentials, updates, and a guest network. Avoid changing settings you do not understand without checking the router documentation."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us5": [
    {
      "paragraphs": [
        "An iPhone can share location, photos, calendar details, and other information with apps and people. Some sharing is intentional and helpful. Other permissions may linger long after you stop using an app or change a relationship.",
        "A periodic privacy checkup is not about turning off every feature. It is about making access match your current intentions while preserving services you actually use."
      ]
    },
    {
      "heading": "Start with the Privacy & Security settings",
      "paragraphs": [
        "Exact paths and wording can vary with iOS version."
      ],
      "orderedList": [
        "Open Settings and select Privacy & Security.",
        "Review Location Services and check which apps can use your location and when.",
        "Inspect Photos, Contacts, Microphone, Camera, and Bluetooth permissions.",
        "Limit access for apps that no longer need the information.",
        "Review tracking and analytics settings according to your preference.",
        "Revisit permissions after installing major apps or changing how you use your phone."
      ]
    },
    {
      "heading": "Use Safety Check to inspect sharing",
      "paragraphs": [
        "On supported iPhones, Apple Safety Check is located under Settings → Privacy & Security → Safety Check. It can help you review what information is shared with people and apps, connected devices, and important account settings.",
        "Choose Manage Sharing & Access for a measured review. Emergency Reset is designed to quickly stop certain sharing in an urgent situation. These actions can affect other people’s access; consider personal safety before making changes, especially if someone may react negatively."
      ]
    },
    {
      "heading": "Which access should you review first?",
      "paragraphs": [
        "Focus on permissions that could expose sensitive information."
      ],
      "table": {
        "headers": [
          "Permission",
          "Reason to check",
          "Example decision"
        ],
        "rows": [
          [
            "Location",
            "Shows where you may be",
            "While Using instead of Always, where appropriate"
          ],
          [
            "Photos",
            "May expose personal images",
            "Selected photos instead of full library"
          ],
          [
            "Microphone",
            "Can capture audio when authorized",
            "Deny for apps without voice functions"
          ],
          [
            "Contacts",
            "Contains other people’s details",
            "Grant only when necessary"
          ],
          [
            "Apple Account devices",
            "Shows signed-in devices",
            "Investigate unfamiliar sessions"
          ]
        ]
      }
    },
    {
      "heading": "Secure the Apple Account as well",
      "paragraphs": [
        "App permission management does not secure a compromised account. Use a strong device passcode, keep iOS updated, inspect trusted devices, and review Apple Account authentication protections.",
        "If you believe someone else knows your passcode or has account access, follow Apple’s personal safety guidance. Security steps should be planned carefully if there is any risk of interpersonal harm."
      ]
    },
    {
      "heading": "Useful privacy habits beyond settings",
      "paragraphs": [
        "A few practical habits reduce unnecessary disclosure."
      ],
      "list": [
        "Avoid granting Always location access when an app only needs location during use.",
        "Inspect photo sharing and shared albums, not just camera permissions.",
        "Review Find My sharing and shared devices if personal circumstances change.",
        "Remove apps you no longer trust or need.",
        "Check Safari privacy settings and be skeptical of fake security warnings."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Will turning off location sharing break Maps? Some features require location while being used; you can allow narrower access.",
        "Is Safety Check available on all iPhones? Apple documents it for iPhone with iOS 16 or later; check support for your device and version.",
        "Does Safety Check revoke everything online? No. Sharing through other apps or accounts may need separate review.",
        "Should I disable every permission? Not necessarily. Match each permission to a legitimate purpose."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "A ten-minute permissions and account review can make your privacy settings more intentional without losing useful iPhone features."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us6": [
    {
      "paragraphs": [
        "A useful backup is a separate recoverable copy of important data. It protects against accidental deletion, drive failure, theft, and some security incidents. A synced folder alone is not always a complete backup: unwanted deletions or file changes may propagate to every synced device.",
        "The right plan depends on how much you can afford to lose and how quickly you need to recover. Home users usually benefit from more than one copy, with at least one copy separate from the everyday computer."
      ]
    },
    {
      "heading": "Backup, sync, and recovery are not identical",
      "paragraphs": [
        "Understanding the terms prevents false confidence."
      ],
      "table": {
        "headers": [
          "Method",
          "Useful for",
          "Important limit"
        ],
        "rows": [
          [
            "Cloud sync",
            "Accessing files across devices",
            "Deletions or malicious changes may sync"
          ],
          [
            "External-drive backup",
            "Recovering files after local trouble",
            "Drive must be protected and updated"
          ],
          [
            "System recovery tools",
            "Repairing Windows or resetting device",
            "May not recover missing personal data"
          ],
          [
            "Off-site backup",
            "Recovering after theft or local disaster",
            "Requires secure credentials and recovery planning"
          ]
        ]
      }
    },
    {
      "heading": "Build a simple personal backup plan",
      "paragraphs": [
        "Start with your highest-value files and test one recovery before assuming the backup works."
      ],
      "orderedList": [
        "List essential folders: documents, photos, tax records, work files, and project exports.",
        "Identify which files are already in OneDrive or another sync service, and check what is actually included.",
        "Choose a separate backup destination such as an external drive or reputable backup service.",
        "Use supported Windows backup features or documented third-party tools for the selected method.",
        "Run the initial backup while the PC is stable and has sufficient power.",
        "Confirm files were created in the target destination.",
        "Restore a harmless sample file to a different folder and open it successfully.",
        "Set a repeat schedule and a reminder to check backup health."
      ]
    },
    {
      "heading": "What Windows Backup can and cannot do",
      "paragraphs": [
        "Windows Backup can help preserve supported settings, certain user data, and other information depending on your Microsoft account and configuration. It is not a promise that every program, local file, and business-specific application will be restored exactly as before.",
        "Inspect the included folders and the cloud quota. If you use professional software that stores data outside standard user folders, confirm its separate export or backup method."
      ]
    },
    {
      "heading": "Ransomware and backup separation",
      "paragraphs": [
        "Keep at least one backup protected from routine changes to the main PC. An external drive that stays connected continuously may be affected during some malware incidents. Where practical, use versioned or disconnected copies.",
        "Protect cloud accounts with multifactor authentication, and securely store recovery information. Encrypt backup drives containing sensitive records if you understand how to manage recovery keys."
      ]
    },
    {
      "heading": "How to test a restore",
      "paragraphs": [
        "Do not wait for an emergency to discover that recovery has never worked."
      ],
      "list": [
        "Select a non-sensitive example document.",
        "Find it in the backup destination, not the working folder.",
        "Restore to a separate temporary location.",
        "Open it and compare the content.",
        "Record the test date and repeat after major setup changes."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Is OneDrive enough? It may be useful for sync and some recovery, but inspect version history, retention, and whether your required files are covered.",
        "How often should I back up? Base frequency on how much recent work you can tolerate losing.",
        "Do I need an external drive? Not always, but a separate backup location is valuable.",
        "Will reinstalling Windows restore everything? No; plan for separate personal-data and application recovery."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "A backup is only convincing when you know what is included and have successfully restored a file. Start with the files you cannot replace."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us7": [
    {
      "paragraphs": [
        "QR codes make payments and menus convenient, but the code itself does not tell you whether a destination is trustworthy. A scammer can place a sticker over a real payment code, print a fake notice, or send a code inside a phishing message.",
        "The FTC warned in September 2026 about malicious QR codes appearing on parking meters. Scanning can lead to an imitation page designed to collect card details or login information. The safer habit is to verify the organization and destination before paying."
      ]
    },
    {
      "heading": "Examples worth checking",
      "paragraphs": [
        "Not every QR code is suspicious. Context and verification matter more than the presence of a square code."
      ],
      "table": {
        "headers": [
          "Location",
          "Potential issue",
          "Better check"
        ],
        "rows": [
          [
            "Parking meter",
            "Sticker covers original payment code",
            "Use posted meter instructions or official parking app"
          ],
          [
            "Restaurant table",
            "Unrecognized code asks for account login",
            "Ask staff for the correct menu/payment method"
          ],
          [
            "Public flyer",
            "Code opens unfamiliar shortened domain",
            "Look up the organization independently"
          ],
          [
            "Email or text",
            "QR code bypasses familiar link-preview habits",
            "Treat it as an ordinary untrusted link"
          ]
        ]
      }
    },
    {
      "heading": "How to check a QR code before paying",
      "paragraphs": [
        "Use a brief, consistent process."
      ],
      "orderedList": [
        "Look at the physical sign for unusual stickers, misaligned labels, or signs of tampering.",
        "Use a phone camera or QR reader that previews the destination URL.",
        "Read the full domain carefully, including spelling and unexpected additions.",
        "Compare the destination with the official parking authority, restaurant, or business website.",
        "Avoid entering credentials or payment details on a site you cannot independently confirm.",
        "If something looks wrong, use a known official app, another payment method, or staff assistance."
      ]
    },
    {
      "heading": "HTTPS is helpful but not proof of legitimacy",
      "paragraphs": [
        "A fake payment website may also have a valid HTTPS connection. Encryption protects data in transit but does not make a fraudulent merchant authentic.",
        "Never rely only on a lock symbol, professional design, or a logo. Scammers can copy visual branding while changing where the form sends card details."
      ]
    },
    {
      "heading": "If you already scanned a malicious code",
      "paragraphs": [
        "Respond based on what happened."
      ],
      "list": [
        "If you only opened a page, close it and avoid interacting further.",
        "If you entered a password, change it on the real site and enable multifactor authentication.",
        "If you entered card details, contact the card issuer and monitor charges.",
        "If you installed an app, review device security instructions from Apple or Google.",
        "Report suspected fraud to the FTC and the relevant parking or business operator."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Can scanning alone infect my phone? Risk depends on browser vulnerabilities and whether additional actions occur. Keep software updated, and do not install unknown apps.",
        "Can I trust a QR code on an official-looking sign? Appearance alone is not enough; inspect and verify.",
        "Are restaurant menu codes dangerous? Many are legitimate, but unusual logins or payment requests deserve checking.",
        "Where can I report a suspicious parking sticker? Notify the operator or local authority and report fraud to the FTC if applicable."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Treat the URL behind a QR code with the same skepticism as a link in an unsolicited text. Check before you pay."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us8": [
    {
      "paragraphs": [
        "Public Wi-Fi can be convenient at airports, coffee shops, hotels, and libraries. Years ago, many websites transmitted login data without modern encryption. Today, HTTPS is widespread and makes ordinary use of public networks safer than many people assume.",
        "That does not make every hotspot trustworthy. Fake network names, malicious login pages, compromised devices, and unsafe downloads can still create risk. The goal is to separate realistic threats from exaggerated claims."
      ]
    },
    {
      "heading": "What protects you on public Wi-Fi?",
      "paragraphs": [
        "Modern encryption protects content in transit, but it does not verify that every website is legitimate."
      ],
      "table": {
        "headers": [
          "Protection",
          "Helps with",
          "Does not solve"
        ],
        "rows": [
          [
            "HTTPS",
            "Encrypts browser connection to site",
            "Phishing websites can use HTTPS too"
          ],
          [
            "Device updates",
            "Fix known software issues",
            "Cannot prevent every scam"
          ],
          [
            "Multifactor authentication",
            "Adds account sign-in protection",
            "Does not legitimize fake login pages"
          ],
          [
            "Cellular hotspot",
            "Avoids untrusted shared Wi-Fi network",
            "Still requires safe browsing and account habits"
          ],
          [
            "VPN",
            "Can protect traffic through VPN tunnel",
            "Does not make phishing links safe"
          ]
        ]
      }
    },
    {
      "heading": "Before connecting in a public place",
      "paragraphs": [
        "Use these checks when joining a network you do not control."
      ],
      "orderedList": [
        "Ask staff for the official network name when practical.",
        "Avoid look-alike networks with unusual spelling or duplicate names.",
        "Keep the operating system and browser updated.",
        "Open the Wi-Fi login page carefully; do not enter unrelated banking or email credentials.",
        "For accounts and payments, verify the address and HTTPS connection.",
        "Disable automatic joining of unknown networks when your device offers the option.",
        "Forget the network later if you do not need to reconnect."
      ]
    },
    {
      "heading": "Should you always use a VPN?",
      "paragraphs": [
        "A reputable VPN can encrypt network traffic between your device and the VPN provider, which can add useful protection in some circumstances. However, a VPN operator can still see certain information, and a VPN cannot determine whether a fake shopping site is trustworthy.",
        "The FTC notes that widespread HTTPS means a public Wi-Fi connection is usually safe for many common tasks. Treat claims that all public Wi-Fi is inherently unsafe without a VPN as oversimplified."
      ]
    },
    {
      "heading": "When cellular data is the simpler option",
      "paragraphs": [
        "For high-stakes activities or when you are unsure whether a hotspot is legitimate, a mobile hotspot may be preferable. Be aware of mobile data limits, roaming charges, and your device’s connection settings.",
        "Avoid turning off browser warnings or installing unexpected certificates because a captive portal asks you to. If you cannot authenticate the network, choose another connection."
      ]
    },
    {
      "heading": "Habits that help everywhere",
      "paragraphs": [
        "These measures matter on home, office, and public networks alike."
      ],
      "list": [
        "Use unique passwords or passkeys and multifactor authentication.",
        "Install operating system and browser security updates.",
        "Verify the exact site address before entering account credentials.",
        "Avoid downloading unknown apps or profiles to gain Wi-Fi access.",
        "Report fake network names to the venue if you notice them."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Is airport Wi-Fi always dangerous? No. Risk depends on the network, device, and sites you use.",
        "Does HTTPS mean a website is trustworthy? No. It means the connection is encrypted, not that the business is legitimate.",
        "Can a VPN stop phishing? No. You still need to verify links.",
        "Is a personal hotspot better? It can avoid unknown local networks, although normal online risks remain."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Use public Wi-Fi sensibly: verify the hotspot, use HTTPS, maintain software updates, and do not mistake a VPN for complete protection."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us9": [
    {
      "paragraphs": [
        "Discovering an unauthorized account, unfamiliar transaction, or tax notice can be alarming. The priority is to stop ongoing misuse and preserve enough information to dispute what happened.",
        "This guide describes common US consumer recovery steps, not a substitute for specific advice from a bank, law enforcement, or attorney. Actions differ depending on whether someone stole a payment card, online credentials, or broader identity information."
      ]
    },
    {
      "heading": "First actions after suspicious activity",
      "paragraphs": [
        "Prioritize immediate protection over trying to identify the attacker."
      ],
      "orderedList": [
        "Contact the affected bank, card issuer, or account provider through its official app or phone number.",
        "Change compromised passwords and sign out unknown devices where available.",
        "Enable multifactor authentication or another strong sign-in option.",
        "Preserve copies of suspicious messages, transaction dates, and account notices.",
        "Visit IdentityTheft.gov to report identity theft and obtain a recovery plan when applicable.",
        "Consider a fraud alert or credit freeze using official credit bureau channels.",
        "Review bank statements, card transactions, and credit reports for additional suspicious activity."
      ]
    },
    {
      "heading": "Match the response to the incident",
      "paragraphs": [
        "Not every case requires exactly the same steps."
      ],
      "table": {
        "headers": [
          "Problem",
          "Immediate priority",
          "Follow-up"
        ],
        "rows": [
          [
            "Unauthorized card charge",
            "Contact issuer; dispute and secure card",
            "Monitor statements"
          ],
          [
            "Email account takeover",
            "Recover account, rotate password, inspect sessions",
            "Check forwarding rules and recovery options"
          ],
          [
            "New credit account in your name",
            "Freeze credit and report identity theft",
            "Dispute fraudulent account with documentation"
          ],
          [
            "Tax return filed using your identity",
            "Use official IRS identity-theft procedures",
            "Ask about IP PIN and any IRS notices"
          ],
          [
            "Lost sensitive documents",
            "Assess exposure and protect accounts",
            "Monitor for identity misuse"
          ]
        ]
      }
    },
    {
      "heading": "Credit freezes versus fraud alerts",
      "paragraphs": [
        "A credit freeze restricts access to your credit report for many new-credit decisions. In the US, you can freeze at Equifax, Experian, and TransUnion without a fee, but you must contact each one.",
        "A fraud alert asks businesses to take additional identity-verification steps. Depending on the type of alert, contacting one credit bureau may lead it to notify the others. Consult the CFPB for current requirements."
      ]
    },
    {
      "heading": "Why written records matter",
      "paragraphs": [
        "Keep a timeline including calls, reference numbers, dates, screenshots, letters, and transaction identifiers. Ask institutions to confirm dispute outcomes in writing when available.",
        "Use copies rather than sending original identity documents unless specifically required by a verified institution. Never send full account credentials over unsolicited email."
      ]
    },
    {
      "heading": "Red flags during recovery",
      "paragraphs": [
        "Scammers sometimes impersonate investigators or government employees and claim they can recover money for a fee."
      ],
      "list": [
        "Calls demanding immediate payment to unfreeze an account.",
        "Requests for one-time authentication codes or remote access software.",
        "Websites resembling government resources but hosted on unrelated domains.",
        "People offering guaranteed fund recovery for an upfront fee."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Can a credit freeze reverse an unauthorized purchase? No; contact the affected card issuer or financial institution.",
        "Will reporting identity theft automatically remove all fraudulent debt? Recovery and disputes can require documentation and follow-up.",
        "Should I file a police report? It can be appropriate in some situations; follow IdentityTheft.gov and your local agency guidance.",
        "Where do I start if I am unsure? Use the official FTC IdentityTheft.gov workflow and contact any affected financial institution."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Act promptly, contact institutions through verified channels, freeze credit where appropriate, and keep a clear recovery record."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ],
  "us10": [
    {
      "paragraphs": [
        "A caller sounds like a relative and says they are in trouble, need urgent help, or cannot speak long. Modern audio tools can make voice impersonation more convincing, but criminals also rely on emotional pressure and ordinary caller-ID spoofing.",
        "You do not need to determine whether a recording was generated by AI before protecting yourself. The key is to verify the situation through a channel you control before sending money, account details, or identity documents."
      ]
    },
    {
      "heading": "How the scam typically works",
      "paragraphs": [
        "An unexpected caller claims to be a family member, law enforcement officer, lawyer, or helper. The story creates urgency: an accident, arrest, lost wallet, or medical emergency. The caller may demand immediate money and insist that you keep the situation secret.",
        "A familiar-sounding voice is not reliable proof of identity. Caller ID and contact names can be misleading. The person may also have learned public family information from social media."
      ]
    },
    {
      "heading": "Warning signs to recognize",
      "paragraphs": [
        "Any single clue may have an innocent explanation; combinations deserve extra caution."
      ],
      "table": {
        "headers": [
          "Behavior",
          "Why suspicious",
          "Safer response"
        ],
        "rows": [
          [
            "Demand for secrecy",
            "Blocks independent verification",
            "Call your relative or trusted contact"
          ],
          [
            "Immediate transfer request",
            "Creates pressure and limits reversal options",
            "Do not send until verified"
          ],
          [
            "Gift cards or cryptocurrency",
            "Often difficult to reverse",
            "Pause and independently check"
          ],
          [
            "Refusal to let you hang up",
            "Prevents cross-checking",
            "End call and call back on known number"
          ],
          [
            "Unknown intermediary",
            "Moves you away from real contact",
            "Use official channels only"
          ]
        ]
      }
    },
    {
      "heading": "A two-minute verification protocol",
      "paragraphs": [
        "Agree on a simple response while everyone is calm, before an incident."
      ],
      "orderedList": [
        "End or pause the urgent call without sharing payment details.",
        "Call the relative using the number already saved in your contacts.",
        "If unavailable, contact another family member through an established channel.",
        "Ask a private context question only the real person is likely to know, understanding that shared secrets can also leak.",
        "Contact the relevant hospital, police department, or institution using a number from its official website if the story requires it.",
        "Send money only after independent confirmation and use a traceable, appropriate channel."
      ]
    },
    {
      "heading": "Create a family safety plan",
      "paragraphs": [
        "Choose two trusted contacts who can help confirm unusual calls. Agree that anyone requesting emergency money must tolerate a verification call. A family code word may be a supplementary check, not your only defense.",
        "Avoid posting public social media details that reveal predictable travel schedules, relatives’ names, schools, or personal facts, where practical."
      ]
    },
    {
      "heading": "If someone already sent money",
      "paragraphs": [
        "Speed may matter, especially with irreversible payment methods."
      ],
      "list": [
        "Contact the payment provider or bank using an official channel immediately.",
        "Preserve call logs, transaction IDs, and messages.",
        "Report suspected fraud to the FTC at ReportFraud.ftc.gov.",
        "Protect any accounts or information that were exposed in the conversation."
      ]
    },
    {
      "heading": "Frequently asked questions",
      "paragraphs": [
        "Can AI perfectly copy anyone’s voice? Quality varies, and a familiar-sounding voice is not proof of identity regardless of the technology.",
        "Is caller ID reliable? No; callers can spoof displayed numbers.",
        "Should I ask for a secret code? It can help, but independent callback verification is more important.",
        "What if it is a real emergency? Verification can be fast; use known contacts and official institutions rather than responding only to the incoming caller."
      ]
    },
    {
      "heading": "Bottom line",
      "paragraphs": [
        "Treat unexpected urgent requests as claims to verify, not instructions to obey. A simple family callback rule is useful whether the scam uses AI or not."
      ]
    },
    {
      "heading": "Editorial methodology and limitations",
      "paragraphs": [
        "This guide is written for readers in the United States using the official references listed below. It provides general educational guidance, not personalized legal, financial, security, or technical advice. Product interfaces, service terms, and government procedures can change; verify details with the linked source before taking consequential action.",
        "Reviewed for publication preparation on October 11, 2026. No original product testing, incident investigation, or first-hand comparison is claimed."
      ]
    }
  ]
};

export const usaArticleSources: Record<string, ArticleSource[]> = {
  "how-to-spot-fake-delivery-text-messages": [
    {
      "title": "How to Recognize and Avoid Phishing Scams",
      "url": "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      "publisher": "FTC"
    },
    {
      "title": "Report Fraud",
      "url": "https://reportfraud.ftc.gov/",
      "publisher": "FTC"
    }
  ],
  "how-to-freeze-credit-for-free-in-the-us": [
    {
      "title": "What is a credit freeze or security freeze?",
      "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-freeze-or-security-freeze-on-my-credit-report-en-1341/",
      "publisher": "CFPB"
    },
    {
      "title": "What to do if you are a victim of identity theft",
      "url": "https://www.consumerfinance.gov/ask-cfpb/what-do-i-do-if-i-am-a-victim-of-identity-theft-en-31/",
      "publisher": "CFPB"
    },
    {
      "title": "IdentityTheft.gov",
      "url": "https://www.identitytheft.gov/",
      "publisher": "FTC"
    }
  ],
  "irs-identity-protection-pin-guide": [
    {
      "title": "IRS IP PIN frequently asked questions",
      "url": "https://www.irs.gov/identity-theft-fraud-scams/frequently-asked-questions-about-the-identity-protection-personal-identification-number-ip-pin",
      "publisher": "IRS"
    },
    {
      "title": "IRS identity protection PIN news release",
      "url": "https://www.irs.gov/newsroom/identity-protection-pins-help-taxpayers-guard-against-tax-related-identity-theft",
      "publisher": "IRS"
    }
  ],
  "how-to-secure-home-wifi-router": [
    {
      "title": "How to Secure Your Home Wi-Fi Network",
      "url": "https://consumer.ftc.gov/articles/how-secure-your-home-wi-fi-network",
      "publisher": "FTC"
    }
  ],
  "iphone-privacy-checkup-guide": [
    {
      "title": "Apple Safety Check for iPhone",
      "url": "https://support.apple.com/en-asia/guide/personal-safety/ips2aad835e1/web",
      "publisher": "Apple"
    },
    {
      "title": "Safety Check FAQ",
      "url": "https://support.apple.com/guide/personal-safety/safety-check-faq-ips5f85e089f/1.0/web/1.0",
      "publisher": "Apple"
    }
  ],
  "how-to-back-up-windows-11-pc": [
    {
      "title": "Backup, restore, and recovery in Windows",
      "url": "https://support.microsoft.com/en-US/Windows/Experience/Backup-Recovery/backup-restore-and-recovery-in-windows",
      "publisher": "Microsoft"
    },
    {
      "title": "Recovery options in Windows",
      "url": "https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-options-in-windows",
      "publisher": "Microsoft"
    }
  ],
  "qr-code-scams-parking-restaurants": [
    {
      "title": "See a QR code parked somewhere? Don’t scan it…yet!",
      "url": "https://consumer.ftc.gov/consumer-alerts/2026/09/see-qr-code-parked-somewhere-dont-scan-ityet",
      "publisher": "FTC"
    },
    {
      "title": "FTC Report Fraud",
      "url": "https://reportfraud.ftc.gov/",
      "publisher": "FTC"
    }
  ],
  "is-public-wifi-safe-travel-guide": [
    {
      "title": "Are Public Wi-Fi Networks Safe? What You Need To Know",
      "url": "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know",
      "publisher": "FTC"
    }
  ],
  "what-to-do-after-identity-theft-us": [
    {
      "title": "What do I do if I am a victim of identity theft?",
      "url": "https://www.consumerfinance.gov/ask-cfpb/what-do-i-do-if-i-am-a-victim-of-identity-theft-en-31/",
      "publisher": "CFPB"
    },
    {
      "title": "IdentityTheft.gov",
      "url": "https://www.identitytheft.gov/",
      "publisher": "FTC"
    },
    {
      "title": "What is a credit freeze?",
      "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-freeze-or-security-freeze-on-my-credit-report-en-1341/",
      "publisher": "CFPB"
    }
  ],
  "ai-voice-cloning-scams-family": [
    {
      "title": "FTC scam guidance",
      "url": "https://consumer.ftc.gov/scams",
      "publisher": "FTC"
    },
    {
      "title": "How to recognize phishing scams",
      "url": "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      "publisher": "FTC"
    }
  ]
};
