
import { LayoutDashboard, AppWindow, Bot, Brain } from 'lucide-react';

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
                image: '/images/projects/dashboard-sales.jpg' // Placeholder path
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
        stats: '8+ Apps Deployed',
        projects: [
            {
                title: 'Inventory Management App',
                description: 'Mobile-first application for tracking stock levels and scanning barcodes.',
                technologies: ['Power Apps', 'SharePoint', 'Power Automate'],
                image: '/images/projects/app-inventory.jpg'
            },
            {
                title: 'Leave Request Portal',
                description: 'Streamlined process for submitting and approving employee leave requests.',
                technologies: ['Power Apps', 'Dataverse', 'Teams Integration'],
                image: '/images/projects/app-leave.jpg'
            }
        ]
    },
    {
        slug: 'automation-project',
        title: 'Automation Project',
        description: 'Streamlining workflows with intelligent automation.',
        icon: Bot,
        tags: ['RPA', 'ETL', 'Scripts'],
        stats: '500hrs Saved/Mo',
        projects: [
            {
                title: 'Invoice Processing Bot',
                description: 'Automated extraction of data from PDF invoices and entry into SAP.',
                technologies: ['UiPath', 'OCR', 'SAP'],
                image: '/images/projects/auto-invoice.jpg'
            },
            {
                title: 'Email Classification Agent',
                description: 'Automatically sorts and responds to customer support emails.',
                technologies: ['Power Automate', 'AI Builder', 'Outlook'],
                image: '/images/projects/auto-email.jpg'
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
    }
];

export function getTopic(slug: string) {
    return topics.find(t => t.slug === slug);
}
