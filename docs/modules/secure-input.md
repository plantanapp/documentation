---
id: secure-input
title: Secure Input Option on Text Based Fields
sidebar_label: Secure Input
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
>
> Skill Prerequisites: `HTML`

Action Form 5.9.x and Plant an App 1.9.x introduces a new setting for text input fields to help secure your application against XSS attacks. This setting appears as a checkbox at the bottom of the field's general settings, directly above **Bind Expressions** and is labeled **Secure Input**. It appears on the fields listed below.

## `Fields Impacted`

- DNN Text Editor
- Large Text
- Simple Rich Text
- Text Box
- Trumbowyg
- Hidden Field with Custom Value

This option will be **ENABLED** by default on each of these fields EVEN if the field already existed before you upgraded to Action Form version 5.9.x or Plant an App 1.9.x. Before you decide to disable the option, you should understand the implications.

This option is present to help you prevent the possibility of Cross Site Scripting (XSS) attacks being implemented in your text-based fields. To learn more about XSS attacks, please reference [this article from OWASP](https://owasp.org/www-community/attacks/xss/).

## `How The Input Is Processed`

When enabled, the following actions are taken on the input BEFORE the data is passed to any downstream actions:

- All `<script>` and `<style>` tags along with the content they contain are removed
- NoFollow will be forced on all links.  This means the rel=”nofollow” attribute will be added to every anchor tag.
- Only the standard attributes [listed below](#allowed-attributes) will be allowed on any HTML tag
- Only the CSS properties [listed below](#allowed-css-properties) will be allowed in a style attribute
- The Class attribute will be removed from any HTML tag

:::note
Even though `<script>` and `<style>` tags are removed, this does not apply to code snippets. If the tags are wrapped in a `<code>` tag, they are encoded and submitted.
:::

### `Allowed Attributes`

**Only** the attributes listed below will be allowed when **Secure Input** is enabled:

abbr, accept, accept-charset, accesskey, action, align, alt, autocomplete, autosave, axis, bgcolor, border, cellpadding, cellspacing, challenge, char, charoff, charset, checked, cite, clear, color, cols, colspan, compact, contenteditable, coords, datetime, dir, disabled, draggable, dropzone, enctype, for, frame, headers, height, high, href, hreflang, hspace, ismap, keytype, label, lang, list, longdesc, low, max, maxlength, media, method, min, multiple, name, nohref, noshade, novalidate, nowrap, open, optimum, pattern, placeholder, prompt, pubdate, radiogroup, readonly, rel, required, rev, reversed, rows, rowspan, rules, scope, selected, shape, size, span, spellcheck, src, start, step, style, summary, tabindex, target, title, type, usemap, valign, value, vspace, width, wrap

### `Allowed CSS Properties`

**Only** the CSS properties listed below will be allowed when **Secure Input** is enabled:

background, background-attachment, background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, border, border-bottom, border-bottom-color, border-bottom-left-radius, border-bottom-right-radius, border-bottom-style, border-bottom-width, border-collapse, border-color, border-image, border-image-outset, border-image-repeat, border-image-slice, border-image-source, border-image-width, border-left, border-left-color, border-left-style, border-left-width, border-radius, border-right, border-right-color, border-right-style, border-right-width, border-spacing, border-style, border-top, border-top-color, border-top-left-radius, border-top-right-radius, border-top-style, border-top-width, border-width, bottom, caption-side, clear, clip, color, content, counter-increment, counter-reset, cursor, direction, display, empty-cells, float, font, font-family, font-feature-settings, font-kerning, font-language-override, font-size, font-size-adjust, font-stretch, font-style, font-synthesis, font-variant, font-variant-alternates, font-variant-caps, font-variant-east-asian, font-variant-ligatures, font-variant-numeric, font-variant-position, font-weight, height, left, letter-spacing, line-height, list-style, list-style-image, list-style-position, list-style-type, margin, margin-bottom, margin-left, margin-right, margin-top, max-height, max-width, min-height, min-width, opacity, orphans, outline, outline-color, outline-offset, outline-style, outline-width, overflow, overflow-wrap, overflow-x, overflow-y, padding, padding-bottom, padding-left, padding-right, padding-top, page-break-after, page-break-before, page-break-inside, quotes, right, table-layout, text-align, text-decoration, text-decoration-color, text-decoration-line, text-decoration-skip, text-decoration-style, text-indent, text-transform, top, unicode-bidi, vertical-align, visibility, white-space, widows, width, word-spacing, z-index

## `Recommendations`

When deciding whether to disable the **Secure Input** option you should consider the following:

1. Is the field on a form located on a public page, or a page where users can create an account that does not get vetted before approval? If so, **do not disable Secure Input**.
2. Is the field used to allow users to input complex formatted HTML or javascript? If the field is being used only by trusted users, then consider disabling Secure Input.
3. If you decide to disable Secure Input, consider adding using the [Sanitize HTML](actions/sanitize-html.md) action on your submit buttons to have more granular control over how the input will be processed.
