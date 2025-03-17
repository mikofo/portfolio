---
title: Condesing feature creation to a single day
template: post
topic: Design, Engineering
date: March 17, 2025
---

## Context

Recently at [Hum Capital](https://www.humcapital.com), we partnered with a new lender to provide capital to qualifying companies much faster. This involved working with the API hosted our partner. We worked hard to integrate with this API and everything looked good on sandbox. It may come as a huge shock, but their production api didn't work exactly the same way on production. To be fair, this wasn't technically a bug on their end, the API was deeply tied to the business process which was hard to replicate in a staging environment.

## Mitigating uncertainty

The good news was that I had prepared for this; I did not expect it to all work perfectly first deploy to prod. To mitigate this, I invested heavily in making sure service and product logging was going to be robust enough to move quickly on iterating.

Every step of the process had data dog events associated with them so we could build a funnel chart to track dropoff. Every session was equipped with session replay. Every backend service and the frontend had tight logging to track network requests and response.

If things got really bad, we use flagsmith to feature flag visibility. Business stakeholders were given easy to use segment GUI's they could use to turn the feature on an off for specific users.

## Catching the pain points

When we turned the feature on live, we saw that the user flow wasn't working exactly how we expected. The final step for the user was application submission. It was a two-step process that required a REST call for each step. Because of the sandbox functionality we assumed a very specific response from the first call that would allow to make the second call. In the sandbox we were able to couple these calls into a single react-query query function with a single error or success state.

This proved brittle in practice and users weren't getting very good feedback about what was going on. Luckily we caught it immediately with our alerts and I got to work right away.

## Design

There were two users who experienced this and their experience was identical. This feature was very important to the business and there was little tolerance for failure or bad user experiences. I used these session replays and their emails to our commercial team as my user research and began to create designs.

My key takeaways were:

- Users need to know all the steps upfront
- Users need to know why something failed
- Users need actionable feedback in case something goes wrong

I produced the following designs in figma in about 1 hour:

IMAGES HERE

I was able to leverage existing patterns for most of these pages but I did design a new progress pattern for this feature. We had had progress bars before but they were just simple loaders. This needed to be a multi-step progress bar with error and loading states. I borrowed visual styles from our scrollbar but changed width and added lables, loading, success and error states for each step

IMAGE HERE

I requested review by our stakeholders and design team and the designs were approved quickly.

## Engineering

Over the past 3 years, I led the process of creating a great component library and utilty class system so we have a 1-to-1 sync between figma components and react components as well as design tokens that correspond to utility classes.

It was work up front but now we move quickly on translating figma designs into code. I was able to produce the react code for the basic UI in another hour.

We already had a resuable component for this type of centered information page called `CenteredLayout`.

```jsx
export function CenteredLayout({
    title,
    description,
    graphic,
    children,
}: {
    title: string;
    description?: string | (() => React.ReactNode) | null;
    graphic?: React.ReactNode;
    children?: React.ReactNode;
}) {
    return (
        <main
            className={clsx(
                "px-6 py-24",
                "grid h-[99vh] place-items-center",
                "sm:py-32 lg:px-8",
            )}
        >
            <div className="flex flex-col items-center text-center">
                {graphic}
                <h1 className={clsx("display-m", "sm:display-s")}>{title}</h1>
                {description &&
                    <p className="body-s mt-6 max-w-[672px]">
                        {description}
                    </p>
                }
                <div
                    className={clsx(
                        "mt-10 w-full",
                        "flex flex-col items-center justify-center gap-x-6",
                    )}
                >
                    {children}
                </div>
            </div>
        </main>
    );
}
```

To account for the new progress bar designs, I created a component called `GradatedProgress`.

```jsx
interface GradatedProgressProps {
    steps: string[];
    currentStep: number;
    showSpinner?: boolean;
    isError?: boolean;
    className?: string;
}

export const GradatedProgress: React.FC<GradatedProgressProps> = ({
    steps,
    currentStep,
    isError,
    showSpinner = true,
    className = "",
}) => {
    const progress = (currentStep / (steps.length - 1)) * 100;

    return (
        <div className={clsx("w-full", className)}>
            <div
                className={clsx(
                    "relative h-2 w-full overflow-hidden rounded-full bg-slate-100/20",
                )}
            >
                {/* Progress bar */}
                <div
                    className={clsx(
                        "absolute h-full rounded-full bg-brand-400 transition-all duration-500 ease-in-out",
                    )}
                    style={{
                        width: `${progress === 100 ? 100 : progress + 3}%`,
                    }}
                />
            </div>

            {/* Step indicators */}
            <div className="relative mt-4 flex justify-between">
                {steps.map((step, index) => {
                    const isCurrent = index === currentStep;
                    const isLast = index === steps.length - 1;
                    const isCompleted =
                        index < currentStep || currentStep === steps.length - 1;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2 transition-[width] duration-500 ease-in-out"
                        >
                            {(!isCurrent || isLast) && (
                                <CheckIcon
                                    className={clsx(
                                        "fade-container relative z-10 size-4",
                                        !isCompleted && "invisible opacity-0",
                                    )}
                                />
                            )}

                            {isCurrent && showSpinner && <Spinner />}

                            {isError && isCurrent && (
                                <XMarkIcon className="fade-container size-4 self-end fill-red-500 stroke-red-500" />
                            )}

                            <p
                                className={clsx(
                                    "ui-label mt-1 transition-colors duration-300",
                                    isError && isCurrent && "text-red-500",
                                )}
                            >
                                {step}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
```

## Transitions and Interactions

In our app, the user has to go through many form steps and I feel an obligation to make the experience as frictionless and as comfortable as possible. Now that I had the basic stucture in place, I wanted to get the transitions and interactions perfect.

## Business Logic

The rest of the effort (and the bulk of my time) was spent getting the business logic just right. For security reasons, I won't go into detail but the hardest part is always making sure your code works for real people, real teams in the real world. Imagining all edge cases, creating processes so the user feels taken care of and tests to encapsulate and support future change.

## Deployment

After code review, the new code was run against our end-to-end and unit tests and QA'd by myself and a few others. It was then pushed to prod, within the hour we had another use run through the new process and it worked like a charm.

Its not always possible to condense the cycle down to one day, but I'm always trying to trim the fat and when I pull it off like this, its one of the best feelings you can have as a product creator.
