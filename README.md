# AI-Website-Fuzzy-Logic

<h1>Using Fuzzy Logic to dinamically choose adverstising banners of food displayed on a restautant's homepage</h1>



Abstract 
Summarise, in no more than 100 words, the entire paper including basic conclusions. 

Building a fuzzy expert system

Introduction 


The problem

To demosntrate the application of a fuzzy experth system, we will consider a problem of 
displaying advertising of the food menu options on a homepage of a restaurant website.

A restautant opens daily for breakfast, lunch and dinner. A customer who wants to see what is 
going on the menu look it up on the website. However, it has fixed gallery of advertisig, 
which consists of a Title for the dish, a picture and a description. 

 

The problem is that everytime that the chef changes the menu, the general manager have to 
contact the IT guys, who then will change, which is awkward and expensive.

Because the rules a human uses to define weather and define time can be described using 
linguistic terms, such as hot and cold weather as well as lunch and dinner time, so the 
selection of dynamic banner displaying suggestions of meals on a website homepage 
according to weather, season and time of the day, is a good candidate for the application of 
fuzzy logic. 





Background 

Describe what prior experiments have been done on such a problem. Put the results of your 
reading to work. Use IEEE citations (numbers in square brackets) for all whose work you 
describe - corresponding to the list of references at the end. Briefly critique these works and 
say what we learn from each. Explain how this leads to your choice of method, as detailed in 
the next section.

AI Method and Tools

Give details of the algorithms, heuristics, you actually used. Describe how you implemented 
them as your own code, or the tools you used to make them work. When necessary, give 
citations for the sources or research papers for these. Credit any other authors who were 
involved, and make sure to be clear about what is your work. Provide any listings of your 
own code in an Appendix at the end. 


Lets us detemine the initial number of meals, seasons, wheather factor and desirability. Thus, 
the decision model considered here, we have three inputs - mt, cw, s, and one output - d. In 
other words, a general manager wants to determine the best options of food to display on the 
website homepage in a certain time spam within an acceptable range.

So we need to specify the ranges of our linguistic variables.

The table below, display the intervals from mt, s, wt by dividing base numerical values by the 
respective possible magnitudes.


Linguistic variables
Degree of membership
Linguistic value
Notation
Crisp
Fuzzy - Numerical 
range (normalised) 
Breakfast time
BT
0
[0, 0.3]
Lunch Time
LT
1
[0.1,0.5]
Dinner Time
DT
1
[0.4, 0.7]
Weather Type



Freezing
F
0
[0, 0.40]
Cold
C
0
[0.25, 0.70]
Warm
W
1
[0.55, 0.75]
Hot
H
1
[0.60, 1]
Melting
M
1
[0.70, 1]
Season



Autumn Season
AS
0
[0, 0.30]
Winter Season
WS
0
[0, 0.40]
Spring Season
SP
0
[0.25, 0.45]
Summer Season
SS
1
[0.30, 0.70]
Christmas time 
Season
CS
1
[0.55, 0.75]
Saint Patricks day 
Season
SP
1
[0.60, 1]
New Year's Eve
NY
1
[0.70, 1]


ADD ALSO CRISP DEGREE OF MEMBERSHIP LIKE PAGE 109, 112, 113, 
DETERMINE LINGUISTIC, 114

Step 2

Determinining the fuzzy sets.

The figure below show the fuzzy sets for all linguistic variables used in out problme . One of 
the most relevant points here is to keep overlaping in adjacent fuzzy sets, creating an 
environment where the fuzzy sistem could respond smoothly.


Input variables

  
Breakfast time: 0,0,0.2,0.3 
Lunch time: 0.2,0.3,0.4,0.5 
Dinner time: 0.4,0.5,0.6,0.7



 
Freezing: 0,0.1,0.2,0.4 
Cold: 0.25,0.4,0.5,0.7 
Warm: 0.55,0.6,0.65,0.75 
Hot: 0.6,0.7,0.8,1 
Melting: 0.7,0.8,0.9,1


 
Autumn: 0,0,0.3,0.4 
Winter: 0.2,0.3,0.4,0.5 
Spring: 0.3,0.4,0.5,0.6 
Summer: 0.5,0.6,0.7,1




