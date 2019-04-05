---
title: To the other side and back again
date: 05.04.2019
tags:
    -
authors:
    - lpha
---

The daunting task of sitting with your software users - will you be
greeted or gored?

I have spent a couple of days per week for the past two months with the FMU
(Fast Model Update) group, a primary user group of ERT (Ensemble Reservoir
Tool). Here are some thoughts of how that has progressed.

## Background

I am a graduate at Software Innovation Bergen and started about two years ago.
My background, unlike most of us, is a reservoir physicist - so I am already a
bit biased. However, I have always enjoyed working with computers and one of
the first _experiences_ with scripting was maintaining game servers in my
youth. I quickly realised during my education that becoming a more proficient
programmer would benefit my work at the University as well. Never the less, it
is first after I joined SIB and got re-assembled that I really included
Software Craftmanship and found the good path.

## Ambition

Early on we set some vague goals to frame our expectations, both from our side
and from the hosting side. We wanted to:
 - Connect better with some of ERT's primary users to a larger extent
 - Observe directly users of ERT, and discuss some of the issues they thought
   were difficult
 - Communicate directly with FMU as they are supporting assets

 We hoped that FMU would:
 - Connect better with the developers and get an understanding of how we
   process requests and feedback that we get
 - Obtain a fora to raise questions that otherwise would not have been asked
 - Collaborate in investigating low-hangig fruits

## Execution

I got to collaborate with a range of people with varying degree of experience
with ERT and large variation of difficulty between issues.

The issues from advanced users often had me looking into the code to see if
this actually was incorrect and overall familiarize myself better with the
repositories that is ERT. The complexity of the configurations often revealed
that it could be difficult to get an overview of what exactly would be
executed.

The ERT user interface is not particular user friendly. Especially when helping
users with, what ought to be simple tasks, e.g. setting up the ert
configuration and debugging incorrect jobs configurations, I got to experience
at first hand what tools the user has to work with and not being able to dig
into the code.

## Retrospective

The ert repository has a few example cases for testing, but these are not at
all representative of the cases that exist within Equinor. The share amount of
jobs and workflows that are set up in real field configurations demonstrate how
quickly features that looks good and works well on our test cases might not
scale. I believe we now to a larger degree keep in mind our users when we
implement new features.

One thing I had not expected was the amount of self-made tools they had to
overcome difficulties that ERT really should have provided a solution for. For
instance debugging of jobs in ERT is difficult, as there currently is no way in
the user interface to actually retrieve the stderror from a failed job. For an
ERT run with 300 realizations with 200 jobs and three iterations, there are a
total of 180 000 stderror and stdout files available, it quickly gets
overwhelming. We are currently implementing a solution for this!

A final note for the retrospective is the difficulty of keeping two so separate
work situations effective at the same time. I believe good follow-up is
important and knowing what to prioritize at each department.

## Final words

We are all working on different projects and what works for some might not work
for others. But I would recommend anyone to try the same, especially if they
are uncertain about the use of their software. It is a great way to investigate
the source code in a different manner, and observe the user and see how they
interact with the tools you have created.

