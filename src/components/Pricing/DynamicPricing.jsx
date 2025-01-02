import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Slider } from './../ui/slider'

export const allPlans = {
  hr360: {
    name: "Humar Resource Management",
    image: "/apps/hr360.svg",
    plans: {
      profile: { icon: <img src="/Module Icons/profile.svg" alt="profile" width={100} />, title: "Profile", price: 10 },
      employees: { icon: <img src="/Module Icons/employees.svg" alt="employees" width={100} />, title: "Employees", price: 10 },
      attendance: { icon: <img src="/Module Icons/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 15 },
      payroll: { icon: <img src="/Module Icons/payroll.svg" alt="payroll" width={100} />, title: "Payroll", price: 20 },
      organogram: { icon: <img src="/Module Icons/organogram.svg" alt="organogram" width={100} />, title: "Organogram", price: 20 },
      leaves: { icon: <img src="/Module Icons/leaves.svg" alt="leaves" width={100} />, title: "Leaves", price: 20 },
      calender: { icon: <img src="/Module Icons/calendar.svg" alt="calender" width={100} />, title: "Calender", price: 20 },
      reports: { icon: <img src="/Module Icons/reports.svg" alt="reports" width={100} />, title: "Reports", price: 20 },
      remote_team: { icon: <img src="/Module Icons/remote-team.svg" alt="remote-team" width={100} />, title: "Remote Team", price: 20 },
      holidays: { icon: <img src="/Module Icons/holidays.svg" alt="holidays" width={100} />, title: "Holidays", price: 20 },
      shifts: { icon: <img src="/Module Icons/shifts.svg" alt="shifts" width={100} />, title: "Shifts", price: 20 },
      roles: { icon: <img src="/Module Icons/roles.svg" alt="roles" width={100} />, title: "Roles", price: 20 },
      users: { icon: <img src="/Module Icons/employees.svg" alt="users" width={100} />, title: "Users", price: 20 },
    },
  },
  iteam: {
    name: "Project Management",
    image: "/apps/iteam.svg",
    plans: {
      dashboard: { icon: <img src="/Module Icons/dashboard.svg" alt="dashboard" width={100} />, title: "Dashboard & Charts", price: 10 },
      messenger: { icon: <img src="/Module Icons/chat.svg" alt="messenger" width={100} />, title: "Built-in Messenger & Online Meetings", price: 12 },
      work_time_tracking: { icon: <img src="/Module Icons/time-tracking.svg" alt="work time tracking" width={100} />, title: "Work Time Tracking", price: 12 },
      kpi_work_efficiency: { icon: <img src="/Module Icons/grades.svg" alt="kpi & work efficiency" width={100} />, title: "KPI & Work Efficiency", price: 12 },
      work_reports: { icon: <img src="/Module Icons/reports.svg" alt="work reports" width={100} />, title: "Work Reports", price: 12 },
      task_templates_automation: { icon: <img src="/Module Icons/tasks.svg" alt="task templates & automation" width={100} />, title: "Task Templates & Automation", price: 22 },
      calender_project_planning: { icon: <img src="/Module Icons/calendar.svg" alt="calender & project planning" width={100} />, title: "Calender & Project Planning", price: 18 },
      project_costing_monitoring: { icon: <img src="/Module Icons/costing.svg" alt="project costing & monitoring" width={100} />, title: "Project Costing & Monitoring", price: 28 },
      projects: { icon: <img src="/Module Icons/projects.svg" alt="projects" width={100} />, title: "Projects", price: 12 },
      modules: { icon: <img src="/Module Icons/modules.svg" alt="modules" width={100} />, title: "Modules", price: 12 },
      testing_QA: { icon: <img src="/Module Icons/testing.svg" alt="testing & QA" width={100} />, title: "Testing & QA", price: 12 },
      uat: { icon: <img src="/Module Icons/uat.svg" alt="uat" width={100} />, title: "UAT", price: 12 },
      test_results: { icon: <img src="/Module Icons/test-result.svg" alt="test results" width={100} />, title: "Test Results", price: 12 },
      tasks: { icon: <img src="/Module Icons/to-do.svg" alt="tasks" width={100} />, title: "Tasks", price: 22 },
      tickets: { icon: <img src="/Module Icons/tickets.svg" alt="tickets" width={100} />, title: "Tickets", price: 18 },
      help_support: { icon: <img src="/Module Icons/help.svg" alt="help & support" width={100} />, title: "Help & Support", price: 28 },
    },
  },
  easyforms: {
    name: "Forms Management",
    image: "/apps/easyforms.svg",
    plans: {
      form_design: { icon: <img src="/Module Icons/easy-forms.svg" alt="form design" width={100} />, title: "Form Design", price: 14 },
      integration: { icon: <img src="/Module Icons/profile.svg" alt="integration" width={100} />, title: "Integration", price: 16 },
      workflow: { icon: <img src="/Module Icons/workflow.svg" alt="workflow" width={100} />, title: "Workflow", price: 25 },
      approvals: { icon: <img src="/Module Icons/approvals.svg" alt="approvals" width={100} />, title: "Approvals", price: 35 },
      hierarchy: { icon: <img src="/Module Icons/hierarchy.svg" alt="hierarchy" width={100} />, title: "Hierarchy", price: 35 },
    },
  },
  leadkonnekt: {
    name: "Lead Generation",
    image: "/apps/leadkonnekt.svg",
    plans: {
      customers: { icon: <img src="/Module Icons/customer.svg" alt="customers" width={100} />, title: "Customers", price: 30 },
      inquiries: { icon: <img src="/Module Icons/inquiries.svg" alt="inquiries" width={100} />, title: "Inquiries", price: 30 },
      communication: { icon: <img src="/Module Icons/communication.svg" alt="communication" width={100} />, title: "Communication", price: 30 },
      integration: { icon: <img src="/Module Icons/integration.svg" alt="integration" width={100} />, title: "Integration", price: 30 },
      Follow_up: { icon: <img src="/Module Icons/follow.svg" alt="follow-up" width={100} />, title: "Follow-up", price: 30 },
    },
  },
  ischool: {
    name: "School Management",
    image: "/apps/ischool.svg",
    plans: {
      attendance: { icon: <img src="/Module Icons/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 8 },
      campus_management: { icon: <img src="/Module Icons/campus-management.svg" alt="campus management" width={100} />, title: "Campus Management", price: 8 },
      student_alumni_management: { icon: <img src="/Module Icons/student-management.svg" alt="student & alumni management" width={100} />, title: "Student & Alumni Management", price: 8 },
      teacher_Staff_Management: { icon: <img src="/Module Icons/teacher-management.svg" alt="teacher & staff anagement" width={100} />, title: "Teacher & Staff Management", price: 8 },
      parents_profile_management: { icon: <img src="/Module Icons/profile-management.svg" alt="parents profile management" width={100} />, title: "Parents' Profile Management", price: 8 },
      admissions: { icon: <img src="/Module Icons/admissions.svg" alt="admissions" width={100} />, title: "Admissions", price: 8 },
      fee_management: { icon: <img src="/Module Icons/fee-management.svg" alt="fee_management" width={100} />, title: "Fee Management", price: 8 },
      announcement_newsletter: { icon: <img src="/Module Icons/newsletter.svg" alt="announcement & newsletter" width={100} />, title: "Announcement & Newsletter", price: 8 },
      communication_SMS_Email: { icon: <img src="/Module Icons/communication.svg" alt="communication by sms & email" width={100} />, title: "Communication by SMS & Email", price: 8 },
      health_record_management_system: { icon: <img src="/Module Icons/health-record.svg" alt="health record management system" width={100} />, title: "Health Record Management System", price: 8 },
      library_management: { icon: <img src="/Module Icons/library-management.svg" alt="library management" width={100} />, title: "Library Management", price: 8 },
      data_import_export: { icon: <img src="/Module Icons/data-import.svg" alt="data import & export" width={100} />, title: "Data Import & Export", price: 8 },
      manage_classes_subjects: { icon: <img src="/Module Icons/manage-classes.svg" alt="manage classes & subjects" width={100} />, title: "Manage Classes & Subjects", price: 8 },
      students_online_attendance: { icon: <img src="/Module Icons/attendance.svg" alt="students online attendance" width={100} />, title: "Students' online Attendance", price: 8 },
      homework_assignments: { icon: <img src="/Module Icons/assignments.svg" alt="homework assignments" width={100} />, title: "Homework & Assignments", price: 8 },
      class_announcements: { icon: <img src="/Module Icons/class-announcements.svg" alt="class announcements" width={100} />, title: "Class Announcements", price: 8 },
      classes_schedule: { icon: <img src="/Module Icons/classes.svg" alt="classes schedule" width={100} />, title: "Classes Schedule", price: 8 },
      behavior_discipline: { icon: <img src="/Module Icons/discipline.svg" alt="behavior discipline" width={100} />, title: "Behavior & Discipline", price: 8 },
      examination_management: { icon: <img src="/Module Icons/examination.svg" alt="examination management" width={100} />, title: "Examination Management", price: 8 },
      grading_assignments: { icon: <img src="/Module Icons/grades.svg" alt="grading assignments" width={100} />, title: "Grading & Assignments", price: 8 },
      transcript_progress_reports: { icon: <img src="/Module Icons/progress.svg" alt="transcript & progress reports" width={100} />, title: "Transcript & Progress Reports", price: 8 },
      academic_reports: { icon: <img src="/Module Icons/reports.svg" alt="academic reports" width={100} />, title: "Academic Reports", price: 8 },
      learning_management: { icon: <img src="/Module Icons/learning-management.svg" alt="learning management" width={100} />, title: "Learning Management System", price: 8 },
      gradebook: { icon: <img src="/Module Icons/grade-book.svg" alt="gradebook" width={100} />, title: "Gradebook", price: 8 },
      interactive_assignments: { icon: <img src="/Module Icons/interactive-assignments.svg" alt="interactive assignments" width={100} />, title: "Interactive Assignments", price: 8 },
      attendance_record: { icon: <img src="/Module Icons/attendance.svg" alt="attendance record" width={100} />, title: "Attendance Record", price: 8 },
      events_birthday_updates: { icon: <img src="/Module Icons/events-and-birthday.svg" alt="events & birthday updates" width={100} />, title: "Events & Birthday Updates", price: 8 },
      integrated_with_google_meet_drive: { icon: <img src="/Module Icons/integrated-with-google.svg" alt="integrated with google meet & drive" width={100} />, title: "Integrated with Google Meet & Drive", price: 8 },
      access_to_classes_schedules_subject: { icon: <img src="/Module Icons/access-to-classes.svg" alt="access to classes schedules & subject" width={100} />, title: "Access to Classes Schedules & Subject", price: 8 },
      school_attendance: { icon: <img src="/Module Icons/attendance.svg" alt="school attendance" width={100} />, title: "School Attendance", price: 8 },
      progress_report: { icon: <img src="/Module Icons/reports-hr.svg" alt="progress report" width={100} />, title: "Progress Report", price: 8 },
      announcement_notifications: { icon: <img src="/Module Icons/notifications.svg" alt="announcement & notifications" width={100} />, title: "Announcement & Notifications", price: 8 },
    },
  },
  ischoolforme: {
    name: "School Information System",
    image: "/apps/ischoolforme.svg",
    plans: {
      notice_board: { icon: <img src="/Module Icons/notice-board.svg" alt="notice board" width={100} />, title: "Notice Board", price: 8 },
      attendance: { icon: <img src="/Module Icons/attendance.svg" alt="attendance" width={100} />, title: "Attendance", price: 8 },
      receive_fee_voucher: { icon: <img src="/Module Icons/fee-voucher.svg" alt="receive fee voucher" width={100} />, title: "Receive Fee Voucher", price: 8 },
      notifications: { icon: <img src="/Module Icons/notifications.svg" alt="notifications" width={100} />, title: "Notifications", price: 8 },
      progress_management: { icon: <img src="/Module Icons/progress.svg" alt="progress management" width={100} />, title: "Progress Management", price: 8 },
      query: { icon: <img src="/Module Icons/query.svg" alt="query" width={100} />, title: "Query", price: 8 },
      complain: { icon: <img src="/Module Icons/complain.svg" alt="complain" width={100} />, title: "Complain", price: 8 },
      suggestion: { icon: <img src="/Module Icons/suggestion.svg" alt="suggestion" width={100} />, title: "Suggestion", price: 8 },
    },
  },
  easyfee: {
    name: "Fee Management",
    image: "/apps/easyfee.svg",
    plans: {
      dashboard: { icon: <img src="/Module Icons/dashboard.svg" alt="dashboard" width={100} />, title: "Dashboard", price: 8 },
      payment_gateway: { icon: <img src="/Module Icons/payment-gateway.svg" alt="payment gateway" width={100} />, title: "Payment Gateway", price: 8 },
      remainders: { icon: <img src="/Module Icons/remainders.svg" alt="remainders" width={100} />, title: "Remainders", price: 8 },
      fee_management: { icon: <img src="/Module Icons/fee-management.svg" alt="fee management" width={100} />, title: "Fee Management", price: 8 },
      receivable_management: { icon: <img src="/Module Icons/receivable-management.svg" alt="receivable management" width={100} />, title: "Receivable Management", price: 8 },
      transactions: { icon: <img src="/Module Icons/transaction.svg" alt="transactions" width={100} />, title: "Transactions", price: 8 },
      reports: { icon: <img src="/Module Icons/reports.svg" alt="reports" width={100} />, title: "Reports", price: 8 },
      campus_management: { icon: <img src="/Module Icons/campus-management.svg" alt="campus management" width={100} />, title: "Campus Management", price: 8 },
    },
  },
};

const DynamicPricing = () => {


  const [selectedPlans, setSelectedPlans] = useState({});
  const [users, setUsers] = useState(5);

  const handlePlanSelect = (category, plan) => {
    setSelectedPlans((prev) => {
      const categoryPlans = prev[category] || [];
      const isSelected = categoryPlans.includes(plan);
      return {
        ...prev,
        [category]: isSelected
          ? categoryPlans.filter((p) => p !== plan)
          : [...categoryPlans, plan],
      };
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScrollToHash = () => {
      const fullHash = window.location.hash;
      const hash = fullHash.split('#')[2];
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    setTimeout(handleScrollToHash, 100);
    window.addEventListener('hashchange', handleScrollToHash);
    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, []);

  const calculateTotal = () => {
    return Object.entries(selectedPlans).reduce((total, [category, plans]) => {
      const categoryPlans = allPlans[category]?.plans || {};
      return total + plans.reduce((sum, plan) => sum + (categoryPlans[plan]?.price || 0), 0);
    }, 0) * users;
  };

  const handleSliderChange = (value) => {
    const userValues = [5, 10, 20, 30, 50, 100, 500];
    setUsers(userValues[value]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-0 z-10 shadow-md py-2 px-2 md:px-10 rounded-lg bg-white">
          <div className="grid lg:grid-cols-4 items-center justify-between gap-6 whitespace-nowrap">
            <div className="col-span-2 flex-1 w-full">
              <h2 className="text-2xl md:text-3xl xl:4xl font-bold text-center text-[#172554]">Select Users</h2>
              <Slider defaultValue={[0]}
                max={6}
                step={1} onValueChange={handleSliderChange} />
            </div>

            <div className="col-span-2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-2">
              <div className="flex-2 inline-flex justify-center border-2 rounded-lg border-blue-900 p-2 ">
                <p className="text-lg font-medium text-black">
                  Total: {calculateTotal() > 0 ? `$${calculateTotal().toFixed(2)}` : "$0"}
                </p>
              </div>

              <div className="flex-2 flex justify-end">
                <button
                  onClick={() => {
                    if (calculateTotal() > 0) {
                      window.location.href = "/#/get-started";
                    }
                  }}
                  className={`flex justify-center items-center gap-4 px-6 py-3 rounded-lg font-semibold text-lg text-white ${calculateTotal() > 0 ? "bg-[#172554] hover:bg-[#172554]" : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={calculateTotal() === 0}
                >
                  {calculateTotal() > 0 ? "Proceed with selected plan" : "Create your plan"}
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-center mt-8">Choose Modules</h2>

        {Object.entries(allPlans).map(([category, { name, image, plans }]) => (
          <div key={category} id={name}>
            <div className="flex gap-x-2 pt-8 pb-2">
              <h1 className="text-3xl font-semibold">{name}</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.keys(plans).map((plan) => (
                <div
                  key={plan}
                  className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${selectedPlans[category]?.includes(plan)
                    ? "border-[#172554] bg-[#172554]/10"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                  onClick={() => handlePlanSelect(category, plan)}
                >
                  <Plan icon={plans[plan].icon} title={plans[plan].title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

function Plan({ icon, title }) {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <div>{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default DynamicPricing;
