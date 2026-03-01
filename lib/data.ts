
import { LayoutDashboard, AppWindow, Bot, Brain, GraduationCap, Monitor } from 'lucide-react';

export const topics = [
    {
        slug: 'actionable-dashboard',
        title: 'Actionable Dashboard',
        description: 'Data-driven insights visualized for immediate impact.',
        icon: LayoutDashboard,
        tags: ['Sales', 'HR', 'Finance'],
        stats: '15+ Dashboards',
        projects: [
            {
                title: 'Sales Performance Dashboard',
                description: 'Real-time tracking of sales KPIs, regional performance, and top products.',
                technologies: ['Power BI', 'SQL Server', 'DAX'],
                image: '/images/projects/dashboard-sales.jpg'
            },
            {
                title: 'HR Analytics Suite',
                description: 'Comprehensive view of employee retention, recruitment funnel, and performance metrics.',
                technologies: ['Tableau', 'Excel', 'Python'],
                image: '/images/projects/dashboard-hr.jpg'
            }
        ]
    },
    {
        slug: 'power-app',
        title: 'Power App',
        description: 'Custom business applications built for efficiency.',
        icon: AppWindow,
        tags: ['Operations', 'Forms', 'Workflow'],
        stats: '10+ Apps Deployed',
        projects: [
            {
                title: 'Sales & Service Process Automation',
                description: 'Built custom apps to streamline internal sales tracking and IT service request management, reducing manual follow-ups and improving response times.',
                technologies: ['Power Apps', 'Power Automate', 'SharePoint'],
                items: ['Internal Work Tracking', 'IT Requirements Request'],
                image: '/images/projects/app-sales-service.png'
            },
            {
                title: 'Workforce Operations - Internal Apps and Automation Workflows',
                description: 'Delivered a 3-app suite to digitize employee attendance, HR management, and financial payroll processes across the organization.',
                technologies: ['Power Apps', 'Dataverse', 'Power Automate'],
                items: ['Attendance Tracking', 'Employee Management Suite', 'Financial & Payroll'],
                image: '/images/projects/app-workforce.png'
            },
            {
                title: 'Enterprise Financial & Procurement Operations',
                description: 'Designed an integrated suite of apps to streamline internal asset tracking, financial claims, and partner onboarding processes.',
                technologies: ['Power Apps', 'SharePoint', 'Power Automate'],
                items: ['Expense Reimbursement', 'Partner Registration Portal', 'Asset Management System'],
                image: '/images/projects/app-finance.png'
            },
            {
                title: 'End-to-End Production Tracking Platform',
                description: 'A comprehensive digital solution to digitize the entire production lifecycle, integrating real-time status monitoring with shop-floor QR scanning updates.',
                technologies: ['Power Apps', 'Power BI', 'QR Integration'],
                items: ['Production Management App', 'Mobile QR Scanner'],
                image: '/images/projects/app-production.png'
            }
        ]
    },
    {
        slug: 'automation-project',
        title: 'Automation Project',
        description: 'Streamlining workflows with intelligent automation.',
        icon: Bot,
        tags: ['RPA', 'Power Automate', 'Workflows'],
        stats: '35+ Flows Built',
        projects: [
            {
                title: 'Sales & Service Process Automation',
                description: 'Designed and delivered 20+ custom workflows to automate the entire sales pipeline and service support engine, eliminating manual handoffs.',
                technologies: ['Power Automate', 'SharePoint', 'Outlook'],
                items: ['Sales Pipeline Automation', 'Service Support Engine'],
                image: '/images/projects/auto-sales.png'
            },
            {
                title: 'Workforce Operations - Internal Apps and Automation Workflows',
                description: 'Built 5 automation flows to handle daily work log summaries, payroll calculations, and multi-level approval routing.',
                technologies: ['Power Automate', 'Dataverse', 'Teams'],
                items: ['Work Log Summary', 'Payroll', 'Approvals'],
                image: '/images/projects/auto-workforce.png'
            },
            {
                title: 'Enterprise Financial & Procurement Operations',
                description: 'Implemented 10 automation flows for complex multi-level approval chains and end-to-end process automation across financial operations.',
                technologies: ['Power Automate', 'SAP', 'SharePoint'],
                items: ['Multi-level Approvals', 'Process Automation'],
                image: '/images/projects/auto-finance.png'
            }
        ]
    },
    {
        slug: 'ai-solution',
        title: 'AI Solution',
        description: 'Leveraging artificial intelligence for complex problem solving.',
        icon: Brain,
        tags: ['NLP', 'Predictive', 'GenAI'],
        stats: '95% Accuracy',
        projects: [
            {
                title: 'Customer Service Chatbot',
                description: '24/7 AI assistant capable of handling 80% of routine inquiries.',
                technologies: ['OpenAI API', 'Python', 'React'],
                image: '/images/projects/ai-chatbot.jpg'
            },
            {
                title: 'Demand Forecasting Model',
                description: 'Machine learning model predicting product demand with 95% accuracy.',
                technologies: ['Python', 'Scikit-learn', 'TensorFlow'],
                image: '/images/projects/ai-forecast.jpg'
            }
        ]
    },
    {
        slug: 'training',
        title: 'Training',
        description: 'Hands-on professional training for corporate & educational excellence.',
        icon: GraduationCap,
        tags: ['Power Apps', 'Power Automate', 'AI Builder'],
        stats: '10+ Classes',
        projects: [
            {
                title: 'Professional Training for Corporate & Educational Excellence',
                description: 'A comprehensive, hands-on training program with over 10 delivered classes designed to equip corporate professionals and educators with low-code skills, focusing on transforming manual processes into digital solutions.',
                technologies: ['Power Apps', 'Power Automate', 'AI Builder'],
                image: '/images/projects/training-corporate.png',
                sections: [
                    {
                        heading: 'Core Learning Modules',
                        items: ['Power Apps Essential & Advanced Classes', 'Power Automate Essential & Advanced Classes', 'AI Builder']
                    },
                    {
                        heading: 'Audience',
                        items: ['Corporate Professionals', 'Educational Personnel']
                    }
                ]
            }
        ]
    },
    {
        slug: 'digital-solution',
        title: 'Digital Solution',
        description: 'End-to-end digital transformation from web platforms to data ecosystems.',
        icon: Monitor,
        tags: ['Web', 'Mobile', 'Cloud', 'Data'],
        stats: '10+ Solutions',
        projects: [
            {
                title: 'Enterprise Web & Mobile Platforms',
                description: 'Full-stack web applications and responsive mobile solutions built for enterprise-scale operations and customer engagement.',
                technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
                image: '/images/projects/digital-web.jpg'
            },
            {
                title: 'Data Platform & Analytics Infrastructure',
                description: 'Cloud-based data warehousing and ETL pipelines enabling real-time analytics and cross-departmental insights.',
                technologies: ['Azure', 'Databricks', 'SQL Server', 'Python'],
                image: '/images/projects/digital-data.jpg'
            },
            {
                title: 'System Integration & API Development',
                description: 'Seamless integration between legacy systems and modern platforms through custom APIs and middleware solutions.',
                technologies: ['REST API', 'Azure Functions', 'Power Platform', 'SAP'],
                image: '/images/projects/digital-api.jpg'
            }
        ]
    }
];

export function getTopic(slug: string) {
    return topics.find(t => t.slug === slug);
}
