---
title: Tonetabs
subtitle: Building an indie product from scratch
template: post
topic: Product, Design, Engineering
date: 2020-present
---

## The Idea

I've been playing the guitar for over a decade and in 2020 during lockdown, I got **really** into guitar effects pedals. Guitar effects pedals are little boxes that the guitar can be plugged into that alter the sound: things like distorion, reverberation, and many others.

All of these pedals in certain combinations with certain knobs dialed to different positions produce the wide range of possible guitar tones. Guitars, pedals, and amps are what makes the tonal difference between Paul Simon's graceland and Metallica's black album.

I was spending a lot of time trying to get my tones dialed-in just right. It was difficult to learn, most of the material was in the form of youtube videos and they were never exactly what I was looking for. I also spent good money on recommended pedals only to find they weren't really what I was looking for just to sell them at a loss.

It's very common for guitarists to use a user-generated library like ultimate guitar to find sheet music. I thought it would be only natural that there was a similar library for guitar tones.

## Respectable first try

I became convinced that I wanted to build this app. At this time in my career, I was less product focused and definitely had a "if you build it, they will come" mentality.

During the pandemic, I built an iOS app called tonebaby and managed to get ~60 users actively using it. While, I am super proud of it and it taught me a lot, I didn't know the first thing about product ideation and my design and engineering skills were weaker than they are now.

Eventually I shut it down because I hadn't really identified a need. I created an app that let people store guitar tones but it wasn't really better than writing it down on paper. If you can't solve a real need, people will not add another app to their lives.

## Revisiting

Even after shutting down my app, I had felt that I was on to something. Over the last five years, I have held positions that have taught me more about product ideation. I learned more about performing user research and finding places within users needs to create real value.

With the sudden ubiquitousness of AI generated content, I could potentially solve different types of problems with solutions that could have never existed before.

Last year, I decided to revisit the guitar tone idea. I wanted to do great product work this time and not just start building something half-brained.

## User Interviews

I conducted user interviews with 8 different guitarists, and researched forums like reddit. Guitarists skew male, but that is changing and I did my best to represent as many different types of people as possible in my interviews. I am only one person so I was unable to do a large number of interviews. However, for a personal project I felt I could reasonably move forward.

## User Personas

### The Dabbler

**Demographics**:

- Late 20s.
- Male
- Denver, Colorado
- Bachelor’s Degree

The dabbler is a hobbyist that has been playing the guitar for ~5 years. They are technology-savvy and frequently use apps to support their hobbies. They likely have a regular job, and they play guitar for relaxation and self-expression.

The Dabbler owns only a couple of pedals and and amp. They own 1-2 guitars. They know some music theory but are not obsessive. They particularly love playing their favorite songs.

**Goals:**

- Sound like his favorite guitarist when playing casually

**Challenges**:

- With limited gear and perhaps limited knowledge about tone shaping, it can be a challenge to recreate specific sounds.
- They struggle to find time to research and experiment due to their busy schedule.
- Financial constraint: they can't afford to buy new pedals frequently.

### The Newbie

**Demographics**:

- Late teens.
- Female
- Sacramento, California
- In high school

The Newbie is just getting into playing the guitar. They have started to jam with a few of her friends in her mom’s basement. Playing the guitar is a social activity and she sometimes records videos of her and her friends trying to cover different songs.

The Newbie owns 1 guitar and 1 amp. She is a tech native and is very used to using her phone in a variety of settings. She has time to research.

**Goals:**

- Learn how to get different guitar sounds
- Find her style
- Sound like artists she likes

**Challenges**:

- She knows what kind of music she likes but she has no idea how musicians go about creating sounds.
- Financial constraint: she can't afford to buy new pedals frequently. But can get them for special holidays.

### The Musician

**Demographics**:

- 30
- Male
- Nashville, Tenesee

The Musician has regular gigs around town and is an experienced player. He has a sophisticated and honed-in sound. He plays with a country/blues band that has a medium and growing following.

He has a pedalboard with excess pedals. Some of the pedals are staples but he does change them out here and there.

Every show, all of his gear needs to be setup and dialed-in. Sometimes it is other technicians setting up the gear.

Goals:

- Grow following
- Support himself with music

**Challenges**:

- Remembering all of the settings can be difficult. He uses tape, drawings, and notebooks to keep track but that can be kind of a pain.

### The Gearhead

**Demographics**:

- Middle-aged
- Male
- Portland, Oregon

The Gearhead is obsessive about gear. He owns 10s-100s of pieces of gear.

He often consumes guitar gear related content:

- r/guitartones and r/guitarpedals
- youtube videos
- guitar pedal websites

The Gearhead loves reading a posting their own guitar tones on sites like reddit. They get a sense of satisfaction when other people like the tones they have created.

They love to experiment and try new gear.

**Goals:**

- Gain clout by creating guitar tones
- Find community with other gearheads.

**Challenges**:

- Remembering all of the settings can be difficult. He uses tape, drawings, and notebooks to keep track but that can be kind of a pain.

## User Stories

**As a:** newbie or guitarist who dabbles with guitar effects**,**

**I want:** to quickly learn how I can achieve the guitar tone of my favorite artists with the gear I already have

**So that:** I can enjoy my guitar playing without spending too much time or money.

---

**As a:** newbie to guitar and/or effects**,**

**I want:** to quickly learn how guitar effects work

**So that:** I can get playing without much friction.

---

**As a:** gearhead

**I want:** to share the tones I have created

**So that:** I can gain clout and community.

---

**As a:** gearhead or musician

**I want:** save my dialed-in effects settings

**So that:** I can remember my tones without much effort.

## Problem and Hypotheses

<aside>
💡 A dabbler needs a fast way to figure out how to dial in the gear they he already has because they don’t want to spend a bunch of time googling, reading, and watching videos. They just want to play!

</aside>

I believe that a library of dialed-in guitar tones with the option to see an equivalent tone with their own gear will decrease the amount of research time and allow guitarists more time to enjoy playing.

<aside>
💡 A newbie needs help learning how guitar pedals work so they can figure out which pedals to buy first and have fun playing.

</aside>

I believe that a library of dialed-in guitar tones will help newbies figure out their first pedals.

I believe that learning assets will help newbies understand how guitar tones work.

<aside>
💡 Guitarists need a common place/way to store guitar tone settings so that they can have a consistent tone without much work.

</aside>

I believe that the ability to create guitar “tonetabs” will decrease cognitive load for those who experiment with tone.

## Value Props

I finally arrived at my value props:

- Library of guitar tones for various artists & genres.
- Ability to save dialed in settings.
- Ability to shared tones you’ve made publicly.
- Learning assets for those new to guitar tones.
- **Ability to get equivalent tones using gear you already own.**

Looking at the value props, I determined that "the ability to get equivalent tones using gear you already own" was undeniable the most valuable. This is the north star of the product design. The other value props may be worthwhile to hit, but this is the focus.

## Design

I am currently in the design phase of this project. I am working with a good friend and brand designer [Keila]() to design the brand and visual language. Initial product designs will be as lightweight as possible while still being high-quality.

I will test my hypothesis regarding the north star value prop and iterate.

## Engineering

There is an AI component required to satisfy this value prop. I am currently researching various models, prompt, and pipeline structures to produce the best result.

In the meantime, thanks for reading. I look forward to updating this page as the project progresses!