Note, that for the season, we only picked the four main seasons, but it couild be extended for 
special dates, like Christmas, Eastern, etc, as mentioned above, but it could be improved later, 
perhaps, using the analytics data form the website to find out the times of the year that the 
website has more accesses.

In reality, all linguistic variables, linguistic values and their ranges would, generally, be 
picked by the domain expert.

Step 3

Elicit and construct fuzzy rules

Now it is time to obtaining the fuzzy rules. To achieve tahat, we need to consult the expert to 
describe how the problem could be solved by using the fuzzy linguistic variables defined 
previously.

REALLY TRY TO ADD SOME REFERENCING FROM THE PAPERS IVE FOUND


Creating a very basic relation between the meal time mt, and the weather type, assuming that 
the other input variables are fixed. This relation can be expressed in the following form.: if 
temperatures increases and is summer time, then refreshing meal types desired.


Rule
Meal Type
Season
Weather
Desaribility
1
Breakfast
Winter
Freezing
Undesirable
2
Lunch
Summer
Warm
Very desirable
3
Dinner
Winter
Cold
Desirable
4
Dinner
Summer
Hot
Desirable
5
Lunch
Spring
Warm
Very desirable
6
Breakfast
Autumn
Cold
Undesirable
7
Breakfast
Summer
Warm
Very desirable
8
Lunch
Summer
Cold
Desirable
9
Dinner
Spring
Warm
Very desirable




Rule base 2
Inferences (Linguistic variables and hedges):
If [Meal time].Breakfast time
Then
Undesirable
If [Meal time].Lunch time
Then
Very Desirable
If [Meal time].Dinner time
Then
Undesirable
If [Weather type].Freezing
Then
Undesirable
If [Weather type].Cold
Then
Desirable
If [Weather type].Warm
Then
Very Desirable
If [Season].Autumn
Then
Very Desirable
If [Season].Winter
Then
Desirable
If [Season].Spring
Then
Undesirable


Step 4: Encode the fuzzy sets, fuzzy rules and procedures to perform fuzzy inference into the 
expert system

The next part is to build the expert system. To achieve this I've chosen to build the system 
using a script programming language called Javascript, applying the fuzzy logic development 
tool called TYPE HERE NAME OF JAVASCRIPT LIBRARY USED. The reason that I've 
used this platform was for the possibility for rapid developing and prototyping a fuzzy expert 
system which would include a fuzzy logic development tool.
THE NAME OF JS LIB has integrated x, y z and the member function  and outuput of x y z, 
This is a good option for begginners, where knowledge engineers would only need to encode 
fuzzy rules in Enlgish-like systax but visualizing the membership functions in a graphic 
display.


Evaluation Method
 
Explain how you will show that you have met your goal. This might involve an analysis of 
the behaviour of your system's operation, architecture, task and environment. Systematically 
manipulate one of these variables at a time and see how it influences the behaviour of your 
system. Alternatively, it might be important to measure the performance of your system using 
some direct score or index. Describe the data cases or specific environment you used and the 
steps you took to set up your experiment. Explain in detail the measurements or observations 
you should use. Outline any practical difficulties you encountered; if you are not actually able 
to carry out your evaluation, say how it should have been done.


Step 5 Evaluate and tune the system

To define if the fuzzy system meet the requirements, we test a range of situations depending 
on the season, time of the day and weather temperature like. Our system has three inputs and 
one output. In order to tuning the fuzzy system it will involve a number of actions in the 
following order:

1 - Review model input and output variable, and in case it is required to redefine their ranges.

2 - Review the fuzzy sets, maybe if becomes necessary define add extra  sets on the universe 
of discourse.

3 - Important to always provide enough overlap between neighbouring sets.

4 - Review rules and add more to the rule base if required.

5 - Create and adjust hedge rules.

6 - Adjust the rule execution weights.

7- Tunning the shapes of the fuzzy sets.

