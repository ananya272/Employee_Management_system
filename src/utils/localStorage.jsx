const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare monthly report",
          "description": "Collect and compile sales data for July",
          "date": "2025-08-10",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team meeting",
          "description": "Discuss project progress with the team",
          "date": "2025-08-15",
          "category": "Meeting",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client follow-up",
          "description": "Email follow-up with client regarding proposal",
          "date": "2025-08-18",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review pull requests for frontend project",
          "date": "2025-08-09",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update Documentation",
          "description": "Add API changes to the project documentation",
          "date": "2025-08-12",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "description": "Resolve login authentication issue",
          "date": "2025-08-14",
          "category": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Deploy build",
          "description": "Push new release to staging server",
          "date": "2025-08-16",
          "category": "Deployment",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Market research",
          "description": "Research competitor pricing strategy",
          "date": "2025-08-11",
          "category": "Research",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Draft proposal",
          "description": "Prepare draft for new client project",
          "date": "2025-08-13",
          "category": "Proposal",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Presentation",
          "description": "Create slides for quarterly review",
          "date": "2025-08-20",
          "category": "Presentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory Check",
          "description": "Check hardware availability in stockroom",
          "date": "2025-08-09",
          "category": "Inventory",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Supplier call",
          "description": "Discuss supply timeline with vendor",
          "date": "2025-08-13",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "System upgrade",
          "description": "Upgrade office systems to latest version",
          "date": "2025-08-15",
          "category": "IT",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Prepare checklist",
          "description": "Create safety checklist for employees",
          "date": "2025-08-19",
          "category": "Safety",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Training session",
          "description": "Conduct training on project management tools",
          "date": "2025-08-08",
          "category": "Training",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Performance review",
          "description": "Evaluate team member’s performance",
          "date": "2025-08-12",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Write blog post",
          "description": "Draft article on latest industry trends",
          "date": "2025-08-17",
          "category": "Content",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return {employees, admin}
}