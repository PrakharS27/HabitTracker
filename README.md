
# Habit Tracker app

This is the basic project for displaying all the Habits list Which is used to store in redux and you can also update status of habit. 




## Screenshots

#### Habit Tracker Home Page
![App Screenshot](https://snipboard.io/zntVEa.jpg)

Home Page Where all the habits of today are displayed. There are three status
such as none, done, not-done. By default status of any habit is set be not-done.
You can update the status of habit by click on icon.

#### Adding New Habit Task
By Clicking on + (plus) button inside tabbar.
![App Screenshot](https://snipboard.io/zHovE8.jpg)

Enter the title of the habit and description for the habit. Once the habit added you will be redirected to Habit Page. 
Where all the list of Habits will be displayed.

#### View All The Habits
![App Screenshot](https://snipboard.io/cGfMa1.jpg)
In this Page You can view All the habits list. By Clicking on any particular habit yu can view the days and status of that particular habit and you can update status of that habit.


#### View Previous days status of a habit
![App Screenshot](https://snipboard.io/vf5Xrx.jpg)
This page show the habits status days wise. It contain the list of total 7 days not more than that it will replace the previus days status for new days.
You can see the ison  thums up show that the habit has done, the thums down action shows not done and the minus circle icon displays that the status of that habit is not done.
## Tech Stack

**Client:** React, Redux, TailwindCSS



## Run Locally

Clone the project

```bash
  git clone https://github.com/PrakharS27/HabitTrackermain
```

Go to the project directory

```bash
  cd habit-tracker
```

Install dependencies

```bash
  Yarn
```

Start the server

```bash
  yarn start

  View on http://localhost:3000/
```


# Folder Structure

#### Component
Contain all the components used in Project.

#### Pages
Contain All the pages used in project like Today Habits List which is homepage,
 update page, add new habit page.

#### Hooks

Contain useApiCall.ts Hook to call all the requests.

#### assests
Contain all the images which is used for the project.

#### redux
Contain redux store, slices.




![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png)

