---
title: Hum Capital
subtitle: Taking a product from 0 to 1 in 2 weeks
template: post
---

# Creating a Demo Product Environment to Demonstrate Value to New User Groups

The Hum Capital Sales and Product teams collaborated to develop a demo environment that highlighted our product's benefits for a new user group, enhanced the front-end experience, and laid the groundwork for future functionality upgrades in the live product.

## Introduction

### Context

Before this project, Hum Capital's core product, the Intelligent Capital Market (ICM) platform, served two main purposes:

- Companies seeking funding could connect their financial systems (e.g., Xero, QuickBooks) to access expert, AI-driven analysis for fundraising preparation and connect with potential investors
- Individual investors could join to find a steady flow of deals matching their investment criteria

The ICM also provided supplementary financial tools for companies, such as debt and equity funding calculators.

Research conducted by Product and Sales revealed that Investors, particularly those in Credit Analyst roles, represented an underserved segment with high potential for growth and retention. By better addressing their portfolio monitoring needs, the teams identified a significant opportunity to drive engagement, new user sign-ups and improve user retention rates. It was clear that a demo product would be instrumental in advancing discussions with this group.

> **Note:** Historically, our origination strategy primarily targeted companies, under the assumption that attracting them would naturally bring investors ("build it, and they will come"). For companies, outreach and marketing efforts used Hum's track record of fundraisings for other companies and Hum's financial tools to convince companies to sign up, (the tools would often use the company's own financial data to prove value). However, since our Marketing approach catered to companies, not Investors, no tailored investor demo experience had been created to showcase ICM's value.

### Problem

The challenge was illustrating ICM's value to Credit Analysts at investment funds. A typical Credit analyst would spend considerable time conducting due diligence and reviewing monthly financial reports of their portfolio companies (often referred to as PortCos). ICM simplifies this process by centralizing all financial data into a single dashboard with consistent metrics that Credit Analysts are used to seeing, significantly reducing the time spent navigating individual spreadsheets from each PortCos, and relying on PortCos to report accurately.

In addition, ICM ensures financial data is auto-updated in real-time, notifying analysts of key events—like covenant breaches (when a PortCo violates a rule of their loan)—automatically. Previously, such insights required hours of manual data analysis.

The Sales team needed a secure demo environment to demonstrate these capabilities without using real company data and therefore breaching our own strict confidentiality agreements. Creating a demo with realistic dummy data addressed this requirement, while also providing the Product team an opportunity to prototype a new, scalable dashboard design.

## Objectives and Goals

### User Needs

We had two primary users:

#### 1. Internal Sales Team Members

- Required a concise, 10-minute demo aligned with their talk track
- Needed a streamlined user flow demonstrating how an analyst could move from an email notification to a feature-rich portfolio dashboard in just a few clicks

#### 2. Prospects (Credit Analysts at Investment Funds)

The demo needed to clearly show two main benefits:

**Effortless Access:**

- Instant notifications for any changes in portfolio company financials or new deals matching their criteria

**Portfolio Health Overview:**
Ability to efficiently assess key financial metrics such as:

- EBITDA
- Steady State Cash Flow
- Gross Margin Revenue
- Annualized Recurring Revenue
- Short-Term Borrowing Capacity

Analysts also needed the ability to download raw financial data for deeper diligence. This flexibility was crucial, as each firm, and sometimes individual Analysts, has their own unique process for validating a company's financial health.

The solution had to be flexible and transparent, allowing analysts to customize their analysis as needed.

### Business Goals

This work (completed in Q3-4, 2024) supported Hum Capital's strategic goals for 2025, which include:

- Expanding the network to attract new Credit Analyst users
- Achieving 25+ financings in 2025
- Onboarding five investment firms as software partners by year-end 2025

## Process Overview

### Research

Conducted unstructured and semi-structured interviews with Sales team members, internal Investor subject matter experts (SMEs), and former investment professionals in our network.

**Unstructured Interviews:**

- Gathered insights on the sales process and demo feedback
- Key findings included the need for seamless demos with no load times or errors
- Emphasized the importance of believable dummy data to maintain credibility

**Semi-Structured Interviews:**

- Focused on understanding analysts' processes for new deal evaluations and due diligence
- Findings emphasized the desire for simple, investment criteria-based notifications and immediate access to visual dashboards, with the option to dive into raw data
- Analysts were extremely specific about preferred data labels and chart types, supporting our Sales team's assertion that financial data had to be realistic

### Ideation

Simplified the user flow for the demo, enabling analysts to move from an email notification to the dashboard in minimal clicks. Collaborated with the Sales team to map these steps.

#### User Stories

**For Internal Sales Team Users:**

1. As a Sales team member, I want a concise, 10-minute demo that aligns with my talk track,
   so that I can effectively communicate our product's value proposition during presentations.
2. As a Sales team member, I want a streamlined user flow that demonstrates how an analyst can move from an email notification to a feature-rich portfolio dashboard in a few clicks,
   so that I can showcase the platform's simplicity and efficiency to prospects.
3. As a Sales team member, I want the demo to use realistic dummy data and load seamlessly with no errors,
   so that I can maintain credibility and build trust with prospects during presentations.

**For Prospects (Credit Analysts at Investment Funds):**

1. As a Credit Analyst, I want to receive instant notifications about changes in portfolio company financials or new deals matching my criteria,
   so that I can stay updated on opportunities and risks without needing to search manually.
2. As a Credit Analyst, I want a portfolio health dashboard that provides an overview of key financial metrics (e.g., EBITDA, Gross Margin, ARR),
   so that I can quickly assess the financial health of portfolio companies.
3. As a Credit Analyst, I want the ability to download raw financial data,
   so that I can perform deeper diligence using my firm's specific validation processes.
4. As a Credit Analyst, I want customizable analysis tools and data presentation options,
   so that I can adjust the dashboard to fit my unique workflow and preferred evaluation methods.
5. As a Credit Analyst, I want the data labels and chart types in the dashboard to align with standard industry practices,
   so that the information is intuitive and credible for my analyses.

**Supporting Research Insights:**

- **Realistic Data and Visuals:** Both Sales team members and analysts emphasized the need for believable data and intuitive chart types to ensure credibility and usability
- **Seamless Experience:** The demo must load quickly and function flawlessly to avoid disruptions during critical prospect interactions
- **Flexibility and Transparency:** Analysts require tools that adapt to their specific workflows and allow them to dive deeper into the data when needed
- **Effortless Access:** Notifications and streamlined navigation are crucial for minimizing friction and maximizing productivity

### Prototyping

The Product team used a range of prototyping tools and methods to design an enhanced visual experience of the demo dashboard, with the eventual goal of transferring this updated look and feel to the live product.

The product team designed a widget-based dashboard that when customized could be applied to all user groups, using the same dashboard pattern. This also appealed to our Credit Analyst user's desire to see a quick, visual snapshot of key financial information. The product team included interactive features to make the widgets expandable for a more in-depth view, and included download options to download raw data. The dashboard featured two tabs/pages, an overview page for all deal/company information and an analytics page for purely financial information.

Our approach was based on a 16-column grid layout, with 2-column widgets available in three different lengths. The expandability of widgets was designed to be dependent on the type of information they displayed, with the full expansion width set at 2 column width. Through this process, we determined that the longest length widget (XL) was unnecessary, and we settled on small, medium and large sizes.

Other enhancements we prototyped included an expanding sidebar menu, which showed current deals, potential new deals, plus a search option. Again, this design element not only improved the navigation experience for Credit Analysts but were designed to be adaptable across other user types, such as Companies and Admins.

## Solution

### Design Decisions and Features

#### Customizable Expanding Widgets

We introduced expanding widgets that allow users to customize their views, offering flexibility with both one- and two-column layout options. This feature enables users to organize their dashboard efficiently based on their preferences and the information they need most.

#### Sidebar Navigation Enhancements

A new sidebar navigation bar was designed to open like a drawer, providing users with the ability to swiftly navigate between different portfolio companies. This enhancement improved usability by making navigation more intuitive and efficient.

#### Integrated Notification System

We also integrated a notification system into the design framework. This feature alerts Credit Analysts when significant changes occur within a company, ensuring they are immediately aware of crucial updates.

#### Overall Visual Redesign

The overall look and feel of the ICM platform underwent a major redesign. Key achievements included:

- Developing a cohesive widget pattern style
- Transitioning the color scheme from grey to Slate blue for a more modern and appealing interface
- Enhancing contrast to improve readability
- Refining the visual hierarchy of typography

This adjustment was based on user feedback indicating a preference for dark mode, coupled with concerns about legibility.

#### Improved Data Communication

We also developed new patterns and components to better convey financial information, including:

- Clearer representations of charts
- Visual indicators for statuses related to Investment Criteria and Data Service Connectors

These improvements collectively aimed to make the platform more user-friendly and visually engaging, while also ensuring that critical data is communicated effectively.

## Testing and Key Learnings

[Content to be added]

## Outcomes

[Content to be added]

- **Metrics:** Include any quantifiable outcomes, such as conversion rate improvements or reduced demo drop-offs
- **Feedback:** Qualitative insights from stakeholders and users
