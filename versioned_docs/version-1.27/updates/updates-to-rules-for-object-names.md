---
id: updates-to-rules-for-object-names
title: Updates to Rules for Object Names
sidebar_label: Updates to Rules for Object Names
---

# Updates to Rules for Object Names

> Audience: [`Developers`, `Administrators`, `Citizen Developer`](/audience.md#developers-administrators-citizen-developers)
>
> Skill Prerequisites: `APIs`, `Workflows`, `Automation Jobs`, `Namespaces`

## Overview

Starting with Plant an App version 1.27.340, new naming conventions are being enforced for core platform components, including Workflows, Automation Jobs, APIs, and Namespaces. This update improves consistency and clarity across the platform while minimizing the risk of issues related to incompatible or ambiguous names. This article explains the new rules, outlines the user experience you can expect, and provides key guidance for administrators and developers.

****

## What's Changing?

Previously, these objects allowed a wider variety of characters in their names, sometimes resulting in problems for referencing, interoperability, or formatting. With these changes, stricter rules are enforced to ensure all names are compatible and unambiguous.

**The updated naming validation covers:**
- **Workflows**
- **Automation Jobs**
- **APIs**
- **Namespaces**

### New Naming Rules

- **Allowed Characters:**  
  - Alphanumeric (`A-Z`, `a-z`, `0-9`)
  - Dash (`-`)
  - Underscore (`_`)
  - Space (` `)

- **First Character:**  
  - Must be a letter (`A-Z`, `a-z`) or underscore (`_`)
  - Cannot start with a dash, space, or number

- **Last Character:**  
  - Cannot be a space

- **APIs:**  
  - When the URL is generated automatically, only the following characters are allowed: `A-Z`, `a-z`, `0-9`, `_`, `-`
  - When entering a URL manually, only `A-Z`, `a-z`, `0-9`, `_`, `-`, and `/` are allowed (`/` cannot be first or last in the path)

- **Filesystem Reserved Characters:**  
  - Characters that could break file or database operations, such as `\ / : * ? < > |`, are strictly forbidden.

****

## What to Expect When Editing Object Names

### No Automatic Name Changes

Upon upgrading, existing object names **will not be automatically changed**. All of your current workflows, jobs, APIs, and namespaces will continue to operate as usual unless you attempt to **edit or rename** them.

### Editing or Saving an Object with a Disallowed Name

- If you *edit* an object whose name contains forbidden characters, you will see a warning:  
  `"The supplied Name contains forbidden characters. Learn More."`
- You will be required to update the name to fit the new rules before saving.
- **Until you choose to edit a name, objects with pre-existing "legacy" names will continue to function.**

### Operational Continuity

- Changing a name to fit the new convention does **not break** the operation of your workflow, automation, or API.
  - Internal references (using IDs/Guids) will be updated automatically.
  - Workflow actions will continue to function as expected after renaming.

****

## Frequently Asked Questions

### **Will my integrations break after the rules are enforced?**
No. Existing names will not be changed automatically, and operational logic is preserved. You only have to update object names if you edit them.

### **Why do I see the 'forbidden characters' warning only after editing?**
The platform enforces validation at the time of editing or renaming, not during background processes or upgrades. This approach prevents unintended disruptions to your running automations, APIs, and workflows.

### **Does renaming an object change how my automations or APIs work?**
No. Renaming is handled safely—internal links, calls, or triggers will update automatically.

****

## Key Recommendations

- **Review Names Before Editing:** If you plan to make changes to existing objects, be aware of the new rules and prepare to update names if the validation is triggered.
- **Plan for Gradual Adoption:** There is no requirement to comprehensively rename all objects immediately after upgrading. Update names as you encounter the validation message.
- **Check External Dependencies:** If your object names are referenced externally (for example, by scripts or direct database access), verify those references before renaming and update them as needed after.

****

## Conclusion

By enforcing clear and consistent naming rules across Workflows, Automation Jobs, APIs, and Namespaces, Plant an App is promoting greater stability and interoperability throughout the platform. While these rules apply only when you modify an object, being ready—and knowing what to expect—will help ensure a smooth transition. If you see the forbidden character warning, simply update the name and continue your work with no concern for breaking existing logic.

*Updated 09/16/2025 (10014)*