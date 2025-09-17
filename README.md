# Cognitive Skills Student Performance Dashboard

[Live Demo on Vercel](https://cognitive-skills-stude-git-2e3400-priyanka-ss-projects-f232d9c7.vercel.app)  
[GitHub Repository](https://github.com/Priyas0824/Cognitive-Skills-Student-Performance-Dashboard)

---

## Project Overview

This project aims to **analyze cognitive skills and predict student performance** using a synthetic student dataset. It combines **data analysis, machine learning, and interactive dashboards** to provide actionable insights into learning patterns.  

Key goals:  
- Understand correlations between cognitive skills and assessment performance.  
- Predict assessment scores using a simple ML model.  
- Cluster students into learning personas for targeted interventions.  
- Visualize insights in a **Next.js dashboard** for easy exploration.

---

## Dataset

The dataset contains synthetic student records with the following fields:

| Field                | Description                                |
|---------------------|--------------------------------------------|
| `student_id`         | Unique student identifier                  |
| `name`               | Student name                               |
| `class`              | Student's class/grade                      |
| `comprehension`      | Cognitive skill score – comprehension     |
| `attention`          | Cognitive skill score – attention         |
| `focus`              | Cognitive skill score – focus             |
| `retention`          | Cognitive skill score – retention         |
| `assessment_score`   | Actual assessment score                   |
| `engagement_time`    | Time spent engaging with learning material|

---

## Data Analysis & Insights

- **Correlation Analysis:**  
  Strong positive correlations were observed between comprehension, attention, focus, retention, and assessment scores.  
  This indicates that higher cognitive skills generally lead to better performance.  

- **Clustering (Learning Personas):**  
  Students were grouped into clusters representing different learning styles:  
  - High performers with balanced skills  
  - Students with strong attention but low retention  
  - Students needing improvement across multiple skills  

- **Key Findings:**  
  - Engagement time alone does not guarantee high assessment scores.  
  - Retention and comprehension have the highest impact on performance.  
  - Personalized learning strategies can improve overall outcomes.

---

## Machine Learning

- **Model:** Linear Regression to predict `assessment_score`.  
- **Performance:**  
  - Achieved a good correlation between predicted and actual scores.  
  - Useful for identifying students at risk and suggesting targeted support.  

---

## Dashboard Features

Built with **Next.js**, the dashboard provides:  
- **Overview Stats:** Average scores and cognitive skill summaries.  
- **Charts:**  
  - Bar chart: Skill vs assessment score  
  - Scatter plot: Attention vs performance  
  - Radar chart: Student profile visualization  
- **Student Table:** Searchable and sortable student records.  
- **Insights Section:** Highlights key patterns and clusters.

---

## Tech Stack

- **Frontend & Dashboard:** Next.js, React, Chart.js  
- **Data Analysis & ML:** Python, Pandas, Scikit-learn, Matplotlib, Seaborn  
- **Deployment:** Vercel for public access  

---

## Setup Instructions

1. **Clone the repo:**
```bash
git clone https://github.com/Priyas0824/Cognitive-Skills-Student-Performance-Dashboard.git
cd Cognitive-Skills-Student-Performance-Dashboard
Install dependencies for Next.js dashboard:

bash
Copy code
npm install
Run the dashboard locally:

bash
Copy code
npm run dev
Open http://localhost:3000 to view the dashboard.

Jupyter Notebook:

Open notebook/Student_Performance_Analysis.ipynb for data analysis and ML workflow.

Run all cells to reproduce analysis, model training, and predictions.

📂 Project Structure
bash
Copy code
├─ dashboard/             # Next.js frontend
├─ notebook/              # Jupyter Notebook with analysis & ML
├─ data/                  # Synthetic dataset CSV
├─ README.md
**Highlights:**
End-to-end data analysis → ML → dashboard workflow.

Actionable insights for personalized learning interventions.

Interactive visualizations for skill-performance analysis.

Publicly deployed and accessible on Vercel.

**Links**
Live Dashboard: Vercel Link

GitHub Repo: https://github.com/Priyas0824/Cognitive-Skills-Student-Performance-Dashboard
